"use client"

import React, { useEffect, useRef } from 'react';

import cryptowallLogo from "@/public/img/logos/cryptowallLogo.png";
import globallogicLogo from "@/public/img/logos/globallogicLogo.png";
import img101realtorLogo from "@/public/img/logos/101realtorLogo.png";
import sikomobilityLogo from "@/public/img/logos/sikomobilityLogo.png";

const logos = [
    {
        src: cryptowallLogo.src,
        alt: ""
    },
    {
        src: globallogicLogo.src,
        alt: ""
    },
    {
        src: sikomobilityLogo.src,
        alt: ""
    },
    {
        src: img101realtorLogo.src,
        alt: ""
    },
]

const LogoCarousel= () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        carousel.style.animation = 'scrollInfinite 15s linear infinite';
    }, []);

    return (
        <>
            <div className="relative flex items-center justify-start w-1/3 mx-auto overflow-x-hidden">
                <div className="flex flex-row items-center transition-transform ease-linear duration-1000 p-1 gap-1 overflow-scroll" ref={carouselRef}>
                    <div className="flex flex-row items-center justify-between box-border gap-5">
                        { logos.map((logo, key) => (
                            <div key={ key } className="flex h-8">
                                <img className='opacity-50 h-full w-auto mx-6' src={ logo.src } alt={ logo.alt } />
                            </div>
                        )) }
                    </div>
                </div>

                <div className="absolute left-0 bg-gradient-to-r from-background to-transparent flex w-10 h-full"></div>
                <div className="absolute right-0 bg-gradient-to-l from-background to-transparent flex w-10 h-full"></div>
            </div>

            <div className="group w-10 mx-auto">
                <div className="flex w-[1px] h-10 group-hover:h-11 bg-white/10 mx-auto my-10 transition-all duration-500">
                    <div className="block w-full h-1/2 group-hover:h-full bg-white transition-all duration-500 delay-250"></div>
                </div>
            </div>
        </>
    );
}

export default LogoCarousel