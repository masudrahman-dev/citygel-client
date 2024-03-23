import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Img,
  CheckBox,
  Input,
  Button,
  SelectBox,
} from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { SignUpFormValidationSchemas } from "./SignUpFormValidationSchemas";
import PinInput from "react-pin-input";
import SocialLogin from "components/SocialLogin/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth/dist/index.cjs";
import auth from "config/firebase.init";
import { password } from "config/password";
import axios from "axios";
import Loading from "components/Loading/Loading";
import { toast } from "react-toastify";
import AuthContext from "context/AuthContext";
import { jwtDecode } from "jwt-decode";
import NextNumberInput from "components/next-number-input/NextNumberInput";

export default function SignUpPage() {
  const {
    handleSubmit,
    register,
    getFieldState,
    getValues,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(SignUpFormValidationSchemas),
    mode: "onChange",
  });
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  let { setAuthToken, setTUser, tuser } = useContext(AuthContext);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  let from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, cuser, gloading, hookerror] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: false });
  console.log(errors);
  if (tuser && user) {
    navigate(from, { replace: true });
  }
  const onSubmit = async (e) => {
    console.log(e);
    const email = e.email;

    try {
      setLoading(true);
      const Verifyresponse = await axios.post(
        "http://localhost:5000/api/v1/auth/verify-code",
        {
          email: e.email,
          code: e.code,
        }
      );
      if (Verifyresponse.data) {
        const response = await axios.post(
          "http://localhost:5000/api/v1/users/create-user",
          {
            fullName: e.fullName,
            email: e.email,
            phoneNumber: e.phoneNumber,
          }
        );
        const createUser = await createUserWithEmailAndPassword(
          e.email,
          password
        );
        setLoading(false);
        if (response.data && createUser) {
          setAuthToken(response.data.data.accessToken);
          setTUser(jwtDecode(response.data.data.accessToken));
          console.log(response.data.data.accessToken);
          localStorage.setItem("authToken", response.data.data.accessToken);
          toast.success("Login Successfully");

          navigate(from);
        }
        console.log(response.data);
      } else {
        toast.error("Wrong Code Entered");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.errorMessages.message);
    }
  };
  if (gloading || loading) {
    return <Loading />;
  }
  const { email } = getValues();
  const handleSendCode = async () => {
    console.log(email);
    try {
      if (email) {
        const response = await axios.post(
          `http://localhost:5000/api/v1/auth/send-code`,
          {
            email: email,
          }
        );
        if (response.data) {
          toast.success("Otp code sent into your email");
        }
      } else {
        toast.error("please enter your email");
      }
    } catch (error) {}
  };

  return (
    <>
      <Helmet>
        <title>Citygel</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-gray-50">
        <Header1 />
        <div className="flex flex-col items-center justify-start w-[32%] ">
          <div className="h-[372px] w-full  relative max-w-[372px]">
            <div className="flex flex-col items-start justify-start w-full top-[11%] right-0 left-0 m-auto absolute">
              <div className="h-[372px] w-full relative">
                <Img
                  src="authheader.png"
                  alt="background_one"
                  className="justify-center h-[372px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-[9px] z-[1] w-[1800px]">
            <Text
              size="8xl"
              as="p"
              className="!text-black-900_03  mq450:text-[24px] mq750::text-[28px] sm:text-[36px] text-center"
            >
              Create an Account
            </Text>
            <Text
              size="3xl"
              as="p"
              className="!text-black-900_7e text-center mq450:text-[16px] mq750::text-[18x] sm:text-[16px]  opacity-0.4"
            >
              Please enter your credential Details.
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[-3px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-start justify-start w-full mt-2">
                <Text
                  as="p"
                  className="mt-7 ml-1.5 !text-black-900_99 opacity-0.7"
                >
                  Enter Your Full Name
                </Text>
                <div className="h-[80px] w-full mt-[15px] relative  rounded-[15px]">
                  <Input
                    register={register}
                    size="lg"
                    name="fullName"
                    placeholder="your name"
                    className={`w-full border-cyan-700_01 border border-solid ${
                      errors.fullName?.message
                        ? "border-red-600"
                        : "border-cyan-700_01"
                    }`}
                  />
                  {errors.fullName?.message && (
                    <Text
                      className="xs absolute bottom-[-20px] text-[#ef4c4c] "
                      fontSize="xs"
                      bottom="-19px"
                      position="absolute"
                      color="#E85A2D"
                    >
                      <>{errors.fullName?.message}</>
                    </Text>
                  )}
                </div>

                <NextNumberInput />
                <Text
                  as="p"
                  className="mt-[40px] ml-1.5 !text-black-900_99 opacity-0.7"
                >
                  Enter Your Email
                </Text>
                <div
                  className={`h-[80px] w-full mt-[15px] relative border border-solid rounded-[15px] ${
                    errors.email?.message
                      ? "border-red-600"
                      : "border-cyan-700_01"
                  } `}
                >
                  <Input
                    register={register}
                    size="2xl"
                    type="email"
                    name="email"
                    placeholder="mail@email.com"
                    className="w-full left-0 bottom-0 right-0 top-0 m-auto !text-black-900_6f absolute"
                  />
                  <Button
                    type={"button"}
                    onClick={handleSendCode}
                    color="cyan_700_01"
                    size="5xl"
                    variant="fill"
                    className="right-[1%] bottom-0 top-0 m-auto min-w-[170px] absolute rounded-[15px]"
                  >
                    Send OTP
                  </Button>
                  {errors.email?.message && (
                    <Text
                      className="xs absolute bottom-[-20px] text-[#ef4c4c] "
                      fontSize="xs"
                      bottom="-19px"
                      position="absolute"
                      color="#E85A2D"
                    >
                      <>Please enter valid Email</>
                    </Text>
                  )}
                </div>

                <div className="relative mt-9">
                  <Controller
                    name="code"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { error },
                    }) => (
                      <div>
                        <PinInput
                          length={6}
                          initialValue=""
                          value={value}
                          onChange={onChange}
                          type="numeric"
                          inputMode="number"
                          style={{ padding: "15px", paddingLeft: "40px" }}
                          inputStyle={{
                            borderColor: "transparent",
                            backgroundColor: "rgba(217, 217, 217, 0.21)",

                            borderRadius: "10px",
                          }}
                          inputFocusStyle={{ borderColor: "#0B90AF" }}
                          onComplete={(value, index) => {}}
                          autoSelect={true}
                          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                        />
                      </div>
                    )}
                  />
                  {errors.code?.message && (
                    <Text
                      className="xs absolute bottom-[-20px] text-[#ef4c4c] "
                      fontSize="xs"
                      bottom="-19px"
                      position="absolute"
                      color="#E85A2D"
                    >
                      <>Please enter valid Code</>
                    </Text>
                  )}
                </div>

                <div className="flex flex-row justify-start w-full mt-[20px] mx-auto max-w-[490px]">
                  <div className="flex flex-col items-start justify-start w-full gap-3">
                    <div className="relative mb-3">
                      <CheckBox
                        color="blue_gray_100_03"
                        name="terms"
                        register={register}
                        label={
                          <span>
                            I am accepting all
                            <span style={{ color: "#00e4e4" }}> Terms</span>
                            <span> &amp; </span>
                            <span style={{ color: "#00e4e4" }}>Conditions</span>
                          </span>
                        }
                        className="gap-2.5 text-left rounded-md text-[13px]"
                      />
                      {errors.code?.message && (
                        <Text
                          className="xs absolute bottom-[-20px] text-[#ef4c4c] "
                          fontSize="xs"
                          bottom="-19px"
                          position="absolute"
                          color="#E85A2D"
                        >
                          <>You need to agree with terms</>
                        </Text>
                      )}
                    </div>
                    <CheckBox
                      register={register}
                      color="blue_gray_100_03"
                      name="marketing"
                      label="Are you interested to receive marketing communications"
                      className="gap-2.5 text-left rounded-md text-[13px]"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    style={{ backgroundColor: "#0B90AF" }}
                    className="w-[430px] h-[80px] rounded-[15px] mt-7 text-white-A700 font-poppins font-normal text-[24px]"
                  >
                    Create Account
                  </button>
                </div>
                <a href="#" className="mt-8">
                  <Text />
                </a>
                <div className="flex flex-row justify-start w-full mt-[31px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row justify-start items-start w-full gap-[19px]">
                      <div className="h-[2px] w-[46%] mt-[13px] opacity-0.3 bg-black-900_75" />
                      <Text
                        size="2xl"
                        as="p"
                        className="!text-black-900_75 text-center opacity-0.3"
                      >
                        or
                      </Text>
                      <div className="h-[2px] w-[46%] mt-[13px] opacity-0.3 bg-black-900_75" />
                    </div>
                    <SocialLogin />
                    <Text
                      size="2xl"
                      as="p"
                      className="mt-[35px] !text-red-500 text-center"
                    >
                      <span className="text-gray_500">
                        Already have an account?
                      </span>
                      <span className="text-red-500"></span>
                      <span
                        className="text-cyan-700_01 ml-2 cursor-pointer"
                        onClick={() => navigate("/login")}
                      >
                        Sign in
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[120px] p-[34px] bg-gray-100_01" />
      </div>
    </>
  );
}
