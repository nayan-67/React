import React, { useState } from 'react'
import './body.css'
// import 'react-notifications/lib/notifications.css';
import { cardinfo } from './Data/cardinf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faqData } from './Data/faqdata';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import reactlogo from './assets/react.svg';
// import { NotificationContainer } from 'react-notifications';

export default function Count() {
  let [count, setcount] = useState(1);

  function Incr() {
    setcount(count + 1);
  }
  function Decr() {
    if (count > 0) {
      setcount(count - 1);
    }
  }


  return (
    <>
      <div className='@container mx-auto text-center my-3 bg-[#242424] p-3 w-[90%] rounded text-white'>
        <h1 className='text-lg'>{count}</h1>
        <div>
          <button onClick={Incr} className='bg-green-600 px-4 py-2 rounded m-2 cursor-pointer'>Increase</button>
          <button onClick={Decr} disabled={count === 0} className='bg-red-500 px-4 py-2 rounded m-2 cursor-pointer disabled:bg-red-300 disabled:cursor-not-allowed'>Decrease</button>
        </div>
      </div>
      <div className='w-[90%] mx-auto rounded my-3'>
        <h1 className='text-[2rem] text-center font-bold w-full bg-violet-500 text-white rounded p-3'>Card Component</h1>
        <div className='flex justify-center flex-wrap'>

          {cardinfo.map((card, i) => {
            return (
              <Card citem={card} key={i} />
            )
          })}

        </div>
      </div>
      <Showpass />
      <Faq />
    </>

  )
}



function Card({ citem }) {
  return (
    <div className='h-auto w-[18rem] mx-auto my-3  p-2 border-2 border-gray-200 rounded-lg flex flex-col items-center justify-start shadow-xl'>
      <div className='w-full h-[150px] p-3 text-center border-b-2 border-gray-200 flex items-center justify-center'>
        <img src={citem.image} alt="item" className='h-[100%] w-auto' />
      </div>
      <div className='text-center p-5 w-full '>
        <h1 className='font-bold pb-2'>{citem.title}</h1>
        <p className='text-center'>{citem.body}</p>
        <button type="button" className='bg-green-600 px-5 py-2 rounded mx-2 mt-3 cursor-pointer text-white hover:bg-green-700 transition delay-100 duration-200 ease-in-out'>Check Out</button>
      </div>
    </div>
  )
}


function Showpass() {
  let [pshow, setpshow] = useState(false);

  return (
    <>
      {/* <NotificationContainer /> */}
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

function Faq() {
  let [showans, setshowans] = useState(null);

  const toggleAnswer = (id) => {
    setshowans(prevId => prevId === id ? null : id);
  };

  return (
    <div>
      <div className="p-4 w-[90%] mx-auto my-3 lg:flex justify-between bg-[#161b23] text-gray-200 rounded-lg">
        <div className="space-y-4 lg:w-[60%] ">
          <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          {faqData.map((item, index) => {
            return (
              <div key={index} className="border rounded-md shadow">
                <div className='flex justify-between py-2 px-5 border-b-1 border-gray-500 cursor-pointer' onClick={() => { toggleAnswer(item.id) }}>
                  <h3 className="font-semibold text-lg">{item.question}</h3>
                  <div>
                    {(showans === item.id) ?
                      <FontAwesomeIcon icon={faAngleUp} className='text-2xl cursor-pointer' />
                      :
                      <FontAwesomeIcon icon={faAngleDown} className='text-2xl cursor-pointer' />}
                  </div>
                </div>

                <p className={`text-gray-300 p-0 h-0 transform-[scaleY(0)] transition-[.5s] ${showans === item.id ? 'activeans' : ''}`} >{item.answer}</p>
              </div>
            )
          })}
        </div>
        <div className='flex justify-center lg:w-[30%] mx-auto align-middle p-10'>
          <img src={reactlogo} alt="logo" className='r-logo w-full h-auto' />
        </div>
      </div>
    </div>
  )
}