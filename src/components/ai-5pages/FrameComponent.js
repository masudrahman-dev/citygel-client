const FrameComponent = () => {
  return (
    <div className="w-[1685px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-3xl text-white font-poppins mq1500:flex-wrap">
      <div className="w-[782px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq825:flex-wrap">
          <div className="relative z-[1] mq450:text-lg">Real Estate</div>
          <div className="relative z-[1] mq450:text-lg">Vehicle</div>
          <div className="relative inline-block min-w-[41px] z-[1] mq450:text-lg">
            Job
          </div>
          <div className="relative inline-block max-w-full z-[1] mq450:text-lg">
            Classified (General Category)
          </div>
        </div>
      </div>
      <div className="rounded-3xs bg-crimson flex flex-row items-start justify-start pt-[15px] pb-3.5 pr-[59px] pl-[57px] whitespace-nowrap z-[1] text-7xl text-whitesmoke-100 font-aleo">
        <div className="h-[60px] w-[242px] relative rounded-3xs bg-crimson hidden" />
        <b className="h-[31px] relative inline-block z-[1]">Past an ad</b>
      </div>
    </div>
  );
};

export default FrameComponent;
