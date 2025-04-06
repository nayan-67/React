import React, { useState } from 'react'
import { faqData } from './Data/faqdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import reactlogo from './assets/react.svg';


export default function Faq() {
  let [showans, setshowans] = useState(null);

  const toggleAnswer = (id) => {
    setshowans(prevId => prevId === id ? null : id);
  };

  return (
    <div>
      <div className="p-4 w-[90%] mx-auto my-3 lg:flex justify-between bg-[#161b23] text-gray-200 rounded-lg">
        <div className="space-y-4 lg:w-[60%] ">
          <h2 className="text-2xl font-bold mb-4 text-center font-mono">Frequently Asked Questions</h2>
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
