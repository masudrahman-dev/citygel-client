import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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
import PinInputfunc from "components/PinInput";
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
import { ConfirmValidation } from "./ConfirmValidation";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AuthContext from "context/AuthContext";
import { jwtDecode } from "jwt-decode";
export default function Confirm() {
  const {
    handleSubmit,
    register,
    getFieldState,
    getValues,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(ConfirmValidation),
    mode: "onChange",
  });
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  let { setAuthToken, setTUser, tuser } = useContext(AuthContext);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/users/${user?.email}`
      );
      if (response.data) {
        navigate(from);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchUser();
  }, [user]);

  console.log(errors);
  const onSubmit = async (e) => {
    console.log(e);

    const email = e.email;
    try {
      if (e) {
        const response = await axios.post(
          "http://localhost:5000/api/v1/users/create-user-confirm",
          {
            email,
            phoneNumber: e.phoneNumber,
            marketing: e.marketing,
            fullName: e.fullName,
            terms: true,
          }
        );
        console.log(response.data);
        if (response.data) {
          setAuthToken(response.data.data.accessToken);
          setTUser(jwtDecode(response.data.data.accessToken));
          console.log(response.data.data.accessToken);
          localStorage.setItem("authToken", response.data.data.accessToken);
          toast.success("You Account Created Successfully!", {
            position: "top-right",
          });
          navigate(from);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
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
              <div className="h-[257px] w-full relative">
                <Img
                  src="images/img_background_complete.svg"
                  alt="background_one"
                  className="justify-center h-[257px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <Img
                  src="images/img_group.svg"
                  alt="image_one"
                  className="h-[37px] right-[28%] top-[26%] m-auto absolute"
                />
              </div>
              <Img
                src="images/img_plant.svg"
                alt="plant_one"
                className="h-[104px] mt-[-93px] ml-[58px] z-[1]"
              />
            </div>
            <div className="flex flex-col items-end justify-start w-[78%] bottom-[15%] right-0 left-0 m-auto absolute">
              <div className="flex flex-row justify-end items-center w-[67%] mr-1.5">
                <Img
                  src="images/img_character.svg"
                  alt="character_one"
                  className="h-[158px] z-[1]"
                />
                <Img
                  src="images/img_lamp.svg"
                  alt="lamp_one"
                  className="h-[203px] ml-[-6px]"
                />
              </div>
              <Img
                src="images/img_x3c_path_x3e_359.svg"
                alt="x3cpathx3e_one"
                className="h-[16px] mt-[-8px]"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[30%] left-[20%] top-[24%] m-auto absolute">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full p-[18px] bg-white-A700 rounded-md">
                  <div className="flex flex-col items-center justify-start w-[99%] mt-1.5 gap-[13px]">
                    <Img
                      src="images/img_group_white_a700.svg"
                      alt="image_two"
                      className="h-[29px] w-[29px]"
                    />
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="h-[12px] w-full relative">
                            <Img
                              src="images/img_vector_white_a700.svg"
                              alt="vector_one"
                              className="justify-center h-[12px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                            <Img
                              src="images/img_vector_black_900_03.svg"
                              alt="vector_three"
                              className="h-[5px] right-[6%] bottom-0 top-0 m-auto opacity-0.2 absolute"
                            />
                          </div>
                          <div className="flex flex-row justify-start mt-[-8px] ml-[7px] z-[1]">
                            <Text
                              size="s"
                              as="p"
                              className="!text-black-900_03 !font-inter"
                            >
                              Name@mail.com
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        size="xs"
                        as="p"
                        className="w-[24%] mt-[11px] !text-black-900_03 !font-inter"
                      >
                        Sign up now
                      </Text>
                      <div className="h-[12px] w-full mt-[-2px] relative">
                        <Img
                          src="images/img_vector_cyan_700_01.svg"
                          alt="vector_five"
                          className="justify-center h-[12px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <a
                          href="#"
                          className="w-max top-[17%] right-0 left-0 m-auto absolute"
                        >
                          <Text size="md" as="p" className="!font-inter">
                            Login
                          </Text>
                        </a>
                      </div>
                      <a href="#" className="w-[36%] mt-[5px]">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-black-900_03 !font-inter"
                        >
                          Forgot Password?
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[9px] z-[1]">
            <Text size="8xl" as="p" className="!text-black-900_03 text-center">
              Confirm Details
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[-3px]">
            <Text
              size="3xl"
              as="p"
              className="!text-black-900_7e text-center opacity-0.4"
            >
              Please enter your credential Details.
            </Text>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-start justify-start w-full mt-2">
                <Text
                  as="p"
                  className="mt-7 ml-1.5 !text-black-900_99 opacity-0.7"
                >
                  Enter Your Full Name
                </Text>
                <div className="h-[80px] w-full mt-[15px] relative rounded-[15px]">
                  <Input
                    register={register}
                    size="lg"
                    name="fullName"
                    placeholder="Please Type Full Name"
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
                <Text
                  as="p"
                  className="mt-8 ml-1.5 !text-black-900_99 opacity-0.7"
                >
                  Enter Your Phone number
                </Text>
                <div className="relative mt-[5px] block md:flex gap-[25px] w-full ">
                  <Controller
                    control={control}
                    name="phoneNumber"
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { error },
                    }) => (
                      <PhoneInput
                        country={"us"}
                        value={value}
                        className={
                          value && error === undefined
                            ? "is-valid w-full "
                            : error
                              ? "has-error w-full "
                              : value && "is-valid w-full "
                        }
                        placeholder="Phone Number"
                        onChange={onChange}
                      />
                    )}
                  />

                  {errors.phoneNumber?.message && (
                    <Text
                      className="xs absolute bottom-[-20px] text-[#ef4c4c] "
                      fontSize="xs"
                      bottom="-19px"
                      position="absolute"
                      color="#E85A2D"
                    >
                      <>Please enter valid phone number</>
                    </Text>
                  )}
                </div>
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
                    value={user?.email}
                    placeholder="mail@email.com"
                    className="w-full left-0 bottom-0 right-0 top-0 m-auto !text-black-900_6f absolute"
                  />

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
                      {errors.terms?.message && (
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
