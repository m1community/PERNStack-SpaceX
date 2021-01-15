import { List, ListItem, Box, Link, ListIcon, Text, useColorMode } from "@chakra-ui/react"
import React from "react"
import { FiTarget } from "react-icons/fi"
import { IoIosRocket } from "react-icons/io"
import { SiLaunchpad } from "react-icons/si"
import NextLink from "next/link"
import { useRouter } from "next/router"


export const MainMenuList = () => { 
    
    const router = useRouter()

    const isCurrentPath = (path: string) => router.pathname === path
    const {colorMode} = useColorMode()

    return (
        <List spacing={4} pl={4} w='100%'>
            <ListItem display="flex" w="100%" >
                <Box 
                    display="flex" 
                    p={2} w="100%" 
                    bgColor={ isCurrentPath("/launches") ? "rgba(56, 212, 233, 0.3)" : "none"} 
                    borderRadius="lg" 
                >
                    <NextLink passHref href="/launches">
                        <Link _hover={{textDecor: "none"}} display="flex" >
                            <ListIcon as={IoIosRocket} />
                            <Text 
                                fontSize="sm" 
                                fontWeight="600" 
                                color={isCurrentPath("/launches") && colorMode === "dark" ? "white" : "rgb(113, 128, 150)"}>
                                    LAUNCHES
                            </Text>
                        </Link>
                    </NextLink>
                </Box>
            </ListItem>

            <ListItem display="flex">
                <Box 
                    display="flex" 
                    p={2} w="100%" 
                    bgColor={ isCurrentPath("/rockets") ? "rgba(56, 212, 233, 0.3)" : "none"} 
                    borderRadius="lg" 
                >
                    <NextLink passHref href="/rockets" >
                        <Link _hover={{textDecor: "none"}} display="flex" >
                            <ListIcon as={SiLaunchpad} />
                            <Text 
                                fontSize="sm" 
                                fontWeight="600" 
                                color={isCurrentPath("/rockets") && colorMode === "dark" ? "white" : "rgb(113, 128, 150)"}>
                                    ROCKETS
                            </Text>
                        </Link>
                    </NextLink>
                </Box>
            </ListItem>

            <ListItem>
                <Box 
                    display="flex" 
                    p={2} w="100%" 
                    bgColor={ isCurrentPath("/missions") ? "rgba(56, 212, 233, 0.3)" : "none"} 
                    borderRadius="lg" 
                >
                    <NextLink passHref href="/missions" >
                        <Link _hover={{textDecor: "none"}} display="flex" >
                            <ListIcon as={FiTarget} />
                            <Text 
                                fontSize="sm" 
                                fontWeight="600" 
                                color={isCurrentPath("/missions") && colorMode === "dark" ? "white" : "rgb(113, 128, 150)"}>
                                    MISSIONS
                            </Text>
                        </Link>
                    </NextLink>
                </Box>
            </ListItem>
        </List>
    )
}