import React from "react";
import { Img, Text } from "./..";

export default function Header7({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1700px]">
        <Img src="images/img_citygel_2_white.png" alt="citygel2white" className="w-[12%] object-cover" />
        <div className="flex flex-row justify-between items-center w-[29%]">
          <div className="flex flex-col items-start justify-start gap-0.5">
            <a href="#">
              <Text size="3xl" as="p">
                John Smith
              </Text>
            </a>
            <Text size="lg" as="p" className="!text-light_blue-400 text-center">
              My Account
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start h-[76px] w-[76px] p-[5px] bg-light_blue-400 rounded-[50%]">
            <Img src="images/img_ellipse_5.png" alt="circleimage" className="h-[66px] w-[66px] rounded-[50%]" />
          </div>
          <div className="h-[50px] w-[46%] relative">
            <Text as="p" className="bottom-[22%] right-[14%] m-auto absolute">
              Change Location
            </Text>
            <div className="flex flex-row justify-between items-center w-full h-full left-0 bottom-0 right-0 top-0 p-[3px] m-auto border-white-A700 border border-solid absolute rounded-[25px]">
              <div className="flex flex-col items-center justify-start h-[44px] w-[44px] p-2.5 border-white-A700 border border-solid bg-white-A700 rounded-[50%]">
                <div className="flex justify-center h-[24px] w-[24px]" />
              </div>
              <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[5px] mr-2.5" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full opacity-0.1 bg-white-A700_63" />
    </header>
  );
}
