import React from "react";
import { Button, Text, SelectBox, Img } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header6({ ...props }) {
  return (
    <header {...props}>
      <Img src="" alt="image" className="h-[206px]" />
      <div className="flex flex-col items-center justify-start w-full mb-2 gap-[18px] mx-auto max-w-[1700px]">
        <div className="flex flex-row justify-between items-start w-full">
          <Img
            src="images/img_citygel_2_white.png"
            alt="citygel2white"
            className="w-[12%] object-cover"
          />
          <div className="flex flex-row justify-between items-center w-auto mt-5 gap-[50px]">
            <Text size="5xl" as="p" className="!text-gray-50 text-center">
              Login or Sign up
            </Text>
            <SelectBox
              color="white_A700"
              size="xs"
              variant="outline"
              indicator={
                <Img src="images/img_arrow_down.svg" alt="arrow_down" />
              }
              name="location"
              placeholder="Change Location"
              options={dropDownOptions}
              className="w-[47%] gap-px rounded-[25px]"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
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
      </div>
    </header>
  );
}
