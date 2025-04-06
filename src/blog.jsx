import React, { useState } from 'react'
import { cardinfo } from './Data/cardinf';
import Pageload from './pageload';
import { Link } from 'react-router-dom';

export default function Blog() {

    const [load, setLoad] = useState(true)
    let [activetab, setActivetab] = useState(0);
    let [content, tabcontent] = useState(cardinfo[0]);

    function tabchange(i) {
        setActivetab(i);
        tabcontent(cardinfo[i])
    }

    setTimeout(() => {
        setLoad(false)
    }, 500)

    return (
        <>
            {load ? <Pageload /> : null}
            {!load ?
                <div className='w-[90%] mx-auto rounded my-3'>
                    <h1 className='lg:text-[2rem] text-2xl text-center font-bold w-full bg-violet-500 text-white rounded p-3 font-["Ubuntu"]'>Card Component</h1>
                    <div className='w-full mx-auto my-2'>
                        <ul className='flex space-x-4 text-gray-800 border-b-2 flex-wrap border-gray-200'>
                            {cardinfo.map((v, i) => {
                                return (
                                    <li key={i} className={` rounded text-sm font-semibold cursor-pointer p-4 mb-2 transition duration-[.5s] ${activetab == i ? 'bg-purple-600 text-white' : 'bg-gray-300'}`} onClick={() => { tabchange(i) }}>{v.name}</li>

                                )
                            })}
                        </ul>
                    </div>
                    <div className='flex justify-start flex-wrap gap-5'>
                        {
                            content.info.map((item, i) => {
                                return (
                                    <Card key={i} citem={item} />
                                )
                            })
                        }

                    </div>
                </div>
                : null}
        </>
    )
}


function Card({ citem }) {
    return (
        <div className='h-auto w-[18rem] my-3 mx-auto p-2 border-2 border-gray-200 rounded-lg flex flex-col items-center shadow-xl '>
            <div className='w-full h-[190px] p-3 text-center border-b-2 border-gray-200 flex items-center justify-center'>
                <div className='h-full flex items-center justify-center rounded contain-content'>
                    <img src={citem.image} alt="item" className='h-full hover:scale-110 transition duration-[.5s] cursor-cell m-1' />
                </div>
            </div>
            <div className='text-center p-5 w-full font-["Ubuntu"]'>
                <h1 className='font-bold pb-2'>{citem.title}</h1>
                {/* <p className='text-center'>{citem.body}</p> */}
                <button type="button" className='bg-green-600 px-5 py-2 rounded mx-2 mt-4 cursor-pointer text-white hover:bg-green-700 transition delay-100 duration-200 ease-in-out font-bold'><Link to={`/blog/${citem.id}`}>Know More...</Link></button>
            </div>
        </div>
    )
}
