const FrameComponent1 = () => {
  return (
    <div className="self-stretch h-[283px] flex flex-row items-start justify-start pt-0 px-0 pb-[143px] box-border max-w-full">
      <header className="self-stretch flex-1 flex flex-row items-start justify-center py-5 pr-5 pl-[769px] box-border relative gap-[519px] max-w-full z-[5] text-left text-3xl text-white font-poppins mq450:gap-[519px_65px] mq450:pl-5 mq450:box-border mq800:gap-[519px_130px] mq800:pl-48 mq800:box-border mq1325:gap-[519px_259px] mq1325:pl-96 mq1325:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/frame-3923.svg"
        />
        <img
          className="h-[100px] w-[203px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/citygel2-white-1@2x.png"
        />
        <div className="w-[229px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[30px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h3 className="m-0 relative text-inherit font-normal font-inherit whitespace-nowrap z-[1]">
                  John Smith
                </h3>
                <div className="w-24 flex flex-row items-start justify-start gap-[3px] text-center text-sm text-nd">
                  <div className="flex-1 relative whitespace-nowrap z-[1]">
                    My Account
                  </div>
                  <div className="h-[13px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                    <img
                      className="w-2.5 h-[5px] relative rounded-12xs object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/polygon-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[76px] flex flex-row items-start justify-start">
              <div className="h-[76px] flex-1 relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-deepskyblue w-full h-full z-[1]" />
                <img
                  className="absolute w-[calc(100%_-_10px)] top-[5px] right-[5px] left-[5px] rounded-[50%] max-w-full overflow-hidden h-[66px] object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/ellipse-5@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent1;
