import { Button, Center, Spinner, Stack } from "@chakra-ui/react"
import React, { useState } from"react"
import { Container } from "../components/Container"
import { LaunchCard } from "../components/LaunchCard"
import { MainMenu } from "../components/MainMenu"
import { NavBar } from "../components/NavBar"
import { Wrapper } from "../components/Wrapper"
import { useLaunchesQuery } from "../generated/graphql"
import { isServer } from "../utils/isServer"

const Launches = () => {

    const { data, loading, fetchMore } = useLaunchesQuery({
        variables: {
            limit: 10,
            offset: 0
        },
        skip: isServer(),
       
        context: {
            clientName: "spaceXAPI"
        }
    })

    const [isLoadingMore, setIsLoadingMore] = useState(false)

    const onFetch = async (currentLength: number) => {
        setIsLoadingMore(true)
        await fetchMore({
        variables: {
            limit: 10,
            offset: currentLength
        },
        context: {clientName: "spaceXAPI"}
        })
        setIsLoadingMore(false)
    }

    return (
        <Wrapper title="Launches">
            <NavBar />
            <Container minH="100vh" pt="80px" pb={4} pr="1.5rem" >
                <MainMenu>
                    <Stack spacing={4} >
                        {loading ? <Center><Spinner colorScheme="blue" size="xl" /></Center> :
                            data?.launches?.map((value, index) => {
                                return <LaunchCard
                                    key={index}
                                    mission_name={value?.mission_name}
                                    launch_success={value?.launch_success}
                                    details={value?.details} 
                                    upcoming={value?.upcoming}
                                    mission_patch={value?.links?.mission_patch_small!}
                                />
                            })
                        } 
                        
                            <Button 
                                w="50%"
                                alignSelf="center"
                                colorScheme="blue" 
                                isLoading={isLoadingMore} 
                                isDisabled={data?.launches?.[0]?.flight_number!  === data?.launches?.length}
                                onClick={() => onFetch(data?.launches?.length || 0)}
                            >
                                Load more
                            </Button>
                           
                    </Stack>
                </MainMenu>
            </Container>
        </Wrapper>
    )
}

export default Launches