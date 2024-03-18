import React from "react";
import {
  man_pic,
  logo,
  yellowcurve,
  bluecurve,
  greycurve,
  sittingman,
} from "assets/Allimages";
import { FaCaretDown, FaAngleDown } from "react-icons/fa";
import CitygelLogo from "./ai-5pages/CitygelLogo";
const Fullheader = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <header className=" bg-gradient-to-r from-[rgb(16,56,76)] to-[rgb(21,60,77)] w-screen h-[100px] mq800:h-[80px] flex justify-between absolute overflow-hidden">
        <div className="flex justify-center items-center flex-grow">
          <img src={logo} className="h-full mq800:h-[56px]" />
        </div>
        <div className="flex justify-center items-center h-[70px] mq750:h-[60px] mt-2 mq800:space-x-0 space-x-4 flex-grow-0 ">
          <div className="mq800:hidden block">
            <h4 className="text-[18px] font-medium font-poppins">John Smith</h4>
            <p className="text-teal-400 text-[13px]">
              My Account <FaCaretDown />
            </p>
          </div>
          <div className="mq800:hidden block">
            <img
              src={man_pic}
              className="h-full rounded-full mt-[10px] mq750:mt-6px w-[50px] h-[50px] mr-10 mq750:mr-0"
            />
          </div>
          {/**Hidden part for mobile */}
          <div
            className="hidden mq800:block mt-4 w-[130px] h-[30px] border border-sky-500 rounded-2xl flex justify-center items-center
             "
          >
            <p className="text-[11px] text-white-A700">
              Change Location <FaAngleDown />
            </p>
          </div>
        </div>
      </header>
      <div className="flex overflow-hidden">
        <img
          src={yellowcurve}
          className="w-1/6 h-[1000px] mq800:h-[500px] relative top-[100px] mq750:top-[80px] flex-grow"
        />
        <img
          src={bluecurve}
          className="w-5/6 h-[840px] mq800:h-[390px]  left-0 top-0 flex-grow-0"
        />
        <img
          src={sittingman}
          className="absolute mq800:right-0 mq800:top-24 right-20 top-48 mq800:w-[320px] mq800:h-[290px] w-[720px] h-[660px]"
        />
      </div>
      <div className="absolute top-[300px]  mq1125:relative mq1125:top-[-40px]   w-full">
        {children}
        <div className="w-[70%] py-9 flex flex-row items-center justify-center  py-0 px-5 box-border max-w-full text-11xl text-white">
          <div className="w-full flex flex-row items-end justify-around gap-[20px] max-w-full mq1050:flex-wrap mq1050:justify-center">
            <div className="rounded-xl cursor-pointer w-[30%] bg-lightgray shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start pt-[23px] px-[77px] pb-[22px] z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="relative z-[3] mq450:text-lg mq1050:text-3xl text-white-A700">
                Previous
              </div>
            </div>
            <div className="h-[47px] w-[232px] flex flex-col items-start justify-start">
              <div className="self-stretch h-[5px] flex flex-row items-start justify-start relative gap-[3px] z-[2]">
                <div className="h-full w-11 absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-21xl bg-gainsboro-400" />
                <div className="h-full w-11 absolute !m-[0] top-[0px] bottom-[0px] left-[47px] rounded-21xl bg-gainsboro-400" />
                <div className="h-full w-11 absolute !m-[0] top-[0px] bottom-[0px] left-[calc(50%_-_22px)] rounded-21xl bg-gainsboro-400" />
                <div className="h-full w-11 absolute !m-[0] top-[0px] right-[47px] bottom-[0px] rounded-21xl bg-steelblue-100" />
                <div className="h-full w-11 absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-21xl bg-gainsboro-400" />
              </div>
            </div>
            <div className="w-[30%] cursor-pointer rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-center pt-[23px] pb-[22px] pr-5 pl-[29px] box-border whitespace-nowrap z-[2]">
              <div className="relative z-[3] text-white-A700">4/5 Next</div>
            </div>
          </div>
        </div>
        <CitygelLogo />
      </div>
    </div>
  );
};

export default Fullheader;
