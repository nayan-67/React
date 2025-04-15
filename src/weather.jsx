import React, { useState } from 'react'
import w_img from './assets/Image/thumb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faMagnifyingGlass, faWind } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import Sloader, { Boxloader } from './loader'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Weather() {
    let head = document.querySelector('#title')
    head.innerHTML = 'Weather Report'

    let [city, setCity] = useState('')
    let [wdata, setWdata] = useState()
    let [loading, setLoading] = useState(true)
    let [wloading, setWloading] = useState(false)

    const icons = {
        '01d': 'https://lottie.host/c123feef-96e8-4c96-957e-3696f32e96bd/UH5VBgsjXB.lottie',
        '01n': 'https://lottie.host/42db8fdc-5fcf-40de-87d0-02cbdde32dbb/g9EDVuIoiD.lottie',
        '02d': 'https://lottie.host/4537b108-dd86-4008-a436-f89987f05aa6/UkKUsNyk9W.lottie',
        '02n': 'https://lottie.host/d0dd4fab-d36a-4bf0-96d7-b179abed89c7/5Mi3zxg0I2.lottie',
        '03d': 'https://lottie.host/70dcd12f-925e-4636-b37b-6361f17dc4fa/VXgvzo2Wil.lottie',
        '03n': 'https://lottie.host/70dcd12f-925e-4636-b37b-6361f17dc4fa/VXgvzo2Wil.lottie',
        '04d': 'https://lottie.host/f21d9c5a-8401-4cf0-ad80-c0209b76cbd9/4B5tJYoCMK.lottie',
        '04n': 'https://lottie.host/f21d9c5a-8401-4cf0-ad80-c0209b76cbd9/4B5tJYoCMK.lottie',
        '09d': 'https://lottie.host/d0a80d12-5daa-4101-82c7-4e863f7444a4/KYBvl2P4sj.lottie',
        '09n': 'https://lottie.host/d0a80d12-5daa-4101-82c7-4e863f7444a4/KYBvl2P4sj.lottie',
        '10d': 'https://lottie.host/98176e29-fa52-4f05-adb4-3e98538a5b4f/vM5VSCdbmx.lottie',
        '10n': 'https://lottie.host/9452d44d-73ac-4abf-bfe4-dbe9c5244af2/xLWsWNCvnn.lottie',
        '11d': 'https://lottie.host/9fd2d7b0-8e95-455d-943f-12051ae54966/vvNEWrV92g.lottie',
        '11n': 'https://lottie.host/9fd2d7b0-8e95-455d-943f-12051ae54966/vvNEWrV92g.lottie',
        '13d': 'https://lottie.host/967b6e53-01ec-454f-a6ed-c902b52dc671/sDKTJ1TH2m.lottie',
        '13n': 'https://lottie.host/967b6e53-01ec-454f-a6ed-c902b52dc671/sDKTJ1TH2m.lottie'
    }

    const weathericon = (code) => icons[code]

    let getData = async (e) => {
        setWloading(true)
        e.preventDefault()
        setCity('')
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
        let data = await res.json()
        if (data.cod == '400') {
            toast.error('Please Enter City Name')
            setWdata(undefined)
        } else if (data.cod == '404') {
            toast.error(data.message)
            toast.error('Please Enter Valid City Name')
            setWdata(undefined)
        } else {
            setWdata(data)
        }

        setWloading(false)

    }

    setTimeout(() => {
        setLoading(false)
    }, 2000);

    return (
        <>
            {loading ? <Boxloader /> :
                <>
                    <ToastContainer />

                    <div className='h-[calc(100vh-4rem)] bg-cover bg-center' style={{ backgroundImage: `URL(${w_img})` }}></div>
                    <div className='bg-[#b9e4febf] lg:w-[600px] w-[90%] lg:h-[600px] h-[500px] rounded-2xl flex flex-col justify-start items-center absolute top-[55%] left-[50%] transform-[translate(-50%,-50%)] backdrop-blur-xl shadow-[0_0px_35px_#61dafbaa] lg:p-10 p-5 lg:gap-2'>
                        <h1 className='text-3xl font-bold mb-3'>Weather Report</h1>
                        <form className='h-auto w-full flex justify-between items-center mb-5 gap-2' onSubmit={getData}>
                            <input type="search" placeholder='Enter City Name' value={city} className='w-full h-full rounded-lg p-2 border-2 border-[#242424] focus:outline-0' onChange={(e) => { setCity(e.target.value) }} />
                            <button className='bg-[#242424] text-[#fff] w-auto h-full rounded-lg p-3 cursor-pointer flex justify-center items-center'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl' />
                            </button>
                        </form>
                        <Sloader hide={wloading ? '' : 'hidden'} />
                        {wdata !== undefined ?
                            <>

                                <h1 className='text-3xl font-bold'>{wdata.name} {wdata.sys.country}</h1>
                                <div className='w-full flex flex-col justify-center items-center lg:gap-3 border-b-2 border-[#242424] pb-5'>
                                    <span className='h-[60px] lg:h-auto flex justify-center items-center m-5 lg:m-2'>
                                        {wdata.weather[0].icon === ('50d'||'50n') ?
                                            <img src={`https://openweathermap.org/img/wn/${wdata.weather[0].icon}@2x.png`} alt="Weather Icon" className='drop-shadow-[0_0px_35px_#1c2026]' />
                                            :
                                            <DotLottieReact src={weathericon(wdata.weather[0].icon)} className='drop-shadow-[0_0px_35px_#1c2026] h-[100px]' loop autoplay />
                                        }
                                    </span>
                                    <h1 className='text-3xl font-bold'>{wdata.main.temp}°C</h1>
                                    <h1 className='text-lg font-bold'>{wdata.weather[0].description}</h1>
                                </div>
                                <div className='w-full'>
                                    <span className='font-bold'>Feels Like</span>
                                    <h1 className='text-3xl font-bold'>{wdata.main.feels_like}°C</h1>
                                    <div className='w-full lg:flex justify-between items-center lg:py-5 py-3 lg:gap-10'>
                                        <span className='w-full sm:w-[50%] flex justify-between items-center pb-1'>
                                            <h1 className='text-xl font-bold'><FontAwesomeIcon icon={faDroplet} /> Humidity</h1>
                                            <h1 className='text-xl font-bold'>{wdata.main.humidity}%</h1>
                                        </span>
                                        <hr className='w-0.5 h-[50px] bg-[#242424] hidden lg:block' />
                                        <span className='w-full sm:w-[50%] flex justify-between items-center'>
                                            <h1 className='text-xl font-bold'><FontAwesomeIcon icon={faWind} /> Wind</h1>
                                            <h1 className='text-xl font-bold'>{(wdata.wind.speed * 3.6).toFixed(1)} km/h</h1>
                                        </span>
                                    </div>
                                </div>
                            </>
                            : <h1 className='text-2xl font-bold'>{wloading ? 'Fetching...' : 'No Data'}</h1>
                        }
                    </div>
                </>
            }
        </>
    )
}


