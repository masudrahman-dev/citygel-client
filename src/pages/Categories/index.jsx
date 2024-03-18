import React from 'react'
import { Helmet } from 'react-helmet'
import Header1 from 'components/Header1'
import vector20 from '../../assets/images/Vector 20.png'
import image31 from '../../assets/images/image 31.png'
import vector21 from '../../assets/images/Vector 21.png'
import vector23 from '../../assets/images/Vector 23.png'
import jobs from '../../assets/images/jobs.png'
import furniture from '../../assets/images/furniture.png'
import services from '../../assets/images/services.png'
import electronics from '../../assets/images/electronics.png'
import motor from '../../assets/images/motor.png'
import properties from '../../assets/images/properties.png'
import five from '../../assets/images/5.png'
import { BigCart, Buttons, Cart4, Categorycart, SmallCart } from './../../components/CategoryCart/index';
import Footer from 'components/Footer'



const CategoriesPage = () => {
    return (
        <div className='relative z-10 w-[100%] h-[100vh]'>
            <Helmet>
                <title>Citygel</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header1 className="flex flex-col justify-center items-center w-full" />

            <div className='relative mt-[-12%] -z-10 '>
                <img src={vector20} className='relative' />
                <img src={image31} className='absolute top-[20%] ml-[50%] h-[60%] w-[40%]' />
                <img src={vector21} className='absolute -z-20 top-[-20%]' />

                <div className='absolute mt-[-40%] w-[25%] h-[15%] ml-[8%] font-publicsans     font-extrabold text-5xl'>
                    <p>Find Anything Around You</p>
                </div>

                <div className='absolute mt-[-30%] ml-[8%] h-[7%] w-[35%] font-poppins font-normal text-sm opacity-50'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                </div>

                <div className='space-y-2 ml-[8%] mt-[-25%] w-[40%] '>
                    <div className='flex flex-row h-[40%] w-[100%] space-x-2'>
                        <Categorycart image={properties} text="Properties" />
                        <Categorycart image={motor} text="Motor" />
                        <Categorycart image={electronics} text="Electronics" />
                        <Categorycart image={furniture} text="Furniture" />
                    </div>
                    <div className='flex flex-row h-[40%] w-[100%] space-x-2 '>
                        <Categorycart image={services} text="Services" />
                        <Categorycart image={jobs} text="Jobs" />
                        <Categorycart image={services} text="Category 7" />
                        <Categorycart image={services} text="Category 8" />
                    </div>
                </div>
            </div>

            <p className='font-poppins font-normal text-[200%] ml-[8%] mt-[5%]'>Browse By SubCategories:</p>
            <div className='ml-[8%] mt-[1%] w-[92%] flex flex-row place-content-evenly'>
                <BigCart image={properties} text="Properties" />
                <BigCart image={motor} text="Motor" />
                <BigCart image={electronics} text="Electronics" />
                <BigCart image={furniture} text="Furniture" />
            </div>

            <div className='ml-[8%] mt-[1%] grid grid-cols-4 place-content-evenly'>
                <SmallCart image={five} text="Apartment" />
                <SmallCart image={five} text="Cars" />
                <SmallCart image={five} text="TVs" />
                <SmallCart image={five} text="Sofa & Dining" />
                <SmallCart image={five} text="Flats" />
                <SmallCart image={five} text="Exports Cars" />
                <SmallCart image={five} text="Kitchen & Others" />
                <SmallCart image={five} text="Beds & Wardrobes" />
                <SmallCart image={five} text="Houses & Villas" />
                <SmallCart image={five} text="Motorcycles" />
                <SmallCart image={five} text="Computers & Lap..." />
                <SmallCart image={five} text="Home Decor & Ga..." />
                <Buttons />
                <Buttons />
                <Buttons />
                <Buttons />
            </div>

            <div className='ml-[8%] mt-[1%] w-[92%] flex flex-row place-content-evenly' >
                <BigCart image={services} text="Services" />
                <BigCart image={jobs} text="Jobs" />
                <BigCart image={services} text="Category 7" />
                <BigCart image={services} text="Category 8" />
            </div>

            <div className='ml-[8%] mt-[1%] grid grid-cols-4 place-content-evenly' >
                <SmallCart image={five} text="Electronics Repair" />
                <SmallCart image={five} text="Hospitality" />
                <SmallCart image={five} text="Sub Category 1" />
                <SmallCart image={five} text="Sub Category 1" />
                <SmallCart image={five} text="Health & Beauty" />
                <SmallCart image={five} text="Travel & Tourism" />
                <SmallCart image={five} text="Sub Category 2" />
                <SmallCart image={five} text="Sub Category 2" />
                <SmallCart image={five} text="Renovation & Re..." />
                <SmallCart image={five} text="Government" />
                <SmallCart image={five} text="Sub Category 3" />
                <SmallCart image={five} text="Sub Category 3" />
                <Buttons />
                <Buttons />
                <Buttons />
                <Buttons />
            </div>

            {/* How it works */}
            <div className='flex flex-col justify-center items-center mt-14'>
                <p className='font-publicsans font-extrabold text-6xl '>How it Works</p>
                <p className='font-poppins font-medium text-3xl py-5 '>Can help you make smart choice</p>
                <p className='opacity-50'>Lorem Ipsum is simply dummy text of the printing and typesetting
                    <br />industry. Lorem Ipsum has been the industry's standard dummy.</p>
            </div>

            <div className='w-[80%] flex place-content-evenly mt-16 ml-28'>
                <Cart4 h="Search for services" p="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <Cart4 h="Get your Deal" p="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <Cart4 h="Enjoy the service" p="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            </div>


            <div className='relative mt-16'>
                <img src={vector23} className='h-[70%] w-[70%] ml-[30%] ' />
                <div className='w-[42%] ml-[5%] absolute mt-[-15%]'>
                    <h1 className='font-publicsans font-semibold text-[210%] pb-4'>Lorem ipsum is simply dummy text</h1>
                    <p className='opacity-50 pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                    <Buttons />
                </div>
            </div>

            <Footer className="flex justify-center items-center w-full mt-[145px] p-[34px] bg-gray-100_01" />
        </div>
    )
}

export default CategoriesPage