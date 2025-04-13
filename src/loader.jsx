import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Sloader({hide}) {
    return (
    <div className={`w-full h-60 top-[35%] flex justify-center items-center absolute ${hide}`}>
            <DotLottieReact
                src="https://lottie.host/fb8f585c-7dff-4b5d-b92a-014fd7a13267/H9TRBwMsHv.lottie"
                loop
                autoplay className='h-[80px]'
            />
        </div>
    );
};

export function Boxloader() {
    return (
    <div className='fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center'>
            <DotLottieReact
                src="https://lottie.host/ef8f7939-b3a2-4915-b24d-9955eb820808/DRTgmHsL9w.lottie"
                loop
                autoplay className='h-[180px] lg:h-[300px]'
            />
        </div>
    );
}
