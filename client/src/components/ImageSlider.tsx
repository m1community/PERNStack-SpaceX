import { HStack, Image, Tooltip } from "@chakra-ui/react"
import React, { useState } from "react"

interface SliderData {
    images: (string | null)[]
}

export const ImageSlider = ({images}: SliderData) => {

    const [index, setIndex] = useState(0)

    // const slideRight = () => setIndex((index + 1) % images.length)

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(images.length - 1); // returns last index of images array if index is less than 0
        } else {
            setIndex(nextIndex);
        }
    }

    return (
        <>
            <Tooltip label="Click to slide" fontSize="md" >
                <HStack align="center">
                    <Image borderRadius="lg" onClick={slideLeft} src={images[index] || ""} alt="" boxSize="md" objectFit="cover" />
                </HStack>
            </Tooltip>
        </> 
    )
    
}