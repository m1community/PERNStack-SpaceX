import { CheckIcon, CloseIcon } from "@chakra-ui/icons"
import { Box, BoxProps, Text, useColorMode, Divider, Stat, StatLabel, StatNumber, Tag, TagLabel, Button, Link, SimpleGrid, Center } from "@chakra-ui/react"
import React from "react"
import { priceFormatter } from "../utils/priceFormatter"
import { ImageSlider } from "./ImageSlider"

interface RocketProps {
    rocketName?: string | null,
    rocketType?: string | null,
    firstFlight?: string | null,
    wikipedia?: string | null,
    description?: string | null ,
    active: boolean | null,
    cost?: number | null,
    succesRate: number | null,
    images?: (string | null)[]

}

export const RocketCard: React.FC<BoxProps & RocketProps> = ({rocketName, firstFlight, wikipedia, description, active, cost, succesRate, images}) => {
     
    const {colorMode} = useColorMode()
    return (
        <Box shadow="md" p={4}  bgColor={colorMode === "light" ? "gray.200" : "gray.800"}>
            <Box d="flex" w="100%" py={4} justifyContent="flex-end">
                <Tag size="lg" colorScheme={active ? "green" : "red"} borderRadius="full" >
                    {active ? <CheckIcon w={4} h={4} mr={2} /> : <CloseIcon w={4} h={4} mr={2} />}
                    <TagLabel mb={1} > {active ? "Active" : "Not active"} </TagLabel>
                </Tag>
            </Box>
            <Box d="flex" alignItems="center" justifyContent="center" pt={2} >
                <ImageSlider images={images!} />
            </Box>
            <Box display="flex" w="100%" flexDir="column" justifyContent="space-between" >
                <Divider p={4} w="150px" alignSelf="center" />
                <Text 
                    fontWeight="bold"
                    align="center"
                    pt={4}
                    textTransform="uppercase"
                    fontSize="lg"
                    letterSpacing="wide"
                    color="blue.500"
                    >
                        {rocketName}
                </Text>
                <Box w="100%" >
                    <Text w="100%" mt={2} colorScheme="gray" textAlign="justify" >
                        {description ? description : 
                            <Text fontStyle="italic" >No detail available...</Text> 
                        }
                    </Text>
                </Box>
                <Divider maxW="150px" alignSelf="center" m={4} />
                <Center>
                    <Box d="flex" w="auto">
                        <Box d="flex">
                            <SimpleGrid py={4} gap={4} columns={[1, 3, 3, 3]} >
                                    <Stat>
                                        <StatLabel textTransform="uppercase" >Success Rate</StatLabel>
                                        <StatNumber fontSize="xl" > {succesRate}% </StatNumber>
                                    </Stat>
                                    <Stat>
                                        <StatLabel textTransform="uppercase"> Cost per flight </StatLabel>
                                        <StatNumber fontSize="xl" > {priceFormatter(cost!)} </StatNumber>
                                    </Stat>
                                    <Stat ml={["0", "auto"]} >
                                        <StatLabel textTransform="uppercase" >First Flight</StatLabel>
                                        <StatNumber fontSize="xl" > {firstFlight} </StatNumber>
                                    </Stat>
                            </SimpleGrid>
                        </Box>
                    </Box>
                </Center>
                <Box w="100%" d="flex" justifyContent={["center", "flex-end"]} >
                    <Link href={wikipedia || ""} >
                        <Button colorScheme="gray" >
                            <Text p={4} >
                                Read More &#8594;
                            </Text>
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}