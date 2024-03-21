// import "antd/dist/antd.min.css";
import { Input, Button, Divider } from "antd";
import AdsInput from "components/Input/AdsInput";
import { Dropdown, Space } from "antd";
import { useState } from "react";
import { message, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  prevStep,
  setCategory,
  setForm,
} from "store/slices/adsPostSlice";
import { Controller, useForm } from "react-hook-form";
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
const imageStorageKey = "3a1e59ad1d3a8caba2efe37f45b560e9";
const PostFormAd = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { register, handleSubmit, errors, control, getValues, setValue } =
    useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    dispatch(setForm(data));
    // You can dispatch an action or perform other operations with form data
  };
  const { currentStep, category, subcategory } = useSelector(
    (state) => state.post,
  );
  const [imageUrl, setImageUrl] = useState("");

  const handleFileUpload = async (info) => {
    if (info.file.status === "done") {
      const { data } = info.file.response;
      message.success(`${info.file.name} file upload successfully.`);
      setImageUrl(data.url);
      setValue("mainImage", data.url);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleMultipleFileUpload = async (info, field) => {
    if (info.file.status === "done") {
      const { data } = info.file.response;

      const currentImages = getValues("moreImages") || [];
      setValue("moreImages", [...currentImages, data]);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const handlePrev = () => {
    dispatch(prevStep());
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
  console.log(category);
  return (
    <form>
      {" "}
      <main className="self-stretch flex flex-row items- justify-between pl-10 box-border max-w-full">
        <section className="w-[100%] pl-4 flex flex-col items-start justify-start gap-[9px] max-w-full text-left text-25xl text-black font-poppins">
          <div className="w-[80%] flex flex-col items-start justify-start gap-[50px] max-w-full mq450=gap-[25px_50px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <h1 className="m-0 relative text-inherit font-medium font-inherit z-[4] mq450=text-7xl mq800=text-16xl">
                Enter Details
              </h1>
              <h3 className="m-0 self-stretch relative text-3xl leading-[35px] font-normal font-inherit text-gray-1200 z-[4] mq450=text-lg mq450=leading-[28px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem `}</h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-base text-gray-1000">
              <AdsInput tittle="Type" name="type" register={register} />
              <AdsInput tittle="Brand" name="brand" register={register} />
              <AdsInput tittle="Model" name="model" register={register} />
              <AdsInput
                tittle="Fuel Type"
                name="fuelType"
                register={register}
              />
              <AdsInput
                tittle="Listed By"
                name="listedBy"
                register={register}
              />
              <AdsInput
                tittle="Transmission"
                name="transmission"
                register={register}
              />
              <AdsInput
                tittle="KM Driven"
                name="kmdriven"
                register={register}
              />
              <AdsInput
                tittle="No of Owners"
                name="owners"
                register={register}
              />
              <AdsInput tittle="Ad Title" name="title" register={register} />

              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[9px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="relative text-base font-poppins text-gray-1000 text-left">
                    Ad Description
                  </div>
                </div>
                <Input.TextArea
                  name="description"
                  register={register}
                  className="self-stretch flex-1 font-poppins text-xl text-black max-w-full bg-gainsboro-300 focus=bg-gainsboro-300 border-0 hover=bg-gainsboro-300"
                />
              </div>
              <AdsInput tittle="Ad Price" name="price" register={register} />
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[9px] max-w-full">
                <AdsInput tittle="Country" name="country" register={register} />
                <AdsInput tittle="State" name="state" register={register} />
                <AdsInput tittle="City" name="city" register={register} />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="relative inline-block min-w-[39px] z-[2]">
                    Enquiry Type
                  </div>
                </div>
                <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start py-[25px] px-[23px] box-border max-w-full z-[4] text-xl text-black">
                  <Controller
                    name="selectedItem"
                    control={control}
                    defaultValue={selectedItem} // Set default value if needed
                    render={({ field }) => (
                      <Dropdown
                        className="h-7 w-[880px] px-[10px] py-[6px] rounded-mini border-none outline-none focus:ring-0 max-w-full"
                        menu={{
                          items: items.map((item) => ({
                            ...item,
                            onClick: () => {
                              field.onChange(item.key); // Update the value directly using field.onChange
                            },
                          })),
                        }}
                        trigger={["click"]}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          {field.value ? (
                            <span>
                              {
                                items.find((item) => item.key === field.value)
                                  .label
                              }
                            </span>
                          ) : (
                            <span>Select</span>
                          )}
                        </a>
                      </Dropdown>
                    )}
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left">
                      Main Image
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full">
                    <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <div className="relative text-xl font-poppins text-black text-left z-[1] mq450=text-base">
                      <Controller
                        name="mainImage"
                        control={control}
                        render={({ field }) => (
                          <Upload
                            name="image"
                            action={`https://api.imgbb.com/1/upload?key=${imageStorageKey}`}
                            onChange={handleFileUpload}
                            className="pr-7 py-4"
                          >
                            <Button className="bg-gainsboro-400">
                              Upload Image
                            </Button>
                          </Upload>
                        )}
                      />
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
                    <div className="relative text-xl font-poppins text-black text-left z-[1] mq450=text-base">
                      <Controller
                        name="moreImages"
                        control={control}
                        render={({ field }) => (
                          <Upload
                            name="image"
                            action={`https://api.imgbb.com/1/upload?key=${imageStorageKey}`}
                            onChange={(info) =>
                              handleMultipleFileUpload(info, field)
                            }
                            className="pr-7 py-4"
                            multiple
                          >
                            <Button className="bg-gainsboro-400">
                              Upload Image
                            </Button>
                          </Upload>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-[640px]">
          <div className="w-[20%] bg-gainsboro-100 flex flex-row items-center justify-center pb-[1000px] pr-5 pl-[21px] box-border min-w-[350px] max-w-full mq800=pt-[298px] mq800=pb-[298px] mq800=box-border mq800=min-w-full mq1125=pt-[458px] mq1125=pb-[458px] mq1125=box-border mq1325=flex-1 mq1325=pt-[705px] mq1325=pb-[705px] mq1325=box-border">
            <div className="h-[20px] w-[20%] relative bg-gainsboro-100 hidden max-w-full" />
            <h1 className="m-0 flex justify-center items-center relative text-inherit font-normal font-inherit inline-block min-w-[70px] z-[1] mq450=text-11xl mq800=text-21xl">
              AD
            </h1>
          </div>
        </section>
      </main>
      <div className="mt-9">
        <div className="w-[70%] sm=w-[100%] py-9 flex flex-row sm=flex-col mq450=flex-col mq800= mq1050=items-center justify-center  py-0 px-5 box-border max-w-full text-11xl text-white">
          <div className="w-full flex flex-row  items-center justify-between gap-5 max-w-full mq1050=flex-wrap mq1050=justify-center">
            <div
              onClick={handlePrev}
              className={` cursor-pointer w-[30%] sm=w-[40%]  mq750=w-[30%] sm=mt-[10px] mq750=w-[50%]  rounded-xl bg-[#D3D3D3] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[23px] pb-[22px] pr-5 pl-[29px] box-border whitespace-nowrap z-[2]`}
            >
              <div className="relative sm=text-[14px] z-[3] text-white-A700">
                Previous
              </div>
            </div>
            <div className="h-[47px] w-[232px] sm=w-[20%] flex flex-col mt-10 items-center justify-between">
              <div className=" h-[5px] flex flex-row items-center justify-between relative gap-[10px] z-[2]">
                <div
                  className={`h-full  w-11 sm=w-3  rounded-21xl ${currentStep == 1 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                />
                <div
                  className={`h-full w-11 sm=w-3 rounded-21xl ${currentStep == 2 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                />
                <div
                  className={`h-full w-11 sm=w-3 rounded-21xl ${currentStep == 3 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                />
                <div
                  className={`h-full w-11 sm=w-3  rounded-21xl ${currentStep == 4 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                />
                <div
                  className={`h-full w-11 sm=w-3 rounded-21xl ${currentStep == 5 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                />
              </div>
            </div>
            {!errors ? (
              <div
                onClick={handleSubmit(onSubmit)}
                className={`cursor-pointer w-[30%] sm:w-[40%]  mq750:w-[30%] sm:mt-[10px] mq750:w-[50%]  rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[23px] pb-[22px] pr-5 pl-[29px] box-border whitespace-nowrap z-[2]`}
              >
                <div className="relative sm=text-[14px] z-[3] text-white-A700">
                  {currentStep}/5 Next
                </div>
              </div>
            ) : (
              <div
                className={`w-[30%] sm:w-[40%]  mq750:w-[30%] sm:mt-[10px] mq750:w-[50%]  rounded-xl bg-black-900_33 shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[23px] pb-[22px] pr-5 pl-[29px] box-border whitespace-nowrap z-[2]`}
              >
                <div className="relative sm=text-[14px] z-[3] text-white-A700">
                  {currentStep}/5 Next
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostFormAd;