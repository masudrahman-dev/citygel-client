import React from 'react';

export const Categorycart = (props) => {
    return (
        <div
            className='w-[200px] h-[150px] border-2 border-solid rounded-lg border-red-300 flex flex-col justify-center items-center'
        >
            <img src={props.image} className='w-[74px] h-[74px]' />
            <p className='font-poppins font-normal mt-3'>{props.text}</p>
        </div>
    );
};





export const BigCart = (props) => {
    return (
        <div className='w-[280px] h-[230px] border-2 solid rounded-[20px] border-slate-100 flex flex-col justify-center items-center '>
            <img src={props.image} className='w-[74px] h-[74px]' />
            <p className='font-poppins font-normal text-[150%] mt-3'>{props.text}</p>
        </div>
    )
}




export const SmallCart = (props) => {
    return (
        <div className='w-[280px] h-[100px] border-2 solid rounded-[20px] border-slate-100 flex  items-center ml-4 mb-2 place-content-between px-2'>
            <p>{props.text}</p>
            <img src={props.image} alt="" />
        </div>
    )
}



export const Buttons = () => {
    return (
        <button
            className='w-[280px] h-[90px] border-2 solid
            rounded-[20px] flex justify-center
            items-center ml-4 text-white-A700 text-lg'
            style={{ backgroundImage: 'linear-gradient(to right, rgba(11, 144, 175, 1), rgba(32, 197, 242, 1))'}}>
            View All
        </button>
    )
}



export const Cart4 = (props) => {
    return(
        // <div className='w-[20%] h-[30vh] 
        // border-2 border-solid
        // rounded-lg border-red-300'
        // style={{border:'2px solid',borderImage:'linear-gradient(to right, rgba(251, 251, 251, 1), rgba(249, 14, 58, 1)) 1'}}>
        //         you can try this
        // </div>

        <div className='w-[25%] h-[25vh] border-2 border-solid rounded-lg border-red-300 flex flex-col justify-center items-center'>
            <h1 className='font-poppins font-medium text-[130%]'
             style={{ overflowWrap: 'break-word'}}>{props.h}</h1>
            <p className='font-poppins font-normal text-[90%] opacity-50 pt-5 pl-7'
            style={{ overflowWrap: 'break-word'}}>{props.p}</p>
        </div>
    )
}























