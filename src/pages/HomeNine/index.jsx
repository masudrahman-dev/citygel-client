import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "components/Header1";
import Header5 from "components/Header5";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Citygel</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full ">
          <div className="h-[970px] w-full relative ">
            <div className="justify-center h-[970px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-teal-900 absolute" />
            <div className="justify-center h-[970px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Img
                src="images/img_shanghai_aerial_sunset_970x1920.png"
                alt="shanghaiaerial"
                className="justify-center h-[970px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-start justify-start w-[95%] h-full left-0 bottom-0 top-0 m-auto absolute">
                <div className="h-[745px] w-full z-[1] relative">
                  <div className="flex flex-col items-center justify-start w-[94%] right-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-end justify-start w-full">
                      <div className="flex flex-col items-end justify-start w-full gap-[18px]">
                        <Header5 className="flex flex-row justify-between items-center w-full" />
                        <Button
                          color="red_A400_01"
                          size="4xl"
                          variant="fill"
                          className="font-aleo font-bold min-w-[242px]"
                        >
                          Past an ad
                        </Button>
                      </div>
                      <div className="h-[364px] w-[364px] mt-[-118px] mr-[189px] z-[1] bg-light_blue-400 backdrop-opacity-[0.5] blur-[430.00px] rounded-[50%]" />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full mt-[-132px] z-[1] max-w-[1200px]">
                      <Heading as="h1">
                        <span className="text-white-A700 font-publicsans font-bold">
                          Welcome to{" "}
                        </span>
                        <span className="text-light_blue-400 font-publicsans font-bold">
                          CityGel!
                        </span>
                      </Heading>
                      <Text
                        size="9xl"
                        as="p"
                        className="!text-white-A700_a2 opacity-0.8"
                      >
                        Online Classified Website
                      </Text>
                      <Text
                        size="5xl"
                        as="p"
                        className="mt-[25px] !text-white-A700_99 text-center opacity-0.7"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled.
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_ellipse_2_262x241.png"
                    alt="image"
                    className="h-[262px] w-[14%] bottom-0 left-0 m-auto object-cover absolute"
                  />
                </div>
                <div className="h-[262px] w-[262px] mt-[-57px] ml-[674px] bg-light_blue-400 backdrop-opacity-[0.5] blur-[430.00px] rounded-[50%]" />
              </div>
              <div className="flex flex-row justify-center w-[21%] bottom-[2%] left-[6%] px-14 py-[81px] m-auto border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm absolute rounded-[20px]">
                <Text size="7xl" as="p" className="mb-1.5 !text-black-900_03 !font-aleo">
                  Dubai
                </Text>
              </div>
              <div className="flex flex-row justify-center w-[21%] bottom-[2%] left-[28%] px-14 py-[81px] m-auto border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm absolute rounded-[20px]">
                <Text size="7xl" as="p" className="mb-1.5 !text-black-900_03 !font-aleo">
                  Abu Dhabi
                </Text>
              </div>
              <div className="flex flex-row justify-center w-[21%] h-[214px] bottom-[2%] right-[28%] px-14 py-[84px] m-auto border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm absolute rounded-[20px]">
                <Text
                  size="7xl"
                  as="p"
                  className="!text-black-900_03 !font-aleo"
                >
                  Sharjah
                </Text>
              </div>
              <div className="flex flex-row justify-center w-[21%]  h-[214px] bottom-[2%] right-[6%] px-14 py-[84px] m-auto border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm absolute rounded-[20px]">
                <Text
                  size="7xl"
                  as="p"
                  className="!text-black-900_03 !font-aleo"
                >
                  Ajman
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start w-full mt-[22px] gap-10 max-w-[1700px]">
            <div className="flex flex-row justify-center w-[24%] px-14 py-[81px] border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm rounded-[20px]">
              <Text size="7xl" as="p" className="mb-1.5 !text-black-900_03 !font-aleo">
                Al Ain
              </Text>
            </div>
            <div className="flex flex-row justify-center w-[24%] px-14 py-[66px] border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm rounded-[20px]">
              <Text size="7xl" as="p" className="mt-[15px] mb-[22px] !text-black-900_03 !font-aleo">
                Ras Al Khaimah
              </Text>
            </div>
            <div className="flex flex-row justify-center w-[21%] h-[214px] px-14 py-[84px] border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm rounded-[20px]">
              <Text size="7xl" as="p" className="!text-black-900_03 !font-aleo">
                Fujairah
              </Text>
            </div>
            <div className="flex flex-row justify-center w-[24%] px-14 py-[59px] border-[3px] border-solid gray_50_02_red_A400_border bg-white-A700 shadow-sm rounded-[20px]">
              <Text size="7xl" as="p" className="mt-[25px] mb-[26px] !text-black-900_03 !font-aleo">
                Umm Al Quwain
              </Text>
            </div>
          </div>
          <Footer className="flex justify-center items-center w-full mt-[145px] p-[34px] bg-gray-100_01" />
        </div>
      </div>
    </>
  );
}
