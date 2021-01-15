import { Box, useColorMode, Text, Link, Button, Flex } from "@chakra-ui/react"
import React from "react"

interface EventProps {
    title?: string | null
    article_name?: string | null
}

export const EventCard: React.FC<EventProps> = ({title, article_name}) => {
    
    const {colorMode} = useColorMode()

    return  (
        <Box
            shadow="md"
            p={4} 
            display="flex" 
            bgColor={colorMode === "light" ? "gray.200" : "gray.800"} 
            flexDirection="column"
        >
            <Flex align="center" justifyContent="space-between" >
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="blue.500"
                >
                    {title}
                </Text>
                <Link href={article_name || ""} _hover={{textDecor: "none"}}>
                    <Button colorScheme="blue" >
                        Read More &#8594;
                    </Button>
                </Link>
           </Flex>
        </Box>
    )
}