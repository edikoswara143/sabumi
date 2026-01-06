import Image from 'next/image'
import React from 'react'
import ProfileImage from './../../../public/Image/image.png';
import MasjidImage from './../../../public/Image/masjid.png';
import AnakYatimImage from './../../../public/Image/anakyatim.png';
import AirImage from './../../../public/Image/airbersih.png';

export default function Hero() {

    const donationList = [
        {
            id: 1,
            title: "Pembangunan Masjid",
            description: "Membantu pembangunan dan renovasi masjid untuk kenyamanan ibadah warga.",
            image: MasjidImage
        },
        {
            id: 2,
            title: "Santunan Anak Yatim",
            description: "Program berbagi untuk anak yatim dan dhuafa agar tetap bisa sekolah.",
            image: AnakYatimImage
        },
        {
            id: 3,
            title: "Pengadaan Air Bersih",
            description: "Penyediaan sumur dan sarana air bersih bagi warga yang membutuhkan.",
            image: AirImage
        },
        // {
        //     id: 4,
        //     title: "Bantuan Pendidikan",
        //     description: "Donasi untuk perlengkapan sekolah dan beasiswa siswa kurang mampu."
        // },
        // {
        //     id: 5,
        //     title: "Bantuan Kesehatan Warga",
        //     description: "Membantu biaya pengobatan dan kebutuhan kesehatan masyarakat."
        // }
    ];

    return (
        <div className='h-96 w-full relative flex items-center justify-center mx-auto'>
            <Image src={ProfileImage} alt="Description" className="w-full h-full object-cover bg-cover brightness-75" loading="eager" />
            <div className="absolute items-center justify-center ">
                <div className="flex items-center justify-center w-full flex-col px-8 z-10">
                    <h1 className="font-bold text-2xl leading-relaxed text-white">
                        SABUMI FOUNDATION</h1>
                    <p className="text-center leading-relaxed font-medium text-xs text-white">
                        SABUMI FOUNDATION merupakan organisasi non-pemerintah (NGO) yang bergerak di bidang sosial kemanusiaan dan kepedulian lingkungan dengan prinsip keberlanjutan</p>
                </div>

                <div className="pt-8 w-full items-center justify-center mx-auto flex">
                    <button className="bg-amber-700 text-sky-100 font-medium py-2 px-4 rounded">
                        Bergabung bersama kami
                    </button>
                </div>

                <div className="pt-8 w-full items-center justify-center mx-auto flex">
                    <div className="flex flex-row gap-4">
                        {donationList.map((item) => (
                            <div
                                key={item.id}
                                className="h-32 w-24 bg-slate-400 rounded relative overflow-hidden"
                            >
                                <Image src={item.image} alt="Description" className="w-full h-full object-cover bg-cover brightness-50" loading="eager" />
                                <div className="absolute flex bottom-0 p-2">
                                    <h4 className="text-white font-light text-xs">{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
