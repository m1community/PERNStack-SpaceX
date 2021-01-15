import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { AppProps } from 'next/app'
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useState } from 'react';
import { CachePersistor, LocalStorageWrapper } from 'apollo3-cache-persist';
import { useEffect } from 'react';
import { LaunchesQuery } from '../generated/graphql';
import { sleep } from '../utils/sleep';
import { createUploadLink } from 'apollo-upload-client'

function MyApp({ Component, pageProps }: AppProps) {

  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
 
  
  const backEndLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: "include",
    
  })

  const spaceXAPI = new HttpLink({
    uri: "https://spacexdata.herokuapp.com/graphql",

  })

  const uploadLink = createUploadLink({ uri: "http://localhost:4000/graphql" })

  useEffect(() => {
    const init = async() => {
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
      let newPersistor = new CachePersistor({
        cache,
        storage: new LocalStorageWrapper(window.localStorage),
        debug: true,
        trigger: "write"
      })
      await newPersistor.restore()
      await sleep(1000)

      setClient(
        new ApolloClient({
          //@ts-ignore
          link: ApolloLink.from([backEndLink, spaceXAPI, uploadLink]),
          cache,
          ssrMode: typeof window === undefined
        })
      )
    }

    init().catch(e => console.log(e))
  }, [])

  if(!client) {
    return (
      <ChakraProvider resetCSS theme={theme}>
        Loading...
      </ChakraProvider>
    )
  }

  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
