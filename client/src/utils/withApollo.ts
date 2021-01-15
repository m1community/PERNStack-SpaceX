import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { createWithApollo } from "./createWithApollo"
import { LaunchesQuery } from "../generated/graphql";



const createClient = (ctx: NextPageContext) => {

  const backEndLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: "include",
    
  })

  const spaceXAPI = new HttpLink({
    uri: "https://spacexdata.herokuapp.com/graphql",

  })

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launches: {
            keyArgs: false,
            merge(existing = [], incoming:  LaunchesQuery[]){
                return [
                    ...existing,
                    ...incoming
                ]
            }
          }
        }
      }
    }
  })

  // persistCache({
  //   cache,
  //   storage: new LocalStorageWrapper(window.localStorage)
  // })


  return new ApolloClient({
      link: ApolloLink.split(
        operation => operation.getContext().clientName === "spaceXAPI", spaceXAPI, backEndLink
      ),
      headers: {
        cookie: (typeof window === undefined ? ctx.req?.headers.cookie : undefined) || ""
      },
      ssrMode: true,
      cache
    }
  )
};

//@ts-ignore
export const withApollo = createWithApollo(createClient)

