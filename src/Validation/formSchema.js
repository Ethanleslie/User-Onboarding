import * as yup from 'yup'


const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('username is required')
        .min(3, 'username must be 3 characters long'),
    email: yup
        .string()
        .email('must be a valid email address')
        .required('email is required'),
    password: yup
        .string()
        .required('password is required')
        .min(6, 'password must be 6 characters long'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accedpt the terms and conditions')
})

export default formSchema