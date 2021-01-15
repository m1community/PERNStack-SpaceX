import { Box, Text, Image, useColorMode, StatHelpText, StatArrow, Stat, Tag } from "@chakra-ui/react"
import React from "react"

interface LaunchCardProps {
    mission_name?: string | null
    launch_success?: boolean | null
    details?: string | null
    upcoming?: boolean | null
    mission_patch?: string | null
}

export const LaunchCard: React.FC<LaunchCardProps> = ({mission_name, launch_success, details, upcoming, mission_patch}) => {
    const {colorMode} = useColorMode()
    return (
        <Box
            shadow="md" 
            p={4}
            bgColor={colorMode === "light" ? "gray.200" : "gray.800"} 
            borderBottom={ launch_success === null ? "" : launch_success ? "solid 2px #1ac21a" : "solid 2px #ff4a3d" } >
                <Box display="flex" flexDir={["column", "row"]} >
                    <Box maxW="150px" flexShrink={0} w="100%">
                        { mission_patch ? 
                            <Image
                                borderRadius="lg"
                                maxW="150px"
                                src={mission_patch}
                                fallbackSrc="https://via.placeholder.com/150"
                                alt="Mission patch"
                            /> : 
                            <Image
                                borderRadius="lg"
                                maxW="150px"
                                src=""
                                fallbackSrc="https://via.placeholder.com/150"
                                alt="Mission patch"
                            /> 
                        }
                    </Box>
                    <Box ml={[0, 4]} w="100%" >
                        <Box display="flex" w="100%"  justifyContent="space-between" >
                            <Text 
                                fontWeight="bold"
                                textTransform="uppercase"
                                fontSize="sm"
                                letterSpacing="wide"
                                color="blue.500"
                                >
                                    {mission_name}
                            </Text>
                            <Box display={upcoming ? "flex" : "none"} >
                                <Stat>
                                    <StatHelpText fontSize="sm" fontWeight="bold">
                                        <StatArrow type="increase"/>
                                        INCOMING
                                    </StatHelpText>
                                </Stat>
                            </Box>
                        </Box>
                        <Box w="100%">
                            <Text w="100%" mt={2} colorScheme="gray" textAlign="justify" >
                                {details ? details : 
                                    <Text fontStyle="italic" >No detail available...</Text> 
                                }
                            </Text>
                        </Box>
                    </Box>
            </Box>
            <Box pt={2} w="100%" d={launch_success === null ? "none" : "flex"}>
                <Tag size="lg" ml="auto" colorScheme={launch_success ? "green" : "red"} >{launch_success ? "Launch successful" : "Launch Failed"}</Tag>
            </Box>
        </Box>
    )
}