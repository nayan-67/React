import React, { useState } from 'react'
import './body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { tabdata } from './Data/tabdata';
import Pageload from './pageload';

export default function Count() {
  let [count, setcount] = useState(1);
  const [load, setload] = useState(true);


  function Incr() {
    setcount(count + 1);
  }
  function Decr() {
    if (count > 0) {
      setcount(count - 1);
    }
  }


  setTimeout(() => {
    setload(false)
  }, 1000)

  return (
    <>
      {load ? <Pageload /> :
        <>
          <div className='@container mx-auto text-center my-3 bg-[#242424] p-3 w-[90%] rounded text-white font-mono'>
            <h1 className='text-lg'>{count}</h1>
            <div>
              <button onClick={Incr} className='bg-green-600 px-4 py-2 rounded m-2 cursor-pointer'>Increase</button>
              <button onClick={Decr} disabled={count === 0} className='bg-red-500 px-4 py-2 rounded m-2 cursor-pointer disabled:bg-red-300 disabled:cursor-not-allowed'>Decrease</button>
            </div>
          </div>
          <Showpass />
          <Tab />
        </>
      }

    </>

  )
}






function Showpass() {
  let [pshow, setpshow] = useState(false);

  return (
    <>
      <div className='@container mx-auto flex justify-center my-3 bg-gray-500 p-4 w-[90%] rounded'>
        <div className='flex justify-between bg-white max-w-sm w-full  py-2 rounded text-black px-5'>
          <input type={(pshow) ? 'text' : 'password'} name="password" id="" className='focus:outline-0' placeholder='Password' />
          <div onClick={() => { setpshow(!pshow) }}>
            {(pshow) ?
              <FontAwesomeIcon icon={faEye} className='text-2xl cursor-pointer' />
              :
              <FontAwesomeIcon icon={faEyeSlash} className='text-2xl cursor-pointer' />}
          </div>
        </div>
      </div>
    </>
  )
}


function Tab() {

  let [tabactive, setTabactive] = useState(0);
  let [content, tabcontent] = useState(tabdata[0]);

  const changetab = (index) => {
    setTabactive(index);
    tabcontent(tabdata[index]);
  }

  return (
    <>
      <div className="w-[90%] mx-auto">
        <ul className="flex space-x-4 text-gray-800 border-b-2 flex-wrap border-gray-200">

          {tabdata.map((item, index) => {
            return (
              <li key={index} className={`bg-gray-300 rounded text-sm font-semibold cursor-pointer p-4 mb-2 transition duration-[.5s] lg:grow-0 grow-1 ${tabactive == index ? 'activetab' : ''}`} onClick={() => { changetab(index) }}>{item.name}</li>
            )
          })}
        </ul>
        <p className='mx-auto mb-10 py-4 transition duration-[1s] ease-in-out text-justify'>{content.description}</p>
      </div>
    </>
  )
}