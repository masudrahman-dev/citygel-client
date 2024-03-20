import React from 'react'
import {
    yellowcurve,
    bluecurve,
    sittingman,
} from "assets/Allimages";
import { FaCaretDown, FaAngleDown } from "react-icons/fa";
import menu from '../assets/images/menu.png'
import white_logo from '../assets/images/Citygel-2 white 1.png'
import blueimg2 from '../assets/images/Vector 23.png'
import location_logo from '../assets/images/change_location.png'
import { BigCart, Buttons, Categorycart, SmallCart, SmallCartMobile, Cart4 } from './CategoryCart';
import jobs from '../assets/images/jobs.png'
import furniture from '../assets/images/furniture.png'
import services from '../assets/images/services.png'
import electronics from '../assets/images/electronics.png'
import motor from '../assets/images/motor.png'
import properties from '../assets/images/properties.png'
import five from '../assets/images/5.png'
import profile_logo from '../assets/images/profile_logo.png'
import postad_logo from '../assets/images/Postad_logo.png'
import home_logo from '../assets/images/Home_logo.png'
import blue_logo from '../assets/images/citygel_blue.png'

const Category = () => {
    return (
        <div >
            <header className=" bg-gradient-to-r from-[rgb(16,56,76)] to-[rgb(21,60,77)] w-screen h-[100px] mq800:h-[80px] flex justify-between absolute overflow-hidden">
                <div className='justify-between pl-2 pr-2 items-center flex-grow hidden mq450:flex'>
                    <div className=''>
                        <img src={menu} className='' />
                    </div>
                    <div className='flex'>
                        <img src={white_logo} />
                        <div className="items-start justify-start pt-2.5 px-0 pb-0">
                            <img src={location_logo} className='pt-1' />
                        </div>
                    </div>
                </div>
                <div className='mq450:hidden flex justify-between item-center flex-grow'>
                    <img src={white_logo} className='w-[200px] h-[80px] ml-2' />
                    <div className='flex text-white-A700 place-items-center h-[80px] w-[350px] place-content-around'>
                        <p>Login or Sign Up</p>
                        <p className="text-[11px] text-white-A700 border-2 border-solid border-white-A700 rounded-lg">
                            Change Location <FaAngleDown />
                        </p>
                    </div>
                </div>
            </header>

            <div className="flex overflow-hidden h-auto">
                <img
                    src={yellowcurve}
                    className="w-1/5 mq1500:h-[1000px] mq800:h-[500px] relative top-[100px] mq1500:top-[80px] flex-grow -z-10"
                />
                <img
                    src={bluecurve}
                    className="w-5/6 h-[540px] mq800:h-[390px] mq1050:h-[490px] mq1500:h-[550px] left-0 top-0 flex-grow-0"
                />
                <img
                    src={sittingman}
                    className="absolute mq800:right-0 mq800:top-24 right-20 top-48 mq800:w-[320px] mq800:h-[290px] mq800:mt-[-3%] mq1050:w-[450px] mq1050:h-[410px] mq1050:mt-[-10%] mq1500:w-[500px] mq1500:h-[450px] mq1500:mt-[-8%] w-[720px] h-[660px] mt-[]"
                />
            </div>

            <div className='absolute mq450:mt-[-20%] mq450:w-screen  mq1500:mt-[-50%] mq1050:mt-[-80%] mq800:mt-[-50%] mq800:w-[60%] mq800:h-auto mq1050:w-[60%] mq1050:h-auto flex flex-col mq1500:justify-center mq1500:items-center mq1500:w-[60vw] mq1500:h-auto mq450:h-auto mq450:pl-0 mq1500:pl-3'>
                <div className='flex-1 font-publicsans font-extrabold text-5xl mq1500:text-16xl mq450:place-content-center'>
                    <p>Find Anything<br />Around You</p>
                </div>
                <div className='font-poppins font-normal text-sm opacity-50 pl-3 mq450:mt-3'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                </div>
                <div className='grid mq450:grid-cols-2 mq1500:grid-cols-4 gap-1 flex-1 mt-2'>
                    <Categorycart image={properties} text="Properties" />
                    <Categorycart image={motor} text="Motor" />
                    <Categorycart image={electronics} text="Electronics" />
                    <Categorycart image={furniture} text="Furniture" />
                    <Categorycart image={services} text="Services" />
                    <Categorycart image={jobs} text="Jobs" />
                    <Categorycart image={services} text="Category 7" />
                    <Categorycart image={services} text="Category 8" />
                </div>
                <div className='flex mq450:justify-center mq450:items-center w-screen mt-5  mq450:h-[27px] mq1500:h-[81px] mq450:pl-0 mq1500:pl-[40%]'>
                    <div className='font-poppins font-normal mq450:text-lg mq1050:text-9xl mq1500:text-[56px]'>Browse By SubCategories:</div>
                </div>

                <div className='hidden mq450:grid grid-cols-2 w-screen gap-y-2 place-items-center mt-5 shrink'>
                    <BigCart text='Properties' image={properties} />
                    <BigCart text='Motor' image={motor} />
                    <SmallCartMobile text='Apartment' />
                    <SmallCartMobile text='Cars' />
                    <SmallCartMobile text='Flats' />
                    <SmallCartMobile text='Export Cars' />
                    <SmallCartMobile text='House & Villas' />
                    <SmallCartMobile text='Motorcycles' />
                    <Buttons />
                    <Buttons />

                    <BigCart text='Electronics' image={electronics} />
                    <BigCart text='Furniture' image={furniture} />
                    <SmallCartMobile text='Electronics' />
                    <SmallCartMobile text='Hospitality' />
                    <SmallCartMobile text='Furniture' />
                    <SmallCartMobile text='Travel & Tourism' />
                    <SmallCartMobile text='Fashion' />
                    <SmallCartMobile text='Government' />
                    <Buttons />
                    <Buttons />

                    <BigCart text='Services' image={services} />
                    <BigCart text='Jobs' image={jobs} />
                    <SmallCartMobile text='Hospitality' />
                    <SmallCartMobile text='Cars' />
                    <SmallCartMobile text='Travel & Tourism' />
                    <SmallCartMobile text='Export Cars' />
                    <SmallCartMobile text='Government' />
                    <SmallCartMobile text='Motorcycles' />
                    <Buttons />
                    <Buttons />

                    <BigCart text='Category 7' image={services} />
                    <BigCart text='Category 7' image={services} />
                    <SmallCartMobile text='Sub category 1' />
                    <SmallCartMobile text='Sub category 1' />
                    <SmallCartMobile text='Sub category 1' />
                    <SmallCartMobile text='Sub category 1' />
                    <SmallCartMobile text='Sub category 1' />
                    <SmallCartMobile text='Sub category 1' />
                    <Buttons />
                    <Buttons />
                </div>

                <div className='mq450:hidden w-screen grid grid-cols-4 gap-y-1 relative mq800:left-[150px] mq1050:left-[200px] mq1500:left-[270px] mq1500:gap-y-3 place-items-center'>
                    <BigCart text='Properties' image={properties} />
                    <BigCart text='Motor' image={motor} />
                    <BigCart text='Electronics' image={electronics} />
                    <BigCart text='Furniture' image={furniture} />
                    <SmallCart image={five} text='Apartment' />
                    <SmallCart image={five} text='Cars' />
                    <SmallCart image={five} text='TVs' />
                    <SmallCart image={five} text='Sofa & Dining' />
                    <SmallCart image={five} text='Flats' />
                    <SmallCart image={five} text='Export Cars' />
                    <SmallCart image={five} text='Kitchen & Others' />
                    <SmallCart image={five} text='Beds & Wardrobes' />
                    <SmallCart image={five} text='House & Villas' />
                    <SmallCart image={five} text='Motorcycles' />
                    <SmallCart image={five} text='Computers & lap...' />
                    <SmallCart image={five} text='Home Decor & ga...' />
                    <Buttons />
                    <Buttons />
                    <Buttons />
                    <Buttons />

                    <BigCart text='Services' image={services} />
                    <BigCart text='Jobs' image={jobs} />
                    <BigCart text='Category 7' image={services} />
                    <BigCart text='Category 8' image={services} />
                    <SmallCart image={five} text='Electronics & Repair' />
                    <SmallCart image={five} text='Hospitality' />
                    <SmallCart image={five} text='SubCategory 1' />
                    <SmallCart image={five} text='SubCategory 1' />
                    <SmallCart image={five} text='Health & beauty' />
                    <SmallCart image={five} text='Travel & Tourism' />
                    <SmallCart image={five} text='SubCategory 2' />
                    <SmallCart image={five} text='SubCategory 2' />
                    <SmallCart image={five} text='Renovation & re...' />
                    <SmallCart image={five} text='Government' />
                    <SmallCart image={five} text='SubCategory 3' />
                    <SmallCart image={five} text='SubCategory 3' />
                    <Buttons />
                    <Buttons />
                    <Buttons />
                    <Buttons />
                </div>


                <div className='flex flex-col w-full justify-center items-center place-items-center mq450:mt-5 mq1500:ml-[70%] mq450:ml-0 mq1500:mt-10'>
                    <p className='font-publicsans mq450:font-semibold mq450:text-[35px] mq800:text-[45px] font-extrabold mq1050:text-[50px] mq1500:text-[65px]'>How it Works</p>
                    <p className='font-poppins mq450:font-medium mq450:text-[16px] mq800:text-[20px] font-semibold mq1050:text-[25px] mq1500:text-[36px]'>Can help you make smart choice</p>
                    <p className='font-poppins mq450:font-normal mq450:text-[9px] mq800:text-[13px] opacity-50 mq1050:text-[16px] mq1500:text-[21px] mq450:px-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                </div>

                <div className='w-screen mq450:grid mq450:grid-cols-1 mq1500:flex mq1500:flex-row place-items-center mt-5 gap-5 mq450:ml-0 mq1500:ml-[70%] justify-center relative left-0'>
                    <Cart4 h='Search for services' p='Lorem Ipsum is simply dummy text of the printing and typesetting industry' />
                    <Cart4 h='Get your deal' p='Lorem Ipsum is simply dummy text of the printing and typesetting industry' />
                    <Cart4 h='Enjoy the service' p='Lorem Ipsum is simply dummy text of the printing and typesetting industry' />
                </div>

                <div className='hidden mq450:w-screen mq450:flex mq450:flex-col mq450:relative mq450:mt-5'>
                    <img src={blueimg2} className='w-[375px] h-[155px] self-end' />
                    <img src={sittingman} className='w-[200px] h-[208px] mr-20 self-end absolute mt-6' />
                </div>

                <div className='mq450:hidden w-screen mt-8 relative flex flex-col mq800:ml-[50%] mq1050:ml-[70%] mq1500:ml-[70%]'>
                    <img src={blueimg2} className='mq800:w-[800px] mq800:h-[200px] mq1500:w-screen' />
                    <div className='mq1500:w-[50%] mq800:ml-[8%] mq1050:ml-[4%] absolute mq1500:mt-[10%] '>
                        <p className='mq800:text-[34px] mq1050:text-[38px] mq1500:text-[44px] font-publicsans font-semibold'>Lorem ispum is simply dummy text</p>
                        <p className='mq800:text-[14px] mq1050:text-[20px] mq1500:text-[24px] opacity-50 font-poppins font-normal py-[2%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                        <Buttons />
                    </div>
                </div>

                <div className='hidden mq450:flex'>
                    <div className='mt-20 flex flex-col justify-center items-center'>
                        <p className='mq800:text-[34px] font-publicsans font-semibold text-center'>Lorem ispum is simply dummy text</p>
                        <p className='mq800:text-[14px] opacity-50 font-poppins font-normal py-[2%] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                        <Buttons />
                    </div>
                </div>

                <div className='hidden mq450:flex w-screen  mq450:bg-gray-100 h-[67px] mt-10 justify-evenly items-center'>
                        <img src={home_logo} className='w-[30px] h-[37px]' />
                        <img src={postad_logo} className='w-[38px] h-[37px]'/>
                        <img src={profile_logo} className='w-[31px] h-[37px]'/>
                </div>

                <div className='mq450:hidden mq1500:flex w-screen h-[150px] items-center justify-center bg-[#F6F7F9] mt-32 ml-[65%]'>
                    <img src={blue_logo} className='w-[300px] h-[100px] ' />
                </div>
            </div>
        </div>
    )
}

export default Category
