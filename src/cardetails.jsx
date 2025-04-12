import React from 'react'
import { useLocation } from 'react-router-dom'
import { cardinfo } from './Data/cardinf'

export default function Cardetails() {

    let location = useLocation()
    let currentId = location.pathname.split('/')[2]
    let currentData = cardinfo[1].info.filter((v) => v.id == currentId)[0]


    return (
        <>
            <div className='p-3 flex lg:flex-row flex-col items-center lg:justify-between justify-evenly w-[90%] h-[calc(100vh-4rem)] mx-auto'>
                <div className='lg:w-[45%] w-full h-auto rounded-lg shadow-xl transition duration-[.5s] '>
                    <img src={currentData.image} alt="" className='rounded-lg hover:scale-100' />
                </div>
                <hr className='lg:h-full lg:w-0.5 h-0.5 bg-purple-500' />
                <div className='lg:w-[45%] w-full h-auto p-3 flex flex-col gap-10'>
                    <span className='w-auto lg:h-[150px] h-[100px]  mx-auto'>
                        <img src={currentData.logo} alt="" className='h-full'/>
                    </span>
                    <h1 className='text-center text-3xl font-bold'>{currentData.title}</h1>
                    <p className='text-lg'>{currentData.body}</p>
                </div>
            </div>
        </>
    )
}
