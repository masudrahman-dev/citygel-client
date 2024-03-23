import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "components/Header1";
import Topbar from "components/organisms/topbar/Topbar";

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

      <Topbar />
      {/* <Header1 className="flex w-full flex-row items-center justify-between pb-4" /> */}
      <div className="mt-[-10px] flex w-full flex-row justify-center bg-gray-50">
        <div className="flex w-full flex-col items-center justify-start ">
          <div className="relative h-[800px] w-full sm:h-[381px] mq750:h-[381px] mq450:h-[381px] ">
            <div className="absolute left-0 bottom-0 right-0 top-0 m-auto h-[800px] w-full justify-center bg-teal-900 sm:h-[381px] mq750:h-[381px] mq450:h-[381px]" />
            <div className="absolute left-0 bottom-0 right-0 top-0 m-auto h-[800px] w-full justify-center sm:h-[381px] mq750:h-[381px] mq450:h-[381px]">
              <Img
                src="images/img_shanghai_aerial_sunset_970x1920.png"
                alt="shanghaiaerial"
                className="absolute left-0 bottom-0 right-0 top-0 m-auto h-[800px] w-full justify-center object-cover sm:h-[381px] mq750:h-[381px] mq450:h-[381px]"
              />
              <div className="absolute left-0 bottom-0 top-0 m-auto flex h-full w-[95%] flex-col items-start justify-start">
                <div className="relative z-[1] h-[745px] w-full">
                  <div className="absolute right-0 top-0 m-auto flex w-[94%] flex-col items-center justify-start">
                    <div className="flex w-full flex-col items-end justify-start">
                      <div className="flex w-full flex-col items-end justify-start gap-[18px]"></div>
                      <div className="z-[1] mt-[-118px] mr-[189px] h-[364px] w-[364px] rounded-[50%] bg-light_blue-400 blur-[430.00px] backdrop-opacity-[0.5]" />
                      {/* <div className="h-[364px] w-[364px] mt-[-118px] mr-[189px] z-[1] bg-light_blue-400 backdrop-opacity-[0.5] blur-[430.00px] rounded-[50%]" /> */}
                    </div>
                    <div className="z-[1] mt-[-132px] flex w-full flex-col items-center justify-start ">
                      <Heading
                        as="h1"
                        className="sm:text-[32px] mq750:text-[32px] mq450:text-[32px]"
                      >
                        <span className="font-publicsans font-bold text-white-A700">
                          Welcome to{" "}
                        </span>
                        <span className="font-publicsans font-bold text-light_blue-400">
                          CityGel!
                        </span>
                      </Heading>
                      <Text
                        size="9xl"
                        as="p"
                        className="text-center  !text-white-A700_a2 opacity-0.8 sm:text-[18px] mq750:text-[18px] mq450:text-[18px]"
                      >
                        Online Classified Website
                      </Text>
                      <Text
                        size="5xl"
                        as="p"
                        className="mt-[25px] text-center !text-white-A700_99 opacity-0.7 sm:text-[10px] mq750:text-[10px] mq450:text-[10px]"
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
                    className="absolute bottom-0 left-0 m-auto h-[262px] w-[14%] object-cover"
                  />
                </div>
                <div className="mt-[-57px] ml-[674px] h-[262px] w-[262px] rounded-[50%] bg-light_blue-400 blur-[430.00px] backdrop-opacity-[0.5]" />
              </div>
            </div>
          </div>
          <div className="relative mt-[-160px] grid w-[95%] grid-cols-4 items-start gap-5 sm:mt-[5px] sm:w-full sm:grid-cols-2 md:grid-cols-2 mq750:mt-[5px] mq750:grid-cols-2 mq450:mt-[5px] mq450:grid-cols-1">
            <div className="gray_50_02_red_A400_border m-auto flex h-[214px]  w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 px-20 py-[84px]  shadow-sm">
              <Text
                size="7xl"
                as="p"
                className="mb-1.5 !font-aleo text-3xl !text-black-900_03"
              >
                Dubai
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex h-[214px]  w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 px-14 py-[84px]  shadow-sm">
              <Text
                size="3xl"
                as="p"
                className="mb-1.5 text-center  !font-aleo !text-black-900_03"
              >
                AbuDhabi
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex h-[214px]  w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 px-14 py-[84px]  shadow-sm">
              <Text size="3xl" as="p" className="!font-aleo !text-black-900_03">
                Sharjah
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex h-[214px]  w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 px-14 py-[84px]  shadow-sm">
              <Text size="3xl" as="p" className="!font-aleo !text-black-900_03">
                Ajman
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex h-[214px]  w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 px-14 py-[84px]  shadow-sm">
              <Text size="3xl" as="p" className="!font-aleo !text-black-900_03">
                Ajman
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex h-[214px]  w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 px-14 py-[84px]  shadow-sm">
              <Text size="3xl" as="p" className="!font-aleo !text-black-900_03">
                Ajman
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex h-[214px]  w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 px-14 py-[84px]  shadow-sm">
              <Text size="3xl" as="p" className="!font-aleo !text-black-900_03">
                Ajman
              </Text>
            </div>
            <div className="gray_50_02_red_A400_border m-auto flex h-[214px]  w-[90%]  flex-row justify-center rounded-[20px] border-[3px] border-solid bg-white-A700 px-14 py-[84px]  shadow-sm">
              <Text size="7xl" as="p" className="!font-aleo !text-black-900_03">
                Ajman
              </Text>
            </div>
          </div>

          <Footer className="mt-[145px] flex w-full items-center justify-center bg-gray-100_01 p-[34px]" />
        </div>
      </div>
    </>
  );
}
