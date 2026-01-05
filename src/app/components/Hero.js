import Image from 'next/image'
import React from 'react'
import ProfileImage from './../../../public/Image/image.png';

export default function Hero() {
    return (
        <div className='h-96 w-full relative'>
            <Image src={ProfileImage} alt="Description" className="w-full h-full object-cover bg-cover brightness-50" />
            <div className="absolute inset-0">
                <div className="">

                </div>
                <div className="flex items-center justify-center w-full pt-20 flex-col px-8 z-10">
                    <h1 className="font-bold text-2xl leading-relaxed text-white">
                        SABUMI FOUNDATION</h1>
                    <p className="text-center leading-relaxed font-medium text-xs text-white">
                        SABUMI FOUNDATION merupakan organisasi non-pemerintah (NGO) yang bergerak di bidang sosial kemanusiaan dan kepedulian lingkungan dengan prinsip keberlanjutan</p>
                </div>

                <div className="pt-8 w-full items-center justify-center mx-auto flex">
                    <button className="bg-white text-black font-semibold py-2 px-4 rounded">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}
