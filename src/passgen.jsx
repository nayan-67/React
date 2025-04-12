import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { lc, num, sc, uc } from './Data/passdata';
import bgimage from './assets/Image/8698755.jpg'

export default function Passgen() {

    let [ucase, setUcase] = useState(false);
    let [lcase, setLcase] = useState(false);
    let [number, setNumber] = useState(false);
    let [scase, setScase] = useState(false);
    let [plength, setPlength] = useState(6);
    let [fpass, setFpass] = useState('');

    let generate = () => {
        let charset = ''
        let password = ''
        if (ucase || lcase || scase || number) {
            if (ucase) charset += uc;
            if (lcase) charset += lc;
            if (scase) charset += sc;
            if (number) charset += num;
            for (let i = 0; i < plength; i++) {
                password += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            setFpass(password)
            toast.success('Password Generated', { autoClose: 2000 })
        } else {
            toast.error('Please select at least one option', { autoClose: 1500 })
        }
    }

    return (
        <>
            <ToastContainer className={'top-5'} />
            <div className='h-[calc(100vh-4rem)] bg-cover bg-center brightness-50' style={{ backgroundImage: `url(${bgimage})` }}>
            </div>
            <div className='h-auto w-[320px] backdrop-blur-xl text-white rounded-xl flex flex-col p-4 z-10 top-[55%] left-[50%] transform-[translate(-50%,-50%)] absolute shadow-[0_0px_35px_#61dafbaa]'>
                <h1 className='text-center text-xl font-bold'>Password Generator</h1>
                <div className='flex justify-between gap-2 my-3'>
                    <input type='text' className='w-full px-3 rounded-lg border-2 border-[#61dafb] outline-0' placeholder='' readOnly value={fpass} />
                    <button className='cursor-pointer bg-[#61dafb] rounded-lg py-2 px-2.5 text-black active:bg-[#61dafbd1]'>
                        <FontAwesomeIcon icon={faCopy} onClick={() => {
                            navigator.clipboard.writeText(fpass)
                            toast.success('Password Copied', { autoClose: 2000 })
                        }} />
                    </button>

                </div>
                <span className='flex items-center justify-between my-2'>
                    <label htmlFor="">Password Length</label>
                    <input type="number" name="" id="" className='w-[70px] px-3 rounded-lg border-2 border-[#61dafb] outline-0' placeholder='' min={6} max={15} value={plength} onChange={(e) => { setPlength(e.target.value) }} />
                </span>
                <span className='flex items-center justify-between my-2'>
                    <label htmlFor="Uppercase">Uppercase</label>
                    <input type="checkbox" name="" id="Uppercase" className='accent-[#61dafb]' checked={ucase} onChange={() => { setUcase(!ucase) }} />
                </span>
                <span className='flex items-center justify-between my-2'>
                    <label htmlFor="Lowercase">Lowercase</label>
                    <input type="checkbox" name="" id="Lowercase" className='accent-[#61dafb]' checked={lcase} onChange={() => { setLcase(!lcase) }} />
                </span>
                <span className='flex items-center justify-between my-2'>
                    <label htmlFor="Numbers">Numbers</label>
                    <input type="checkbox" name="" id="Numbers" className='accent-[#61dafb]' checked={number} onChange={() => { setNumber(!number) }} />
                </span>
                <span className='flex items-center justify-between my-2'>
                    <label htmlFor="Special">Special Character</label>
                    <input type="checkbox" name="" id="Special" className='accent-[#61dafb]' checked={scase} onChange={() => { setScase(!scase) }} />
                </span>
                <button className='w-full rounded-2xl bg-[#61dafb] text-black font-bold p-2 cursor-pointer my-2 transition duration-[.5s] hover:shadow-[0_0px_35px_#61dafbaa]' onClick={() => { generate() }}>Generate</button>
            </div>
        </>
    )
}
