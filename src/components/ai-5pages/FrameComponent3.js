import { useMemo } from "react";

const FrameComponent3 = ({ expDate, prop, propWidth, propWidth1 }) => {
  const expDateStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[9.80000000000291px] min-w-[325px] max-w-full text-left text-xl-4 text-gray-300 font-poppins">
      <div
        className="w-[222.2px] relative uppercase inline-block mq450:text-base"
        style={expDateStyle}
      >
        {expDate}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[5.599999999998545px] pb-[11.10000000000582px] box-border relative max-w-full text-9xl-1 text-gray-400 font-comfortaa">
        <div className="h-[40.8px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] box-border opacity-[0.2] border-b-[1.3px] border-solid border-gray-300" />
        <div
          className="w-[442.6px] relative capitalize inline-block shrink-0 max-w-full z-[1] mq450:text-3xl"
          style={divStyle}
        >
          {prop}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
