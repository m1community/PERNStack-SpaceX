import { Box, Stack, Link, Button, Checkbox } from "@chakra-ui/react"
import React from "react"
import { CustomInput } from "./CustomInput"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"


const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export const LoginForm = () => {
    
    return (
        <Box my={8} textAlign='left'>
            <Formik
                initialValues = {{
                    email: "",
                    password: "",
                    rememberMe: false
                }}
                validationSchema = { Yup.object({
                    email: Yup.string().email('Invalid email address').required('Required'),
                    password: Yup.string().min(8, 'Must be atleast 8 characters').required('Required'),
                    rememberMe: Yup.boolean()
                })}
                onSubmit = {async values => {
                    await sleep(2000)
                    console.log("values: ", values)
                }}
            >
                {({isSubmitting, handleChange, handleBlur, errors, values, touched}) => (
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
                            error={errors.email!}
                            touched={touched.email}
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
                            error={errors.password!}
                            touched={touched.password}
                            mt={4}
                        />
                        
                        <Stack isInline justifyContent='space-between' mt={4}>
                            <Box>
                                <Field 
                                    as={Checkbox}
                                    checked={values.rememberMe} 
                                    onChange={handleChange} 
                                    type="checkbox" 
                                    id="rememberMe" 
                                >Remember Me</Field>
                            </Box>
                            <Box >
                                <Link color="blue.500">Forgot your password?</Link>
                            </Box>
                        </Stack>

                        <Button type="submit" colorScheme="blue" isLoading={isSubmitting} width='full' mt={4}>Sign In</Button>
                    </Form>
                )}
            
            </Formik>
        </Box>
    )
}

