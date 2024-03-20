import React from 'react';

export const Categorycart = (props) => {
    return (
        <div
            className='mq450:w-[157px] mq450:h-[100px]  mq800:w-[100px]  mq800:h-[125px] mq1050:w-[120px] mq1050:h-[140px] mq1500:w-[170px] mq1500:h-[200px] border-2 border-solid rounded-lg border-red-300 flex flex-col justify-center items-center'
        >
            <img src={props.image} className='mq800:w-[34px] mq800:h-[34px] mq1050:w-[54] mq1050:h-[54px] w-[74px] h-[74px]' />
            <p className='font-poppins font-normal mt-3'>{props.text}</p>
        </div>
    );
};





export const BigCart = (props) => {
    return (
        <div className='w-[280px] h-[230px] mq450:w-[160px] mq450:h-[94px] mq800:w-[180px] mq800:h-[140px] mq1050:w-[220px] mq1050:h-[190px] border-2 solid rounded-[20px] mq450:rounded-md border-slate-100 mq1500:shadow-md  flex flex-col justify-center items-center '>
            <img src={props.image} className='w-[74px] h-[74px] mq450:w-[26px] mq450:h-[26px]' />
            <p className='font-poppins font-normal text-[150%] mt-3'>{props.text}</p>
        </div>
    )
}




export const SmallCart = (props) => {
    return (
        <div className='w-[280px] h-[100px]  mq800:w-[180px] mq800:h-[60px] mq1050:w-[220px] border-2 solid rounded-md border-slate-100 flex  items-center mb-2 place-content-between px-2 mq1500:shadow-md'>
            <p>{props.text}</p>
            <img src={props.image} alt="" />
        </div>
    )
}

export const SmallCartMobile = (props) => {
    return (
        <div className='mq450:w-[160px] mq450:h-[45px] mq450:shadow-md border-2 solid rounded-md border-slate-100 flex  items-center ml-4 mq450:ml-0 mb-2 place-content-between px-2 mq450:px-0 justify-center '>
            <p>{props.text}</p>
        </div>
    )
}



export const Buttons = () => {
    return (
        <button
            className='w-[280px] h-[90px] mq450:w-[160px] mq450:h-[45px]  mq800:w-[180px] mq800:h-[60px] mq1050:w-[220px] mq1050:h-[80px] border-2
            rounded-md flex justify-center
            items-center text-white-A700 text-lg mq1500:border-0 mq450:rounded-md'
            style={{ backgroundImage: 'linear-gradient(to right, rgba(11, 144, 175, 1), rgba(32, 197, 242, 1))'}}>
            View All
        </button>
    )
}



export const Cart4 = (props) => {
    return(
        <div className='w-[25%] h-[25vh] mq450:w-[256px] mq450:h-[188px] mq1050:w-[230px] mq1050:h-[170px] mq1500:w-[280px] mq1500:h-[230px] border-2 border-solid rounded-lg border-red-300 flex flex-col justify-center items-center'>
            <h1 className='font-poppins font-medium text-[130%]'
             style={{ overflowWrap: 'break-word'}}>{props.h}</h1>
            <p className='font-poppins font-normal text-[90%] opacity-50 pt-5 pl-7'
            style={{ overflowWrap: 'break-word'}}>{props.p}</p>
        </div>
    )
}























