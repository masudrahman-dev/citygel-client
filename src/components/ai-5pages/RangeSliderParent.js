const RangeSliderParent = ({ vuesaxboldsms, enquireNow }) => {
  return (
    <div className="self-stretch rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-center py-[22px] pr-[73px] pl-[72px] box-border gap-[12px] max-w-full z-[1] text-left text-9xl text-white font-poppins mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="h-[90px] w-[375px] relative rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
      <img
        className="h-[46px] w-[46px] relative min-h-[46px] z-[2]"
        alt=""
        src={vuesaxboldsms}
      />
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <div className="h-[42px] relative flex items-center whitespace-nowrap z-[2] mq450:text-3xl">
          {enquireNow}
        </div>
      </div>
    </div>
  );
};

export default RangeSliderParent;
