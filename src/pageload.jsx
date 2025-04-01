import React from 'react'
import { HashLoader } from 'react-spinners'

export default function Pageload() {

    
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#0e0e0edf] flex justify-center items-center'>
        <HashLoader color="#61dafb" size={80} className='drop-shadow-[0_0px_35px_#61dafbaa]'/>
    </div>
  )
}
