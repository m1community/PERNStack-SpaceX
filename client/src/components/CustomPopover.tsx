import { Box, Text, Button, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverProps, PopoverTrigger, Portal, Input } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import { User } from "../generated/graphql"
import dayjs from "dayjs"
import { Form, Formik } from "formik"
import { CustomInput } from "./CustomInput"

interface DataProps {
    user: User
}

export const CustomPopover: React.FC<PopoverProps & DataProps> = ({children, user }) => {

    const createdAt = dayjs(parseInt(user.created_at))


    return (
        <Popover isLazy closeOnBlur={false} placement="bottom" >
            {({onClose}) => {
                const closing = () => {
                    console.log('closing')
                    onClose()
                }
                return (
                    <>
                        <PopoverTrigger>
                            {children}
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent>
                                <PopoverHeader><Text textTransform="capitalize" >Welcome, {user.username}</Text></PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody>
                                <Box>
                                    <Formik
                                        initialValues={{first_name: user.first_name, last_name: user.last_name}}
                                        onSubmit={(values) => {
                                            console.log(values)
                                        }}
                                    >
                                        {({values, handleChange, handleBlur}) => (
                                            <Form>
                                                <CustomInput
                                                    name="first_name"
                                                    label="First Name"
                                                    placeholder="Enter your first name"
                                                    inputsize="md"
                                                    type="text"
                                                    value={!!values.first_name ? values.first_name : ""}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isRequired={false}
                                                />
                                                <CustomInput
                                                    name="last_name"
                                                    label="Last Name"
                                                    placeholder="Enter your last name"
                                                    inputsize="md"
                                                    type="text"
                                                    value={!!values.last_name ? values.last_name : ""}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isRequired={false}
                                                />
                                                <Button
                                                    type="submit"
                                                    width='full'
                                                    mt={4}
                                                    colorScheme="blue"
                                                    onClick={() => closing()}
                                                >
                                                    Save Changes
                                                </Button>
                                            </Form>
                                        )}
                                    </Formik>
                                </Box>
                                </PopoverBody>
                                <PopoverFooter>Member since: {createdAt.format("dddd, MMMM D, YYYY h:mm A")} </PopoverFooter>
                            </PopoverContent>
                        </Portal>
                    </>
                )
            }}
        </Popover>
    )
}