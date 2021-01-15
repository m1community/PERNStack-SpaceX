import React, { InputHTMLAttributes, useState } from "react"
import { Box, FormControl, FormControlProps, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { useField } from "formik"

type InputField = InputHTMLAttributes<HTMLInputElement> & FormControlProps & {
    name: string
    label: string
    inputsize: string
    mt?:number
    
}

export const CustomInput: React.FC<InputField> = ({label, mt = 0, isRequired, ...props}) => {

    const [field, meta] = useField(props)
    const [didFocus, setDidFocus] = useState(false)
    const handleFocus = () => setDidFocus(true)
    const showFeedback = (!!didFocus && field.value?.trim()?.length > 2) || meta.touched
    
    return (
        <Box>
            <FormControl isInvalid={!!meta.error && didFocus} mt={mt} onFocus={handleFocus} isRequired={isRequired}>
                <FormLabel htmlFor={field.name} > {label} </FormLabel>
                <Input  {...props} {...field} id={field.name} size={props.inputsize} />
                { showFeedback ? <FormErrorMessage> {meta.error ? meta.error : null} </FormErrorMessage> : null} 
            </FormControl>
        </Box>
    )
}