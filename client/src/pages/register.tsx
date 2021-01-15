import { Box, Heading, Text, Link, Button, useToast } from "@chakra-ui/react"
import React from "react"
import { Container } from "../components/Container"
import { CredWrapper } from "../components/CredWrapper"
import { Wrapper } from "../components/Wrapper"
import { useRouter } from "next/router"
import { Formik, Form} from "formik"
import { CustomInput } from "../components/CustomInput"
import { MeDocument, MeQuery, useRegisterUserMutation } from "../generated/graphql"
import { UserValidatorSchema } from "../utils/UserValidatorSchema"

import { toErrorMap } from "../utils/toErrorMap"


const RegisterHeader = () => {

    const router = useRouter()

    return (
        <Box textAlign='center'>
            <Heading>Register an Account</Heading>
            <Text mt={4} >
                Have an account ? <Link color="blue.500" onClick={() => router.replace("/login")} >Login now</Link>
            </Text>
        </Box>
    )
}

const Register = () => {

    const [registerUser] = useRegisterUserMutation({context: {clientName: ""}})
    const toast = useToast()
    const router = useRouter()
    return (
        <Wrapper title="Register">
            <Container>
                <CredWrapper>
                    <RegisterHeader />
                    <Box my={8} textAlign='left'>
                        <Formik 
                            initialValues={{email: "", username: "", password: ""}} 
                            validationSchema={UserValidatorSchema}
                            onSubmit={async (values, {setErrors}) => {
                                const response = await registerUser({
                                    variables: {
                                        input: values
                                    },
                                    update: (cache, {data}) => {
                                        cache.writeQuery<MeQuery>({
                                            query: MeDocument,
                                            data: {
                                                __typename: "Query", 
                                                me: data?.registerUser.callback
                                            }
                                        })
                                    }
                                })

                                if(response.data?.registerUser.errors) {
                                    setErrors(toErrorMap(response.data.registerUser.errors))
                                }else if (response.data?.registerUser.callback) {
                                    router.push('/')
                                    toast({
                                        title: "Account created",
                                        description: "Your account have been succesfully created, you are now logged in.",
                                        status: "success",
                                        duration: 2000,
                                        isClosable: true
                                    })
                                }
                            }}
                        >
                            {({isSubmitting, handleChange, handleBlur, isValid, dirty, values}) => (
                                <Form>
                                    <CustomInput
                                        name="email"
                                        label="Email Address"
                                        placeholder="Enter your email address"
                                        inputsize="md"
                                        type="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        isRequired={true}
                                    />
                                    <CustomInput
                                        name="username"
                                        label="Username"
                                        placeholder="Enter your username"
                                        inputsize="md"
                                        type="text"
                                        mt={4}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                        isRequired={true}
                                    />
                                    <CustomInput
                                        name="password"
                                        label="Password"
                                        placeholder="Enter your password"
                                        inputsize="md"
                                        type="password"
                                        mt={4}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        isRequired={true}
                                    />
                                    <Button type="submit" colorScheme="blue" disabled={!dirty || !isValid} isLoading={isSubmitting} width='full' mt={4}>Sign In</Button>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </CredWrapper>
            </Container>
        </Wrapper>
    )
}

export default Register