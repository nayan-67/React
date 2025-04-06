import React from 'react'
import { useLocation } from 'react-router-dom'
import { cardinfo } from './Data/cardinf'
// import { currentData } from './blog'

export default function Cardetails() {

    let location = useLocation()
    let currentId = location.pathname.split('/')[2]
    let currentData = cardinfo[1].info.filter((v) => v.id == currentId)[0]
    // console.log(currentData)

    return (
        <>
            <div className='p-3'>
                <img src={currentData.image} alt="" className='w-full sm:w-[500px]' />
                <h1>{currentData.title}</h1>
                <p>{currentData.body}</p>
            </div>
        </>
    )
}
