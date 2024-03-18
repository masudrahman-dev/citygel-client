import { useMemo } from "react";
// import "antd/dist/antd.min.css";
import { Input } from "antd";

const TransmissionPicker1 = ({ kMDriven, propMinWidth }) => {
  const kMDrivenStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full text-left text-base text-gray-1000 font-poppins">
      <div className="flex flex-row items-start justify-start py-0 px-1.5">
        <div
          className="relative inline-block min-w-[78px]"
          style={kMDrivenStyle}
        >
          {kMDriven}
        </div>
      </div>
      <Input
        className="bg-[transparent] self-stretch font-poppins text-xl text-black max-w-full"
        bordered={true}
      />
      <div>eere</div>
    </div>
  );
};

export default TransmissionPicker1;
