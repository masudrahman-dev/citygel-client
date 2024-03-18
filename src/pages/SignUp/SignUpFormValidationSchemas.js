import * as yup from "yup";

export const SignUpFormValidationSchemas = yup.object().shape({
  fullName: yup.string().required("First Name is required"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(
      /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/,
      "Enter a valid phone number"
    ),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
      "Enter a valid email address"
    ),
  code: yup.number().required("Code is required"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
  marketing: yup
    .boolean()
    .oneOf([true], "You must agree to receive marketing communications"),

  // Custom validation for email/phone
  // emailOrPhone: yup
  //   .string()
  //   .required("Email/Phone Number is required")
  //   .test("test-email-or-phone", "Enter Valid Phone/Email", function (value) {
  //     const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  //     const phoneRegex =
  //       /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
  //     let isValidEmail = emailRegex.test(value);
  //     let isValidPhone = phoneRegex.test(value);
  //     if (!isValidEmail && !isValidPhone) {
  //       return false;
  //     }
  //     return true;
  //   }),
});
