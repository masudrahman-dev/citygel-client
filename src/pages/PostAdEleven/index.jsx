import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "components/Header1";

export default function PostAdElevenPage() {
  return (
    <>
      <Helmet>
        <title>Citygel</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="h-[1677px] w-full bg-gray-50 relative">
        <div className="flex flex-col items-start justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
          <Img
            src="images/img_vector_19.png"
            alt="vectornineteen"
            className="w-[57%] object-cover"
          />
          <Footer className="flex justify-center items-center w-full mt-[-105px] p-[34px] bg-gray-100_01" />
        </div>
        <div className="flex flex-col items-start justify-start w-full top-0 right-0 left-0 m-auto absolute">
          <Header1 className="flex flex-col justify-center items-center w-full z-[1]" />
          <div className="h-[1485px] w-[56%] mt-[-140px] relative">
            <Img
              src="images/img_vector_21.png"
              alt="vectortwentyone"
              className="justify-center h-[1485px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="flex flex-row justify-start items-center w-[84%] gap-11 bottom-[13%] right-0 left-0 m-auto absolute">
              <Button
                color="blue_gray_100_01"
                size="6xl"
                variant="fill"
                className="min-w-[280px] rounded-[20px]"
              >
                Previous
              </Button>
              <div className="flex w-[232px] h-[5px]" />
              <Button
                size="6xl"
                color="cyan_700_01_light_blue_400"
                className="min-w-[280px] rounded-[20px]"
              >
                2/5 Next
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start pl-8 items-start w-[95%] right-0 top-0 m-auto absolute">
          <Text
            size="8xl"
            as="p"
            className="mt-[370px] !text-black-900_03 z-[1] text-left"
          >
            Select Category
          </Text>
          <Img
            src="images/img_vector_18.png"
            alt="vectoreighteen"
            className="w-[97%] ml-[-601px] object-cover"
          />
        </div>
        <div className="flex flex-row justify-start pl-8 items-center w-[95%] right-0 top-0 m-auto absolute">
          <Text
            size="3xl"
            as="p"
            className="w-[49%] !text-black-900_87 z-[1] opacity-0.5 leading-[35px]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum 
          </Text>
          <div className="h-[1010px] w-[97%] ml-[-485px] relative">
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
            <div className="flex flex-row items-start justify-start w-[50%] bottom-[16%] left-[-8%] m-auto absolute">
              <div className="flex flex-row w-full gap-5">
                <div className="flex flex-col items-center justify-end w-[20%] h-[230px] gap-[33px] border border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm rounded-[20px]">
                  <Img
                    src="images/img_frame_orange_400.svg"
                    alt="export_cars_one"
                    className="h-[74px] w-[74px] mt-7"
                  />
                  <Text
                    size="6xl"
                    as="p"
                    className="mb-[15px] !text-black-900_03"
                  >
                    Export Cars
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-end w-[20%] gap-[33px] p-[11px] border border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm rounded-[20px]">
                  <Img
                    src="images/img_frame_orange_400_74x74.svg"
                    alt="image"
                    className="h-[74px] w-[74px] mt-[34px]"
                  />
                  <Text
                    size="6xl"
                    as="p"
                    className="mb-[21px] !text-black-900_03"
                  >
                    Motorcycles
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[20%] gap-2.5 p-[11px] border border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm rounded-[20px]">
                  <Img
                    src="images/img_frame.svg"
                    alt="image"
                    className="h-[74px] w-[74px] mt-[34px]"
                  />
                  <Text
                    size="6xl"
                    as="p"
                    className="w-[72%] !text-black-900_03 text-center"
                  >
                    Heavy Vehicles
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[20%] gap-2.5 p-[11px] border border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm rounded-[20px]">
                  <Img
                    src="images/img_frame.svg"
                    alt="image"
                    className="h-[74px] w-[74px] mt-[34px]"
                  />
                  <Text
                    size="6xl"
                    as="p"
                    className="w-[72%] !text-black-900_03 text-center"
                  >
                    Heavy Vehicles
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-start w-[11%] gap-[30px] left-[6%] top-[37%] p-[35px] m-auto border border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm absolute rounded-[20px]">
          <Img
            src="images/img_frame_74x74.svg"
            alt="image_one"
            className="h-[74px] w-[74px] mt-[9px]"
          />
          <Text size="6xl" as="p" className="!text-black-900_03">
            Cars
          </Text>
        </div> */}
        <div className="flex flex-col items-center justify-center w-[11%] gap-[25px] bottom-[35%] left-[6%] p-10 m-auto border border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm absolute rounded-[20px]">
          <Img
            src="images/img_frame_74x74.svg"
            alt="image_two"
            className="h-[74px] w-[74px] mt-1"
          />
          <Text size="6xl" as="p" className="!text-black-900_03">
            Boats
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-[11%] gap-[35px] bottom-[35%] left-[17%] p-[30px] m-auto border border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm absolute rounded-[20px]">
          <Img
            src="images/img_frame_orange_400.svg"
            alt="image_three"
            className="h-[74px] w-[74px] mt-3.5"
          />
          <Text size="6xl" as="p" className="!text-black-900_03">
            Cars
          </Text>
        </div>
        <div className="flex flex-col items-center justify-end w-[11%] gap-[38px] bottom-[35%] left-[29%] p-[17px] m-auto border border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm absolute rounded-[20px]">
          <Img
            src="images/img_frame_orange_400_74x74.svg"
            alt="image_four"
            className="h-[74px] w-[74px] mt-7"
          />
          <Text size="6xl" as="p" className="mb-2.5 !text-black-900_03">
            Export Cars
          </Text>
        </div>
        <div className="flex flex-col items-center justify-end w-[11%] gap-[38px] bottom-[35%] left-[41%] p-[11px] m-auto border border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm absolute rounded-[20px]">
          <Img
            src="images/img_frame.svg"
            alt="image_five"
            className="h-[74px] w-[74px] mt-[34px]"
          />
          <Text size="6xl" as="p" className="mb-4 !text-black-900_03">
            Motorcycles
          </Text>
        </div>
      </div>
    </>
  );
}
