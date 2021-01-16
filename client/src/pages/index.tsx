import { Box, Center, Divider, Stack, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, useColorMode, Heading, Text } from "@chakra-ui/react"
import { Container } from '../components/Container'
import { Wrapper } from "../components/Wrapper"
import React from "react"
import { NavBar } from "../components/NavBar"
import { MainMenu } from "../components/MainMenu"
import { useHistoricalEventsQuery, useNextLaunchQuery } from "../generated/graphql"
import { EventCard } from "../components/EventCard"
import { LaunchCard } from "../components/LaunchCard"

const Index = () => {

  const {colorMode} = useColorMode()

  const { data, loading } = useHistoricalEventsQuery({
    context: {clientName: "spaceXAPI"}
  })

  const { data: nextLaunch, loading: nextLoading } = useNextLaunchQuery({
    context: {clientName: "spaceXAPI"}
  })


  return (
    <>
      <Wrapper title="SpaceX Flights">
        <NavBar/>
        <Container minH="100vh" pt="80px" pb={4} pr="1.5rem" >
          <MainMenu>
            <Stack direction={["column", "row"]} width="100%" justifyContent={["center", "space-between"]} >
              <Box p={4} bgColor={colorMode === "light" ? "gray.200" : "gray.800"} width='100%' >
                <Stat>
                  <StatLabel>Total Launches</StatLabel>
                  <StatNumber>348 046</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    78 456
                  </StatHelpText>
                </Stat>
              </Box>
              <Box p={4} width="100%" bgColor={colorMode === "light" ? "gray.200" : "gray.800"} >
                <Stat>
                  <StatLabel>Total Launches</StatLabel>
                  <StatNumber>348 046</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    78 456
                  </StatHelpText>
                </Stat>
              </Box>
              <Box p={4} w="100%" bgColor={colorMode === "light" ? "gray.200" : "gray.800"} >
                <Stat>
                  <StatLabel>Total Launches</StatLabel>
                  <StatNumber>348 046</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    78 456
                  </StatHelpText>
                </Stat>
              </Box>
            </Stack>
            <Center>
              <Divider mb={4} p={4} w="150px" />
            </Center>
            <Text fontSize="md" textTransform="uppercase" fontWeight="bold" color="blue.500" > &bull; next launch </Text>
            {!nextLoading ? nextLaunch?.nextLaunch?.map((v, i) => (
              <LaunchCard
                key={i * 2}
                mission_name={v?.mission_name}
                mission_patch={v?.links?.mission_patch_small}
                details={v?.details}
                launch_success={v?.launch_success}
                upcoming={v?.upcoming}
              />
            )) : "No incoming Launch"}
            <Center>
              <Divider mb={4} p={4} w="150px" />
            </Center>
            <Stack spacing={4} pt={4} >
              <Heading size="xl" >Latest Historical event from SpaceX</Heading>
              {!loading ? 
                data?.history?.map((v, i) => (
                  <EventCard 
                    key={i} 
                    title={v?.title} 
                    article_name={v?.links?.article} />
                ))
                :
                  "No data"
              }
            </Stack>
          </MainMenu>
        </Container>
      </Wrapper>
    </>
  )
}

export default Index
