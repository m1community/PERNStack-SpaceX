import { Stack } from "@chakra-ui/react"
import React from "react"
import { Container } from "../components/Container"
import { MainMenu } from "../components/MainMenu"
import { MissionCard } from "../components/MissionCard"
import { NavBar } from "../components/NavBar"
import { Wrapper } from "../components/Wrapper"
import { useMissionsQuery } from "../generated/graphql"
import { isServer } from "../utils/isServer"

const Missions = () => {

    const {loading, data} = useMissionsQuery({
        context: {clientName: "spaceXAPI"},
        skip: isServer()
    })

    return (
        <Wrapper title="Missions">
            <NavBar />
            <Container minH="100vh" pt="80px" pb={4} pr="1.5rem" >
                <MainMenu>
                    <Stack spacing={4} >
                        {loading ? "Loading" : data?.missions?.map((v, i) => (
                            <MissionCard
                                key={i}
                                name={v?.mission_name}
                                desc={v?.description}
                                manufacturers={v?.manufacturers!}
                                website={v?.website}
                            />
                        ))}
                    </Stack>
                </MainMenu>
            </Container>
        </Wrapper>
    )
}

export default Missions