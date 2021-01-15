import { SearchIcon } from "@chakra-ui/icons"
import { Flex, Icon, Input, InputGroup, InputLeftElement, InputRightElement, useColorMode} from "@chakra-ui/react"
import React, { useState } from "react"
import { FaRocket } from "react-icons/fa"


export const SearchInput = () => {

    const [value, setValue] = useState("")
    const handleChange = (e: any) => setValue(e.target.value)

    const {colorMode} = useColorMode()
    
    

    return (
        <Flex 
            d="flex"
            shadow="md"
            w="100%"
            marginLeft={["0.5rem", "1.5rem", "1.5rem"]}
            marginRight={["0", "0", "1.5rem"]}
            whiteSpace="nowrap"
            alignItems="center"
            flexGrow={1}
            flexShrink={1}
            flexBasis="0%"
            >
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.300" />}
                    />
                    <Input
                        name="searchFlight"
                        label="Search a Flight"
                        placeholder="Search a flight"
                        inputsize="sm"
                        type="text"
                        bgColor={ colorMode === "light" ? "white" : "rgb(45, 55, 72)" }
                        color= "rgb(160, 174, 192)"
                        value={value}
                        focusBorderColor="blue.600"
                        onChange={handleChange}
                    />
                    <InputRightElement
                        pointerEvents="none">
                            <Icon as={FaRocket} color="gray.500" />
                        </InputRightElement>
                </InputGroup>
        </Flex>
    )
}