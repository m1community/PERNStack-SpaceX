import { Text, TextProps } from "@chakra-ui/react"
import React from "react"

interface DropCapData {
    desc?: string | null
}


export const DropCap: React.FC<TextProps & DropCapData> = ({desc}: DropCapData) => { 

    const firstLetter = desc?.charAt(0)
    const rest = desc?.substring(1, desc.length)

    return (
        <Text textAlign="justify" py={4} >
            <Text float="left" fontSize="6xl" lineHeight="1" fontWeight="bold" mr="9px" fontFamily='"Times New Roman", Times, serif' >{firstLetter}</Text>
            {rest}
        </Text>
    )
}