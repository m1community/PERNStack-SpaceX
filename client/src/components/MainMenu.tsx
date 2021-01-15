import { Flex } from "@chakra-ui/react"
import React from "react"
import { MainMenuList } from "./MainMenuList"


export const MainMenu: React.FC = ({children}) => {

  
   
    return (
        <Flex marginLeft="auto" marginRight="auto" maxW="1200px" w="100%" pt="1.5rem" justifyContent="space-between" >
            <Flex d={["none", "flex", "flex", "flex"]} position="sticky" w="280px" flexDirection="column" pl={1}  top="6.5rem" height="calc(((85% - 1.5rem) - 64px) - 42px)">
                <Flex>
                  <MainMenuList /> 
                </Flex>
            </Flex>
            <Flex display="flex" w="100%" maxW="48rem" flexDir="column" ml="auto" mr="auto" pl="2rem" >
                {children}
            </Flex>
        </Flex>
    )
}