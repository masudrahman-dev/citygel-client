import { Helmet } from "react-helmet";
import { Text, Img, Input, Button } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";
import PinInputfunc from "components/PinInput";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PinInput from "react-pin-input";
import { SignInFormValidationSchemas } from "./SignInFormValidationSchemas";
import SocialLogin from "components/Button/SocialLogin";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    getFieldState,
    getValues,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(SignInFormValidationSchemas),
    mode: "onChange",
  });
  console.log(errors);
  const onSubmit = (e) => {
    console.log(e);
  };
  const navigate = useNavigate();

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
        <Header1 className="flex flex-col justify-center items-center w-full" />
        <div className="flex flex-col items-center justify-start w-[32%] mt-[50px] gap-3.5">
          <div className="h-[372px] w-full py-10 relative max-w-[372px]">
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
          <div className="flex flex-col items-center justify-start w-full gap-[31px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full gap-px max-w-[438px]">
                <div className="">
                  <h3 className="w-[438px] h-[66px] font-poppins font-medium text-[44px]">
                    Login to post an ad!
                  </h3>
                  <p className="w-[428px] h-[36px] opacity-[40%] font-poppins font-normal text-[23px] align-middle pl-[8px]">
                    Please enter your credential Details.
                  </p>
                </div>
              </div>
              <Text as="p" className="mt-7 !text-black-900_99 opacity-0.7">
                Enter Your Email
              </Text>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-start justify-start w-full mt-[9px]">
                  <div className="h-[80px] w-full relative">
                    <Input
                      register={register}
                      size="lg"
                      name="email"
                      placeholder="name@mail.com"
                      className={`w-full left-0 bottom-0 right-0 top-0 m-auto ${
                        errors.email?.message
                          ? "border-red-800 "
                          : "border-cyan-700_01"
                      }  border border-solid absolute`}
                    />
                    <Button
                      type="btn"
                      color="cyan_700_01"
                      size="5xl"
                      variant="fill"
                      className="right-[1%] bottom-0 top-0 m-auto min-w-[170px] absolute rounded-[15px]"
                    >
                      Send OTP
                    </Button>
                  </div>
                  <div className="relative">
                    {errors.email?.message ? (
                      <p className="w-[428px] h-[36px] opacity-[40%] font-poppins font-normal text-[18px] text-red-A700 ">
                        {errors.email?.message}
                      </p>
                    ) : (
                      <p className="w-[428px] h-[36px] opacity-[40%] font-poppins font-normal text-[18px] text-red-500">
                        Please enter your credential Details.
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <Controller
                      name="code"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div>
                          <PinInput
                            length={6}
                            initialValue=""
                            secret
                            secretDelay={100}
                            onChange={(value, index) => {}}
                            type="numeric"
                            inputMode="number"
                            style={{ padding: "15px", paddingLeft: "40px" }}
                            inputStyle={{
                              borderColor: "#0B90AF",
                              borderRadius: "10px",
                            }}
                            inputFocusStyle={{ borderColor: "blue" }}
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
                  <a href="#" className="mt-[25px]">
                    <Text />
                  </a>
                </div>
                <div>
                  <button
                    type="submit"
                    style={{ backgroundColor: "#0B90AF" }}
                    className="w-[430px] h-[80px] rounded-[15px] text-white-A700 font-poppins font-normal text-[24px]"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-row justify-center w-full">
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
                  className="mt-[33px] !text-red-500 text-center"
                >
                  <span className="text-gray_500">Don’t have an account?</span>
                  <span className="text-red-500"></span>
                  <span
                    className="text-cyan-700_01 ml-2 cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Create Account
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[118px] p-[34px] bg-gray-100_01" />
      </div>
    </>
  );
}
