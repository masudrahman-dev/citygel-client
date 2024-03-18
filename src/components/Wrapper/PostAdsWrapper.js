import Fullheader from "components/Fullheader";
import CitygelLogo from "components/ai-5pages/CitygelLogo";
import FrameComponent1 from "components/ai-5pages/FrameComponent1";
import React from "react";

const PostAdsWrapper = ({ children }) => {
  return (
    <div>
      <div className="w-full rounded-31xl bg-gray-200 overflow-hidden flex flex-col items-start justify-start relative gap-[83px] tracking-[normal] mq800:gap-[21px_83px] mq1125:gap-[41px_83px]">
        <Fullheader />
        {children}
        <div className="w-[80%] flex flex-row items-center justify-center  py-0 px-5 box-border max-w-full text-11xl text-white">
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

export default PostAdsWrapper;
