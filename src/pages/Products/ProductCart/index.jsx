import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from "./ProductSlider";
const ProductCart = ({ item }) => {
  console.log(item);
  return (
    <div className="p-3 w-full product-border rounded-xl bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] box-border flex flex-col  py-2.5  px-[10px]   max-w-full text-left text-lg text-white font-poppins border-[1px] border-solid border-gray-100">
      <div>
        <ProductSlider
          mainImage={item.mainImage}
          moreImages={item.moreImages}
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[10px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
          <div className="self-stretch w-full flex flex-row items-center justify-center gap-[10px] mq450:flex-wrap">
            <div className="rounded-3xs w-[31%] mq750:w-[30%] [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start py-0.5 px-2 z-[1]">
              <div className="text-whitesmoke-100 text-center relative inline-block min-w-[15%] mq750:text-[7.22px] text-[14px]">
                Premium
              </div>
            </div>
            <div className="rounded-3xs w-[31%] mq750:w-[30%] [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start py-0.5 px-2 z-[1]">
              <div className="text-whitesmoke-100 text-center relative inline-block min-w-[15%] mq750:text-[7.22px] text-[14px]">
                Premium
              </div>
            </div>
            <div className="rounded-3xs w-[31%] mq750:w-[30%] [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start py-0.5 px-2 z-[1]">
              <div className="text-whitesmoke-100 text-center relative inline-block min-w-[15%] mq750:text-[7.22px] text-[14px]">
                Premium
              </div>
            </div>
          </div>
          <h3 className="m-0 self-stretch mq750:text-[16.23px] relative text-9xl mq450:text-[16.23px] mq750:leading-[16.23px] leading-[40px] font-semibold font-inherit text-black z-[1] mq450:leading-[1.23]">
            {item.title}
          </h3>
        </div>
        <div className="flex flex-row items-start w-full justify-start pt-0 px-0 mq750:pb-[2px]  pb-[5px] text-xl text-gray-1100">
          <div className="relative w-full text-left mq750:text-[8.02px]   z-[1] mq450:text-base">
            {item.category.name} - {item.subcategory.name}
          </div>
        </div>
        <div className="w-[375px] flex flex-row items-start justify-start pt-0 px-0  mq750:pb-[2px] pb-[5px] box-border max-w-full text-gray-1200">
          <div className="flex-1 mq750:text-[7.22px]  relative mq750:leading-[08px] leading-[25px] inline-block max-w-full z-[1]">
            {item.description}
          </div>
        </div>
        <div className="self-stretch flex w-full flex-row items-center justify-between pt-0 px-0 pb-4 box-border max-w-full text-9xl text-black">
          <div className="relative w-[50%] mq750:text-[15.23px] mq750:leading-[08px]  leading-[40px] font-semibold inline-block whitespace-nowrap max-w-full z-[1] mq450:text-3xl mq450:leading-[08px]">
            AED {item.price}
          </div>
          <div className="flex  items-start mq450:ml-2 ml-9 mq750:mt-[-10px] justify-end w-[50%] mq750:pr-4  pt-[5px] px-0 pb-0 text-xl text-gray-1100">
            <div className="flex flex-row items-center justify-end  gap-[1px]">
              <div className="relative mq750:text-[8.02px] mq450:text-[10px] mq750:mt-[8.02px] inline-block max-w-[105px] z-[1] mq450:text-base">
                {item.city}
              </div>
              <div className="h-[27px] mq750:h-[9.80px] mq750:w-[9.80px]  flex flex-col items-start justify-start pt-[3px] mq750:pt-[0px] px-0 pb-0 box-border">
                <img
                  className="w-6 h-6 relative z-[1]"
                  alt=""
                  src="/vuesaxboldlocation-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer mq750:w-[100%] self-stretch rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center py-[17px] px-[130px] mq750:px-[90px] mq1050:px-[120px] box-border whitespace-nowrap max-w-full z-[1] text-5xl mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[70px] w-[100%]  relative rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
          <div className="text-whitesmoke-100  text-center relative inline-block min-w-[92px] z-[2]">
            View All
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
