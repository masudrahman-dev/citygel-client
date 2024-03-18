// import "antd/dist/antd.min.css";

import { Input, Button } from "antd";
import FrameComponent1 from "./FrameComponent1";
import TransmissionPicker1 from "./TransmissionPicker1";
import TransmissionPicker from "./TransmissionPicker";
import CitygelLogo from "./CitygelLogo";
import AdsInput from "components/Input/AdsInput";
import { DownOutlined, UploadOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useState } from "react";
import { message, Upload } from "antd";
import PostAdsWrapper from "components/Wrapper/PostAdsWrapper";
import Fullheader from "components/Fullheader";
const items = [
  {
    label: <p>Email</p>,
    key: "email",
  },
  {
    label: <p>Phone</p>,
    key: "phone",
  },
  {
    type: "divider",
  },
  {
    label: "Both",
    key: "both",
  },
];
const PostAd = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleMenuClick = (e) => {
    // Handle menu item click here
    setSelectedItem(e.key);
    console.log("Clicked item:", e.key);
  };
  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  return (
    <Fullheader>
      <main className="self-stretch flex flex-row items- justify-between pl-10 box-border max-w-full">
        <section className="w-[100%] pl-4 flex flex-col items-start justify-start gap-[9px] max-w-full text-left text-25xl text-black font-poppins">
          <div className="w-[80%] flex flex-col items-start justify-start gap-[50px] max-w-full mq450:gap-[25px_50px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <h1 className="m-0 relative text-inherit font-medium font-inherit z-[4] mq450:text-7xl mq800:text-16xl">
                Enter Details
              </h1>
              <h3 className="m-0 self-stretch relative text-3xl leading-[35px] font-normal font-inherit text-gray-1200 z-[4] mq450:text-lg mq450:leading-[28px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem `}</h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-base text-gray-1000">
              <AdsInput {...{ tittle: "Type", name: "type" }} />
              <AdsInput {...{ tittle: "Brand", name: "brand" }} />
              <AdsInput {...{ tittle: "Model", name: "model" }} />
              <AdsInput {...{ tittle: "Fuel Type", name: "fuelType" }} />
              <AdsInput {...{ tittle: "Listed By", name: "listedBy" }} />
              <AdsInput {...{ tittle: "Transmission", name: "transmission" }} />
              <AdsInput {...{ tittle: "KM Driven", name: "kmdriven" }} />
              <AdsInput {...{ tittle: "No of Owners", name: "owners" }} />
              <AdsInput {...{ tittle: "Ad Title", name: "title" }} />
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="relative inline-block min-w-[39px] z-[2]">
                    Enquiry Type
                  </div>
                </div>
                <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start py-[25px] px-[23px] box-border max-w-full z-[4] text-xl text-black">
                  <Dropdown
                    className="h-7 w-[880px] px-[10px] py-[6px] rounded-mini  border-none outline-none focus:ring-0 max-w-full"
                    menu={{
                      items: items.map((item) => ({
                        ...item,
                        onClick: handleMenuClick,
                      })),
                    }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {selectedItem ? (
                        <span>
                          {
                            items.find((item) => item.key === selectedItem)
                              .label
                          }
                        </span>
                      ) : (
                        <span>Select</span>
                      )}
                    </a>
                  </Dropdown>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[9px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="relative text-base font-poppins text-gray-1000 text-left">
                    Ad Description
                  </div>
                </div>
                <Input.TextArea className="self-stretch flex-1 font-poppins text-xl text-black max-w-full bg-gainsboro-300 focus:bg-gainsboro-300 border-0 hover:bg-gainsboro-300" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="relative text-base font-poppins text-gray-1000 text-left inline-block min-w-[64px]">
                    Country
                  </div>
                </div>
                <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full">
                  <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                  <div className="relative text-xl font-poppins text-black text-left z-[1] mq450:text-base">
                    -Select-
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[9px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="relative text-base font-poppins text-gray-1000 text-left">
                    State /Emirates
                  </div>
                </div>
                <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full">
                  <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                  <div className="relative text-xl font-poppins text-black text-left z-[1] mq450:text-base">
                    -Select-
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="relative text-base font-poppins text-gray-1000 text-left inline-block min-w-[32px] z-[1]">
                    City
                  </div>
                </div>
                <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full">
                  <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                  <div className="relative text-xl font-poppins text-black text-left z-[1] mq450:text-base">
                    -Select-
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left">
                      Main Image
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full">
                    <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <div className="relative text-xl font-poppins text-black text-left z-[1] mq450:text-base">
                      <Upload {...props} className="pr-7 py-4">
                        <Button className=" bg-gainsboro-400 ">
                          Upload Image
                        </Button>
                      </Upload>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left">
                      More Images
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-3 px-7 pb-[22px] box-border max-w-full">
                    <div className="h-10 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <div className="relative text-xl font-poppins text-black text-left z-[1] mq450:text-base">
                      <Upload {...props} className="pr-7 py-1">
                        <Button className=" bg-gainsboro-400 ">
                          Upload Images
                        </Button>
                      </Upload>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-[640px]">
          <div className="w-[20%] bg-gainsboro-100 flex flex-row items-center justify-center pb-[1000px] pr-5 pl-[21px] box-border min-w-[350px] max-w-full mq800:pt-[298px] mq800:pb-[298px] mq800:box-border mq800:min-w-full mq1125:pt-[458px] mq1125:pb-[458px] mq1125:box-border mq1325:flex-1 mq1325:pt-[705px] mq1325:pb-[705px] mq1325:box-border">
            <div className="h-[20px] w-[20%] relative bg-gainsboro-100 hidden max-w-full" />
            <h1 className="m-0 flex justify-center items-center relative text-inherit font-normal font-inherit inline-block min-w-[70px] z-[1] mq450:text-11xl mq800:text-21xl">
              AD
            </h1>
          </div>
        </section>
      </main>
    </Fullheader>
  );
};

export default PostAd;
