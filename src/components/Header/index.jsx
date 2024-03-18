import React from "react";
import { Button, Text, Img } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <Img src="" alt="image" className="h-[210px]" />
      <Text as="p" className="mt-[55px] mr-[141px]">
        Change Location
      </Text>
      <div className="flex flex-row justify-between items-center w-[12%] mt-10 mr-[110px] p-[3px] border-white-A700 border border-solid rounded-[25px]">
        <div className="flex flex-col items-center justify-start h-[44px] w-[44px] p-2.5 border-white-A700 border border-solid bg-white-A700 rounded-[50%]">
          <div className="flex justify-center h-[24px] w-[24px]" />
        </div>
        <Img
          src="images/img_arrow_down.svg"
          alt="arrowdown_one"
          className="h-[5px] mr-2.5"
        />
      </div>
      <div className="flex flex-row justify-between items-start w-full mt-5 mx-auto max-w-[1427px]">
        <Img
          src="images/img_citygel_2_white.png"
          alt="citygel2white"
          className="w-[15%] object-cover"
        />
        <Text size="5xl" as="p" className="mt-7 !text-gray-50 text-center">
          Login or Sign up
        </Text>
      </div>
      <div className="flex flex-row justify-between items-center w-full mb-3 mx-auto max-w-[1685px]">
        <div className="flex flex-row justify-between w-auto gap-[70px]">
          <a href="#">
            <Text size="3xl" as="p">
              Real Estate
            </Text>
          </a>
          <a href="#">
            <Text size="3xl" as="p">
              Vehicle
            </Text>
          </a>
          <a href="#">
            <Text size="3xl" as="p">
              Job
            </Text>
          </a>
          <a href="#">
            <Text size="3xl" as="p">
              Classified (General Category)
            </Text>
          </a>
        </div>
        <Button
          color="red_A400_01"
          size="4xl"
          variant="fill"
          className="font-aleo font-bold min-w-[242px]"
        >
          Past an ad
        </Button>
      </div>
    </header>
  );
}
