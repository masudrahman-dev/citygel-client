// import "antd/dist/antd.min.css";
import { Button } from "antd";


const TransmissionPicker = ({ mainImage, uploadImage }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full text-left text-base text-gray-1000 font-poppins">
      <div className="flex flex-row items-start justify-start py-0 px-1.5">
        <div className="relative">{mainImage}</div>
      </div>
      <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start p-2.5 box-border max-w-full">
        <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
        <Button className="whitespace-nowrap z-[1]" ghost type="default" />
      </div>
    </div>
  );
};

export default TransmissionPicker;
