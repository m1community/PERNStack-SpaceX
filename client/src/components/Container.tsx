import { Box, Text, Flex, FlexProps, useColorMode, VStack, HStack, IconButton, Link } from '@chakra-ui/react'
import React from "react"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { bgColor, color } from '../utils/colors'

export const Container: React.FC<FlexProps> = ({children, ...props}) => {

  const {colorMode} = useColorMode()  
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        {...props}
      >
        {children}
      </Flex>
      <Flex
        h="15vh"
        borderTopWidth="1px"
        //@ts-ignore
        borderTopColor={color[!colorMode]}
        borderTopStyle="solid"
        alignItems="center"
        justifyContent="center"
      > 
        <Box >     
          <VStack>
            <Text fontSize="xs" color="gray.500" > Copyright &copy; Benjamin Spoiden &minus; 2021 </Text>
            <Text fontSize="xs" color="gray.500" > You can access the code of this project on GitHub </Text>
            <HStack>
              <Link href="https://github.com/BenjaminSpoiden" >
                <IconButton variant="none" aria-label="github" size="sm" icon={<FaGithub/>} color="gray.500" />
              </Link>
              <Text color="gray.500" >&bull;</Text>
              <Link href="https://www.linkedin.com/in/benjamin-spoiden-372528195/" >
                <IconButton variant="none" aria-label="linkedIn" size="sm" icon={<FaLinkedin />} color="gray.500"  />
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </>
  )
}
