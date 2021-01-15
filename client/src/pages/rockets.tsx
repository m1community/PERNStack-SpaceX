import { Stack } from "@chakra-ui/react"
import React from "react"
import { Container } from "../components/Container"
import { MainMenu } from "../components/MainMenu"
import { NavBar } from "../components/NavBar"
import { RocketCard } from "../components/RocketCard"
import { Wrapper } from "../components/Wrapper"
import { useRocketsQuery } from "../generated/graphql"
import { isServer } from "../utils/isServer"


const Rockets = () => {

    const {data, loading} = useRocketsQuery({
        context: {clientName: "spaceXAPI"},
        skip: isServer()
    })
    console.log(data)
    return (
        <Wrapper title="Rockets" >
            <NavBar />
            <Container minH="100vh" pt="80px" pb={4} pr="1.5rem">
                <MainMenu>
                    <Stack spacing={4}>
                    {!loading ? data?.rockets?.map((v, i) => {
                        if(!v) return
                        return <RocketCard
                            key={i}
                            active={v.active!}
                            cost={v.cost_per_launch}
                            description={v.description}
                            firstFlight={v.first_flight}
                            images={v.flickr_images!}
                            rocketName={v.rocket_name}
                            rocketType={v.rocket_type}
                            succesRate={v.success_rate_pct!}
                            wikipedia={v.wikipedia}
                        />
                        }) : "No more data" }
                    </Stack>
                </MainMenu>
            </Container>
        </Wrapper>
    )
}

export default Rockets