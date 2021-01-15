import { Flex, Box } from "@chakra-ui/react"
import React from "react"

export const CredWrapper: React.FC = ({children}) => {
  return (
    <Flex minHeight='85vh' width='100%' align='center' justifyContent='center' >
      <Box 
        borderWidth={1}
        px={4}
        width='100%'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
        boxShadow='lg'
      >
        <Box p={4}>
          {children}
        </Box>
      </Box>
    </Flex>
    
  )
}