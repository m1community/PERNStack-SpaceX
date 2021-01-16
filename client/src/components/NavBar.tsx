import { CloseIcon, HamburgerIcon, MoonIcon, SettingsIcon } from "@chakra-ui/icons"
import { Button, Flex, FlexProps, Heading, IconButton, useColorMode, Link, HStack, Avatar, Box, useDisclosure, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, Drawer, DrawerBody, Center, Divider } from "@chakra-ui/react"
import React, { useState } from "react"
import { bgColor, color } from "../utils/colors"
import NextLink from "next/link"
import { SearchInput } from "./SearchInput"
import { FaFlickr, FaLink, FaSun, FaTwitter } from "react-icons/fa"
import { SettingsMenu } from "./SettingsMenu"
import { CustomPopover } from "./CustomPopover"
import { MainMenuList } from "./MainMenuList"
import { useAuth } from "../hooks/useAuth"
import { useGetAvatarQuery, useLogoutMutation } from "../generated/graphql"
import { useApolloClient } from "@apollo/client"

export const NavBar: React.FC<FlexProps> = () => {

    const {isMe, loading: userLoading} = useAuth()

    const [logout, { loading }] = useLogoutMutation()
    const apolloClient = useApolloClient()
    const {colorMode, toggleColorMode} = useColorMode()
    const {isOpen, onOpen, onClose} = useDisclosure()
    
    const [avatar, setAvatar] = useState("")

    const {} = useGetAvatarQuery({
        onCompleted: (data) => {
            console.log("avatar", data.getAvatar)

            setAvatar(data.getAvatar)
        }
    })

    
    return ( 
        <Flex
            pos="fixed"
            bg={bgColor[colorMode]}
            color={color[colorMode]}
            zIndex={1}
            w="100%"
            display="block"
            top="0px"
            left="0px"
            right="0px"
            borderTopWidth="6px"
            borderTopStyle="solid"
            borderTopColor="blue.400"
            
            >
                <Flex display="block" h="4.5rem" marginLeft="auto" marginRight="auto" maxW="1200px" >
                    <Flex display="flex" h="100%" px="1.5rem" justifyContent="space-between" >
                        <Flex display={["none", "flex", "flex", "flex"]} alignItems="center" >  
                            <NextLink passHref href="/">
                                <Link _hover={{textDecor: "none"}} >
                                    <Heading>Spacex</Heading>
                                </Link>
                            </NextLink>
                        </Flex>
                        <Flex display="flex" alignItems="center" justifyContent="flex-end" w="100%" maxW="824px" >
                            <SearchInput/>
                             <HStack display={["none", "none", "flex", "flex"]} >
                                <Link href="https://twitter.com/SpaceX">
                                    <IconButton variant="ghost" aria-label="twitter" icon={<FaTwitter />} />
                                </Link>
                                <Link href="https://www.flickr.com/photos/spacex/">
                                    <IconButton variant="ghost" aria-label="flickr" icon={<FaFlickr />} />
                                </Link>
                                <Link href="https://www.spacex.com/">
                                    <IconButton variant="ghost" aria-label="spaceX" icon={<FaLink />} />
                                </Link>
                            </HStack>

                            {!userLoading && isMe ?
                                <Box d={["none", "none", "flex", "flex"]}>
                                    <CustomPopover user={isMe} >               
                                        <Avatar _hover={{cursor: "pointer"}} size="sm" src={`http://localhost:4000/images/${avatar}`} mt={1} mx={4} name={isMe.first_name + isMe.last_name} />
                                    </CustomPopover>       
                                    <HStack>
                                        <SettingsMenu>
                                            <IconButton
                                                aria-label="settings"
                                                variant="outline"
                                                onClick={() => console.log("settings")}
                                                icon={<SettingsIcon />}
                                                colorScheme="black"
                                            />
                                        </SettingsMenu>
                                        <IconButton 
                                            aria-label="logout"
                                            variant='outline' 
                                            onClick={async() => {
                                                await logout()
                                                await apolloClient.resetStore()
                                            }}
                                            isLoading={loading}
                                            icon={<CloseIcon />}
                                            colorScheme="red"
                                        /> 
                                    </HStack>
                                </Box>
                                : 
                                <Box d={["none", "none", "flex", "flex"]} >
                                    <NextLink href="/login">
                                        <Button colorScheme="blue" ml={4} mr={4} minW="100px">Login</Button>
                                    </NextLink>

                                    <NextLink href="/register">
                                        <Button colorScheme="blue" minW="100px">Register</Button>
                                    </NextLink>
                                </Box> 
                            }
                            <IconButton display={["flex", "flex", "none", "none"]} onClick={onOpen} mx={2} aria-label="burgermenu" icon={<HamburgerIcon/>} variant="ghost" />
                            <IconButton display="flex" ml={[0, 0, 4]} variant="ghost" onClick={toggleColorMode} aria-label="mode" icon={colorMode === "light" ? <MoonIcon /> : <FaSun />} />
                            <Drawer 
                                isOpen={isOpen}
                                placement="right"
                                onClose={onClose}
                                size="full"
                            >
                                <DrawerOverlay>
                                    <DrawerContent>
                                        <DrawerCloseButton mt={2} />
                                        <DrawerHeader>SpaceX</DrawerHeader>
                                        <DrawerBody>
                                            <Center>
                                                <Box d="flex" flexDir="column" >
                                                    <HStack display="flex" >
                                                        <IconButton href="https://twitter.com/SpaceX" as={Link} variant="ghost" aria-label="twitter" icon={<FaTwitter />} />
                                                        
                                                        <IconButton href="https://www.flickr.com/photos/spacex/" as={Link} variant="ghost" aria-label="flickr" icon={<FaFlickr />} />
                                                        
                                                        <IconButton href="https://www.spacex.com/" as={Link} variant="ghost" aria-label="spaceX" icon={<FaLink />} />
                                                    </HStack>
                                                    <Divider maxW="150px" my={4} />
                                                    <Flex>
                                                        <MainMenuList />
                                                    </Flex>
                                                    {!userLoading && isMe ? 
                                                        <Flex mt={4} flexDir="row" >          
                                                            <Avatar _hover={{cursor: "pointer"}} size="sm" src="" mt={1} mx={2} name={isMe.username} />
                                                            <HStack>
                                                                <SettingsMenu>
                                                                    <IconButton
                                                                        aria-label="settings"
                                                                        variant="outline"
                                                                        onClick={() => console.log("settings")}
                                                                        icon={<SettingsIcon />}
                                                                        colorScheme="black"
                                                                    />
                                                                </SettingsMenu>
                                                                <IconButton 
                                                                    aria-label="logout"
                                                                    variant='outline' 
                                                                    onClick={async() => {
                                                                        await logout()
                                                                        await apolloClient.resetStore()
                                                                    }}
                                                                    isLoading={loading}
                                                                    icon={<CloseIcon />}
                                                                    colorScheme="red"
                                                                /> 
                                                            </HStack>
                                                        </Flex>
                                                    :
                                                        <Flex mt={4} flexDir="column">
                                                            <NextLink href="/login">
                                                                <Button colorScheme="blue" minW="100px">Login</Button>
                                                            </NextLink>

                                                            <NextLink href="/register">
                                                                <Button colorScheme="blue" mt={4} minW="100px">Register</Button>
                                                            </NextLink>
                                                        </Flex>
                                                    }
                                                </Box>
                                            </Center>
                                        </DrawerBody>
                                    </DrawerContent>
                                </DrawerOverlay>
                            </Drawer>
                        </Flex>
                    </Flex>
                </Flex>
        </Flex>
    )
}