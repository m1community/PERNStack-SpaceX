import * as Yup from "yup"

export const UserValidatorSchema = Yup.object().shape({
    username: Yup
        .string()
        .nullable()
        .min(3, "The username must be atleast 3 characters.")
        .max(16, "Please choose an username that have less than 16 characters.")
        .required(),

    email: Yup
        .string()
        .email("Please enter a valid email.") 
        .required(),

    password: Yup
        .string()
        .min(8, "Please enter a password that have atleast 8 characters.")
        .max(16, "The password must not be greater than 16 characters.")
        .required()
})