import { Box, Heading, Text, Link, Button, Stack, useToast } from "@chakra-ui/react"
import React from "react"
import { Container } from "../components/Container"
import { Wrapper } from "../components/Wrapper"
import { CredWrapper } from "../components/CredWrapper"
import { useRouter } from "next/router"
import { MeDocument, MeQuery, useLoginUserMutation } from "../generated/graphql"
import { Formik, Form } from "formik"
import { CustomInput } from "../components/CustomInput"
import { toErrorMap } from "../utils/toErrorMap"

const LoginHeader = () => {
  const router = useRouter()
  
  return (
    <Box textAlign='center'>
      <Heading>Sign In to Your Account</Heading>
      <Text mt={4} >
        Or <Link color="blue.500" onClick={() => router.replace('/register')} >create one now</Link>
      </Text>
    </Box>
  )
}

const Login = () => {
  
    const [loginUser] = useLoginUserMutation({
      context: {clientName: ""}
    })  
    const router = useRouter()
    const toast = useToast()

    return(
        <Wrapper title="Login">
            <Container>
                <CredWrapper>
                    <LoginHeader />
                    <Box my={8} textAlign='left'>
                      <Formik
                          initialValues = {{
                            usernameOrEmail: "",
                            password: "",
                           
                          }}
                          
                          onSubmit = {async (values, {setErrors}) => {
                           
                            const response = loginUser({
                              variables: values,
                              update: (cache, {data}) => {
                                cache.writeQuery<MeQuery>({
                                  query: MeDocument, 
                                  data: {
                                    __typename: "Query",
                                    me: data?.loginUser.callback
                                  }
                                })
                              }
                            })

                            return response
                            .then(result => {
                              if(result.data?.loginUser.errors) {
                                setErrors(toErrorMap(result.data.loginUser.errors))
                                
                              }else if(result.data?.loginUser.callback) {
                          
                                router.push('/')
                                toast({
                                  title:"Logged in",
                                  description: "You have been successfully logged in.",
                                  status: "success",
                                  duration: 2000,
                                  isClosable: true
                                })
                              }
                            })
                            .catch(e => console.log(e))
                          }}
                      >
                          {({isSubmitting, handleChange, handleBlur, values}) => (
                              <Form>
                                  <CustomInput
                                      name="usernameOrEmail"
                                      label="Username or Email"
                                      placeholder="Enter your username or email address"
                                      inputsize="md"
                                      type="text"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.usernameOrEmail}
                                      isRequired={true}
                                  />
                                  <CustomInput
                                      name="password"
                                      label="Password"
                                      placeholder="Enter your password"
                                      inputsize="md"
                                      type="password"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.password}
                                      isRequired={true}
                                      mt={4}
                                  />
                                  
                                  <Stack isInline justifyContent='space-between' mt={4}>
                                      {/* <Box>
                                          <Field 
                                              as={Checkbox}
                                              checked={values.rememberMe} 
                                              onChange={handleChange} 
                                              type="checkbox" 
                                              id="rememberMe" 
                                          >Remember Me</Field>
                                      </Box> */}
                                      <Box >
                                          <Link color="blue.500">Forgot your password?</Link>
                                      </Box>
                                  </Stack>

                                  <Button type="submit" colorScheme="blue" isLoading={isSubmitting} width='full' mt={4}>Sign In</Button>
                              </Form>
                          )}
                      
                      </Formik>
                  </Box>
                </CredWrapper>
            </Container>
        </Wrapper>
    )
}

export default Login