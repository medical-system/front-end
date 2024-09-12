import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required").email("Email must be a valid email address"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters long"),
})