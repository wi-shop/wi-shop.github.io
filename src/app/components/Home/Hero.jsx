'use client'
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';

const Hero = () => {
    // Dynamic data for the slider
    const sliderItems = [
        "Revolutionize your workspace",
        "Boost productivity with AI",
        "Unlock creative solutions",
        "Tailored video production",
        "Stunning 3D designs",
        "Empower your digital presence",
        "Revolutionize your workspace",
        "Boost productivity with AI",
        "Unlock creative solutions",
        "Tailored video production",
        "Stunning 3D designs",
        "Empower your digital presence",
        "Revolutionize your workspace",
        "Boost productivity with AI",
        "Unlock creative solutions",
        "Tailored video production",
        "Stunning 3D designs",
        "Empower your digital presence",

    ];

    const settings = {
        infinite: true,
        slidesToShow: 8,
arrows:false,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        beforeChange: (currentSlide, nextSlide) => {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: (currentSlide) => {
            console.log("after change", currentSlide);
        }
    };

    return (
        <div className='p-20 pt-14'>
            <div className='flex'>
                <div className='flex-[7]'>
                    <p className='text-[100px] leading-[120px]'>
                        Revolutionize your <span className='decoration-red-800 rounded underline'>Workspace</span> with <span className='underline decoration-red-800'>Intelligence</span>
                    </p>
                    <div className='mt-16'>
                    <Link href="#contact" className=' text-xl p-6 text-white rounded-full bg-red-800 hover:bg-red-700'>
                        Get Started
                    </Link>
                    </div>
                </div>
                <div className="flex-[3] slider-container border border-red-800">
                    <Slider {...settings} >
                        {sliderItems.map((item, index) => (
                            <div key={index} className='hover:bg-red-800 hover:text-white p-4 border border-red-800'>
                                <h3 className='text-lg text-center'>{item}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Hero;
