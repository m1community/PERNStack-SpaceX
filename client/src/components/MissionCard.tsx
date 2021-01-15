import { Box, BoxProps, Button, List, ListItem, Text, useColorMode, Link } from "@chakra-ui/react"
import React from "react"
import { DropCap } from "./DropCap"

interface MissionData {
    name?: string | null
    manufacturers?: (string | null)[]
    desc?: string | null
    website?: string | null
}

export const MissionCard: React.FC<BoxProps & MissionData> = ({name, manufacturers, desc, website}) => {

    const {colorMode} = useColorMode()

    return (
        <Box shadow="md" p={4} bgColor={colorMode === "light" ? "gray.200" : "gray.800"} >
            <Text 
                fontWeight="bold"
                
                pt={4}
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="blue.500"
                >
                    {name}
            </Text>
                <DropCap desc={desc} py={4} />
            <Box>
            <Text textTransform="uppercase" color='blue.500' fontWeight="bold" fontSize="sm" mt={4} >Manufacturers: </Text>
                <List ml={4} mb={4} >
                    {manufacturers?.map((v, i) => (
                        <ListItem>
                            <Text key={i} >{v}</Text>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Link href={website || ""} _hover={{textDecoration: "none"}}>
                <Button colorScheme="blue" variant="outline">
                    Read more
                </Button>
            </Link>
        </Box>
    )
}