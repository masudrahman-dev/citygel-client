

const ParentLink = () => {
  return (
    <header className="self-stretch h-[100px] flex flex-row items-start justify-between max-w-full gap-[20px] text-center text-7xl text-gray-200 font-poppins">
      <img
        className="h-[100px] w-[203px] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/citygel2-white-1@2x.png"
      />
      <div className="w-[479px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[50px] mq825:gap-[50px_25px]">
          <div className="w-[206px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border mq825:w-0">
            <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit whitespace-nowrap z-[1] mq825:hidden">
              Login or Sign up
            </h3>
          </div>
          <div className="flex-1 rounded-61xl flex flex-row items-start justify-start py-[3px] pr-[11px] pl-1 gap-[7px] z-[2] text-left text-base text-white border-[1px] border-solid border-white">
            <div className="h-11 w-11 rounded-61xl bg-white box-border flex flex-row items-start justify-start py-2.5 px-[9px] z-[3] border-[1px] border-solid border-white">
              <div className="h-11 w-11 relative rounded-61xl bg-white box-border hidden border-[1px] border-solid border-white" />
              <img
                className="h-6 w-6 relative z-[4]"
                alt=""
                src="/vuesaxlinearlocation.svg"
              />
            </div>
            <div className="h-[50px] w-[223px] relative rounded-61xl box-border hidden border-[1px] border-solid border-black" />
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <div className="relative whitespace-nowrap z-[1]">
                Change Location
              </div>
            </div>
            <div className="h-[26px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border">
              <img
                className="w-[11px] h-[5px] relative z-[3]"
                alt=""
                src="/vector-16.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ParentLink;
