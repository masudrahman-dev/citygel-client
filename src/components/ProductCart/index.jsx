import React from "react";
import ai from '../../assets/images/ai.jpg'
import placeholder from '../../assets/images/placeholder.png'


const ProductCart = (props) => {
    return (
        <div className="w-[405px] h-[690px] 
        border-2 border-red-400 border-solid
        rounded-md ml-3 mb-3">

            <div>
                <img src={ai} alt="" className="w-[400px] h-[280px] border-x-white-A700 border-solid rounded-2xl border-8" />
            </div>
            <div className="flex justify-center mt-2 space-x-2">
                <button
                    style={{ background: 'linear-gradient(90deg, #FCB100 0%, #ED893E 100%)' }}
                    className="w-[122px] h-[39px] rounded-md cursor-pointer text-white-A700">Premium</button>
                <button
                    style={{ background: 'linear-gradient(90deg, #FCB100 0%, #ED893E 100%)' }}
                    className="w-[122px] h-[39px] rounded-md cursor-pointer text-white-A700">Premium</button>
                <button
                    style={{ background: 'linear-gradient(90deg, #FCB100 0%, #ED893E 100%)' }}
                    className="w-[122px] h-[39px] rounded-md cursor-pointer text-white-A700">Premium</button>
            </div>
            <div className="mt-3">
                <h1 className="w-[385px] h-[80px] text-[28px] font-poppins font-semibold pl-2">Dell Touch Screen - Core I7 16GB RAM 512GB</h1>
                <p className="w-[236px] h-[30px] pl-2 mt-2">Electronics . Computers</p>
                <p className="w-[375px] h-[50px] font-poppins font-normal text-[18px] text-gray-500 pl-2 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting ind...</p>
                <span className="flex mt-3">
                    <p className="pl-2 w-[375px] h-[40px] font-poppins font-semibold text-[28px]">AED 980</p>
                    <div className="flex flex-row w-[40%]">
                        <p className="pt-1">City name</p>
                        <img src={placeholder} className="w-[24px] h-[24px]" />
                    </div>
                </span>
            </div>
            <div className="mt-5 ml-2">
                <button className="w-[385px] h-[70px] rounded-3xl"
                style={{background: 'linear-gradient(90deg, #0B90AF 0%, #20C5F2 100%)'}}>View All</button>
            </div>
        </div>
    )
}

export default ProductCart