import React from "react";
import { Text, Img, Button } from "./..";

export default function Footer1({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-col items-center justify-center w-full gap-[83px]">
        <div className="flex flex-row justify-start items-center w-[46%] ml-[110px] gap-11">
          <Button color="blue_gray_100_01" size="6xl" variant="fill" className="min-w-[280px] rounded-[20px]">
            Previous
          </Button>
          <div className="flex flex-row justify-start w-[27%] gap-[3px]">
            <div className="h-[5px] w-[19%] opacity-0.3 bg-blue_gray-100_75 rounded-sm" />
            <div className="h-[5px] w-[19%] opacity-0.3 bg-blue_gray-100_75 rounded-sm" />
            <div className="h-[5px] w-[19%] bg-cyan-700 rounded-sm" />
            <div className="h-[5px] w-[19%] opacity-0.3 bg-blue_gray-100_75 rounded-sm" />
            <div className="h-[5px] w-[19%] opacity-0.3 bg-blue_gray-100_75 rounded-sm" />
          </div>
          <Button size="6xl" color="cyan_700_01_light_blue_400" className="min-w-[280px] rounded-[20px]">
            3/5 Next
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3 p-[34px] bg-gray-100_01">
          <Img src="images/img_citygel_2.png" alt="citygeltwo_one" className="w-[22%] mt-0.5 object-cover" />
          <Text size="2xl" as="p" className="!text-black-900_87 opacity-0.5">
            ©CityGel.com 2024, All rights Reseved
          </Text>
        </div>
      </div>
    </footer>
  );
}
