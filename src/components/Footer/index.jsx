import React from "react";
import { Text, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-col items-center justify-center w-[22%] mt-0.5 gap-3">
        <Img src="images/img_citygel_2.png" alt="citygeltwo_one" className="w-full object-cover" />
        {/* <Text size="2xl" as="p" className="!text-black-900_87 opacity-0.5">
          ©CityGel.com 2024, All rights Reseved
        </Text> */}
        <p className="text-[14px] opacity-0.5"> ©CityGel.com 2024, All rights Reseved</p>
      </div>
    </footer>
  );
}
