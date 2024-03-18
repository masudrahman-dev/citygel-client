const OctalTree = () => {
  return (
    <div className="z-30 self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-271px] text-left text-base text-gray-1000 font-poppins">
      <div className="bg-[#FFFFFF] w-[1700px] rounded-11xl box-border flex flex-col items-start justify-start py-[30px] px-7 gap-[30px] max-w-full z-[3] border-[2px] border-solid border-gray-200 shadow-2xl mq750:pt-[291px] mq750:pb-5 mq750:box-border">
        <div className="w-[1700px] h-[710px] relative rounded-11xl bg-white shadow-[0px_0px_5px_rgba(0,_0,_0,_0.1)] box-border hidden max-w-full border-[2px] border-solid border-gray-800" />
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2.5 text-15xl text-black">
          <h2 className="m-0 relative text-inherit font-medium font-inherit z-[4] mq450:text-xl mq1050:text-8xl">
            Personal Details
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-1.5">
            <div className="relative inline-block min-w-[79px] z-[4]">
              Full Name
            </div>
          </div>
          <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start p-[25px] box-border max-w-full z-[4] text-xl text-black">
            <div className="h-20 w-[1640px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
            <div className="relative z-[5] mq450:text-base">John SMith</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-[3px]">
            <div className="relative inline-block min-w-[44px] z-[4]">
              Email
            </div>
          </div>
          <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start p-[25px] box-border max-w-full z-[4] text-xl text-black">
            <div className="h-20 w-[1640px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
            <div className="relative z-[5] mq450:text-base">
              John SMith@gmail.com
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[9px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-1.5">
            <div className="relative z-[4]">Phone Number</div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full text-6xl text-black">
            <div className="h-20 rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start py-[17px] pr-4 pl-[25px] box-border gap-[12.5px] z-[4]">
              <div className="h-20 w-[150px] relative rounded-mini bg-gainsboro-300 hidden" />
              <img
                className="h-[46px] w-[46px] relative rounded-76xl object-cover z-[5]"
                alt=""
                src="/hash-map@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="relative inline-block min-w-[26px] z-[5] mq450:text-xl">
                  +1
                </div>
              </div>
              <div className="h-[26px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border">
                <img
                  className="w-3 h-1.5 relative z-[5]"
                  alt=""
                  src="/priority-queue.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start p-[21px] box-border min-w-[220px] max-w-full z-[4]">
              <div className="h-20 w-[1480px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
              <div className="relative z-[5] mq450:text-xl">
                (00) 123 456 7890
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full text-11xl text-black">
          <div className="w-[580px] flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
            <div className="flex-[0.975] rounded-xl bg-white shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] box-border flex flex-row items-start justify-center pt-[23px] px-5 pb-[22px] min-w-[182px] z-[4] border-[3px] border-solid border-main-color mq450:flex-1">
              <div className="h-[90px] w-[280px] relative rounded-xl bg-white shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] box-border hidden border-[3px] border-solid border-main-color" />
              <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[54px] z-[5] mq450:text-lg mq1050:text-5xl">
                Edit
              </h2>
            </div>
            <div className="flex-1 rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-center pt-[23px] px-5 pb-[22px] box-border min-w-[182px] z-[4] text-white">
              <div className="h-[90px] w-[280px] relative rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] hidden" />
              <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[74px] z-[5] mq450:text-lg mq1050:text-5xl">
                Save
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OctalTree;
