import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Input, TextArea, Img } from "../../components";
import Footer1 from "../../components/Footer1";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpFormValidationSchemas } from "pages/SignUp/SignUpFormValidationSchemas";

export default function PostAdTwoPage() {
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
  return (
    <>
      <Helmet>
        <title>Citygel</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="h-[3679px] w-full bg-gray-50 relative">
        <div className="flex flex-col items-start justify-start w-full top-0 right-0 left-0 m-auto absolute">
          <div className="flex flex-row justify-start w-full z-[1]">
            <div className="h-[140px] w-full relative">
              <Img
                src="images/img_frame_3923_teal_900.svg"
                alt="image"
                className="justify-center h-[140px] left-0 bottom-0 right-0 top-0 m-auto absolute"
              />
              <div className="flex flex-row justify-between items-center w-[50%] h-max right-[6%] bottom-0 top-0 m-auto absolute">
                <Img
                  src="images/img_citygel_2_white.png"
                  alt="citygel2white"
                  className="w-[22%] object-cover"
                />
                <div className="flex flex-row justify-start items-center w-[25%] gap-[30px]">
                  <div className="flex flex-row justify-start w-[54%]">
                    <div className="flex flex-col items-start justify-start w-full gap-0.5">
                      <Text size="3xl" as="p">
                        John Smith
                      </Text>
                      <div className="flex flex-row justify-start items-start gap-[3px]">
                        <Text
                          size="lg"
                          as="p"
                          className="!text-light_blue-400 text-center"
                        >
                          My Account
                        </Text>
                        <Img
                          src="images/img_polygon_1.svg"
                          alt="polygonone_one"
                          className="h-[5px] mt-1.5 rounded-[1px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start h-[76px] w-[76px] p-[5px] bg-light_blue-400 rounded-[50%]">
                    <Img
                      src="images/img_ellipse_5.png"
                      alt="circleimage"
                      className="h-[66px] w-[66px] rounded-[50%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_vector_19.png"
            alt="vectornineteen"
            className="w-[57%] mt-[-140px] object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
          <div className="h-[1485px] w-[56%] z-[1] relative">
            <Img
              src="images/img_vector_21.png"
              alt="vectortwentyone"
              className="justify-center h-[1485px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="flex flex-col items-start justify-start w-[84%] gap-1.5 bottom-0 right-0 left-0 m-auto absolute">
              <div className="flex flex-col items-start justify-start ml-1.5">
                <Text as="p" className="!text-black-900_99 opacity-0.7">
                  Type
                </Text>
                <Text
                  as="p"
                  className="mt-[106px] !text-black-900_99 opacity-0.7"
                >
                  Brand
                </Text>
                <Text
                  as="p"
                  className="mt-[109px] !text-black-900_99 opacity-0.7"
                >
                  Model
                </Text>
                <Text
                  as="p"
                  className="mt-[244px] !text-black-900_99 opacity-0.7"
                >
                  Fuel Type
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Input
                  name="select"
                  placeholder="-Select-"
                  className="w-full"
                  register={register}
                />
                <Text
                  as="p"
                  className="mt-[21px] ml-1.5 !text-black-900_99 opacity-0.7"
                >
                  Listed By
                </Text>
                <Input
                  name="selectone"
                  placeholder="-Select-"
                  className="w-full mt-[7px]"
                  register={register}
                />
                <Text
                  as="p"
                  className="mt-[19px] ml-1.5 !text-black-900_99 opacity-0.7"
                >
                  Transmision
                </Text>
                <Input
                  name="selecttwo"
                  placeholder="-Select-"
                  className="w-full mt-[9px]"
                  register={register}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start w-full mt-[-441px]">
            <div className="flex flex-col items-center justify-center w-[21%] mr-[110px] px-14 py-[162px] z-[1] bg-gray-200_01">
              <Text
                size="10xl"
                as="p"
                className="mt-[923px] mb-[922px] !text-black-900_03"
              >
                AD
              </Text>
            </div>
            <Footer1 className="flex justify-center items-center w-full mt-[-90px]" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[95%] right-0 top-0 m-auto absolute">
          <div className="flex flex-row justify-start items-start">
            <Text
              size="8xl"
              as="p"
              className="mt-[364px] !text-black-900_03 z-[1]"
            >
              Enter Details
            </Text>
            <Img
              src="images/img_vector_18.png"
              alt="vectoreighteen"
              className="w-[97%] ml-[-219px] object-cover"
            />
          </div>
          <Input
            name="selectthree"
            placeholder="-Select-"
            className="w-[49%] mt-[-16px]"
            register={register}
          />
        </div>
        <div className="flex flex-row justify-end items-start w-[95%] right-0 top-0 m-auto absolute">
          <Text
            size="3xl"
            as="p"
            className="w-[49%] mt-[452px] !text-black-900_87 z-[1] opacity-0.5 leading-[35px]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem{" "}
          </Text>
          <div className="h-[1010px] w-[97%] ml-[-814px] relative">
            <Img
              src="images/img_vector_20.png"
              alt="vectortwenty"
              className="justify-center h-[1010px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="flex flex-col items-end justify-start w-[43%] bottom-[1%] right-[8%] m-auto absolute">
              <div className="h-[364px] w-[364px] mr-[158px] bg-light_blue-400 backdrop-opacity-[0.5] blur-[430.00px] rounded-[50%]" />
              <Img
                src="images/img_image_31.png"
                alt="imagethirtyone"
                className="w-full mt-[-215px] object-cover"
              />
            </div>
          </div>
        </div>
        <Input
          register={register}
          name="selectfour"
          placeholder="-Select-"
          className="w-[46%] left-[6%] top-[16%] m-auto absolute"
        />
        <Input
          register={register}
          name="selectfive"
          placeholder="-Select-"
          className="w-[46%] left-[6%] top-[20%] m-auto absolute"
        />
        <Input
          register={register}
          name="selectsix"
          placeholder="-Select-"
          className="w-[46%] left-[6%] top-[24%] m-auto absolute"
        />
        <div className="flex flex-col items-start justify-start w-[46%] gap-[9px] bottom-[34%] left-[6%] m-auto absolute">
          <Text as="p" className="ml-1.5 !text-black-900_99 opacity-0.7">
            KM Driven
          </Text>
          <div className="flex flex-col items-start justify-start w-full">
            <Input
              register={register}
              name="type_here"
              placeholder="Type here"
              className="w-full"
            />
            <Text
              as="p"
              className="mt-[19px] ml-1.5 !text-black-900_99 opacity-0.7"
            >
              No of owners
            </Text>
            <Input
              register={register}
              name="selectseven"
              placeholder="-Select-"
              className="w-full mt-[9px]"
            />
            <Text
              as="p"
              className="mt-[19px] ml-1.5 !text-black-900_99 opacity-0.7"
            >
              Ad Title
            </Text>
            <Input
              register={register}
              name="type_here_one"
              placeholder="Type here"
              className="w-full mt-[9px]"
            />
            <Text
              as="p"
              className="mt-[21px] ml-1.5 !text-black-900_99 opacity-0.7"
            >
              Ad Description
            </Text>
            <TextArea
              name="type_here_two"
              placeholder="Type here"
              className="w-full mt-[7px] text-black-900_03"
            />
            <Text
              as="p"
              className="mt-[19px] ml-1.5 !text-black-900_99 opacity-0.7"
            >
              Price
            </Text>
            <Input
              register={register}
              name="price"
              placeholder="Type here"
              className="w-full mt-[9px]"
            />
            <Text
              as="p"
              className="mt-[22px] ml-1.5 !text-black-900_99 opacity-0.7"
            >
              Country
            </Text>
            <Input
              register={register}
              name="country"
              placeholder="-Select-"
              className="w-full mt-1.5"
            />
            <Text
              as="p"
              className="mt-[19px] ml-1.5 !text-black-900_99 opacity-0.7"
            >
              State /Emirates
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[46%] bottom-[32%] left-[6%] m-auto absolute">
          <Text as="p" className="ml-1.5 !text-black-900_99 z-[1] opacity-0.7">
            City
          </Text>
          <Input
            register={register}
            name="selecteight"
            placeholder="-Select-"
            className="w-full mt-[-22px]"
          />
        </div>
        <div className="flex flex-col items-center justify-start w-[46%] gap-[22px] bottom-[15%] left-[6%] m-auto absolute">
          <div className="flex flex-col items-start justify-start w-full">
            <Input
              register={register}
              name="selectnine"
              placeholder="-Select-"
              className="w-full"
            />
            <Text
              as="p"
              className="mt-[21px] ml-1.5 !text-black-900_99 opacity-0.7"
            >
              Enquiry Type
            </Text>
            <div className="flex flex-col items-center justify-start mt-[7px] gap-2.5">
              <Input
                register={register}
                name="selectten"
                placeholder="-Select-"
                className="w-full"
              />
              <Input
                register={register}
                size="3xl"
                name="edittext"
                className="w-full"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full mt-[22px] gap-1.5">
              <Text as="p" className="ml-1.5 !text-black-900_99 opacity-0.7">
                Main Image
              </Text>
              <div className="h-[80px] w-full relative">
                <Input
                  register={register}
                  size="3xl"
                  name="edittext_one"
                  className="w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <Button
                  color="blue_gray_100_03"
                  size="3xl"
                  variant="fill"
                  className="left-[1%] bottom-0 top-0 m-auto min-w-[200px] absolute rounded-[15px]"
                >
                  Upload Image
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-1.5">
            <Text as="p" className="ml-1.5 !text-black-900_99 opacity-0.7">
              More Image
            </Text>
            <div className="h-[80px] w-full relative">
              <Input
                register={register}
                size="3xl"
                name="edittext_two"
                className="w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
              />
              <Button
                color="blue_gray_100_03"
                size="3xl"
                variant="fill"
                className="left-[1%] bottom-0 top-0 m-auto min-w-[200px] absolute rounded-[15px]"
              >
                Upload Images
              </Button>
            </div>
          </div>
        </div>
        <Text
          as="p"
          className="left-[6%] top-[26%] m-auto !text-black-900_99 opacity-0.7 absolute"
        >
          Manufacturing Year
        </Text>
      </div>
    </>
  );
}
