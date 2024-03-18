import ss from '../../assets/images/headerbg.png'
const Background = () => {
  return (
    <header className="self-stretch h-[654px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative text-left text-3xl text-white font-poppins">
      <div className="w-[1881px] h-px absolute !m-[0] top-[128px] left-[calc(50%_-_940px)] box-border opacity-[0.1] z-[1] border-t-[1px] border-solid border-white-A700" />
      <div className="self-stretch h-[970px] relative shrink-0 [debug_commit:612783b]">
        <div className="absolute top-[0px] left-[-21px] w-[1941px] h-[970px] flex flex-row items-start justify-start">
          <img
            className="h-[970px] flex-1 relative max-w-full overflow-hidden"
            alt=""
            // src="/group-3.svg"
            src={ss}
          />
          <div className="text-white-A700 absolute !m-[0] top-[151px] left-[146px] whitespace-nowrap z-[1]">
            Real Estate
          </div>
          <div className="text-white-A700 absolute !m-[0] top-[151px] left-[337px] z-[1]">
            Vehicle
          </div>
          <div className="text-white-A700 absolute !m-[0] top-[151px] left-[488px] inline-block min-w-[41px] z-[1]">
            Job
          </div>
          <div className="text-white-A700 absolute !m-[0] top-[151px] left-[599px] whitespace-nowrap z-[1]">
            Classified (General Category)
          </div>
          <div className="!m-[0] absolute top-[138px] right-[110px] rounded-3xs bg-crimson flex flex-row items-start justify-start pt-[15px] pb-3.5 pr-[59px] pl-[57px] whitespace-nowrap z-[1] text-7xl text-whitesmoke-100 font-aleo">
            <div className="h-[60px] w-[242px] relative rounded-3xs bg-crimson hidden" />
            <b className="h-[31px] relative inline-block z-[1]">Past an ad</b>
          </div>
          <div className="w-[83px] absolute !m-[0] top-[76px] right-[514px] text-sm text-nd text-center inline-block whitespace-nowrap z-[1]">
            My Account
          </div>
          <div className="text-white-A700 absolute !m-[0] top-[43px] right-[474px] whitespace-nowrap z-[1]">
            John Smith
          </div>
          <div className="!m-[0] absolute top-[45px] right-[110px] rounded-61xl flex flex-row items-start justify-start py-[3px] pr-[11px] pl-1 gap-[7px] z-[1] text-base border-[1px] border-solid border-white-A700">
            <div className="bg-[#FFFFFF] h-11 w-11 rounded-61xl bg-white box-border flex flex-row items-start justify-start py-2.5 px-[9px] z-[2] border-[1px] border-solid border-white-A700">
              <div className="h-11 w-11 relative rounded-61xl bg-white box-border hidden border-[1px] border-solid border-white-A700" />
              <img
                className=" h-6 w-6 relative z-[3]"
                alt=""
                src="/vuesaxlinearlocation.svg"
              />
            </div>
            <div className="h-[50px] w-[223px] relative rounded-61xl box-border hidden border-[1px] border-solid border-white-A700" />
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <div className="text-white-A700 relative whitespace-nowrap">Change Location</div>
            </div>
            <div className="h-[26px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border">
              <img
                className="w-[11px] h-[5px] relative z-[2]"
                alt=""
                src="/vector-16.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[32px] left-[1476px] w-[76px] h-[76px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-deepskyblue w-full h-full z-[1]" />
          <img
            className="absolute w-[calc(100%_-_10px)] top-[5px] right-[5px] left-[5px] rounded-[50%] max-w-full overflow-hidden h-[66px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/ellipse-5@2x.png"
          />
        </div>
        <img
          className="absolute top-[84px] left-[1409px] rounded-12xs w-2.5 h-[5px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/polygon-1.svg"
        />
        <div className="absolute top-[248px] left-[110px] rounded-11xl bg-white w-[1700px] h-[120px] z-[3] text-9xl text-black">
          <div className="absolute top-[0px] left-[0px] rounded-11xl bg-white w-full h-full hidden" />
          <div className="absolute top-[5px] left-[5px] rounded-11xl bg-whitesmoke-200 w-full h-[110px] z-[4]">
            <div className="absolute top-[0px] left-[0px] rounded-11xl bg-whitesmoke-200 w-full h-full hidden" />
            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-7xl bg-main-color w-[563.3px] z-[5] text-white">
              <div className="absolute top-[0px] left-[0px] rounded-7xl bg-main-color w-full h-full hidden" />
              <div className="absolute top-[34px] left-[170px] whitespace-nowrap z-[6]">
                Personal Details
              </div>
            </div>
            <h3 className="m-0 absolute top-[34px] left-[791px] text-inherit font-normal font-inherit whitespace-nowrap z-[5]">
              My Ads
            </h3>
            <h3 className="m-0 absolute top-[34px] left-[1337px] text-inherit font-normal font-inherit z-[5]">
              Enquiries
            </h3>
          </div>
        </div>
        <img
          className="absolute top-[20px] left-[110px] w-[203px] h-[100px] object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/citygel2-white-1@2x.png"
        />
      </div>
    </header>

  );
};

export default Background;



