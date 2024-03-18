import * as yup from "yup";

export const SignInFormValidationSchemas = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
      "Enter a valid email address"
    ),
  code: yup.number().required("Code is required"),
});
