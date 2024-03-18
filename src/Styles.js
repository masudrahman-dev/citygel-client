const Styles = {
    boxWidth: "xl:max-w-[1250px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex flex-col justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-8 px-6",
    paddingY: "sm:py-8 py-6",
    padding: "md:px-30 px-10 md:py-12 py-6",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${Styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${Styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${Styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${Styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${Styles.flexStart} flex-col`,
  };
  
  export default Styles;