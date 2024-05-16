'use client';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
const Vendor = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className='slider-container container'>
      <Slider {...settings} className='gap-2'>
        <div className='d-flex ' >
          <Image
          
            height={100}
            className='w-75 mx-auto h-75'
            style={{objectFit: 'cover'}}
            
            width={100}
            src='/img/vendor-2.jpg'
            alt='this is image'
          />
        </div>
        <div>
          <Image
          className={'w-75 mx-auto h-75'}
          
            height={100}
            width={100}
            src='/img/vendor-1.jpg'
            alt='this is image'
          />
        </div>
        <div>
          <Image
          className={'w-75 mx-auto h-75'}
          
            height={100}
            width={100}
            src='/img/vendor-1.jpg'
            alt='this is image'
          />
        </div>
        <div>
          <Image
          className={'w-75 mx-auto h-75'}
          
            height={100}
            width={100}
            src='/img/vendor-1.jpg'
            alt='this is image'
          />
        </div>
        <div>
          <Image
          className={'w-75 mx-auto h-75'}
          
            height={100}
            width={100}
            src='/img/vendor-1.jpg'
            alt='this is image'
          />
        </div>
        <div>
          <Image
          className={'w-75 mx-auto h-75'}
          
            height={100}
            width={100}
            src='/img/vendor-1.jpg'
            alt='this is image'
          />
        </div>
        <div>
          <Image
          className={'w-75 mx-auto h-75'}
          
            height={100}
            width={100}
            src='/img/vendor-1.jpg'
            alt='this is image'
          />
        </div>
        <div>
          <Image
          className={'w-75 mx-auto h-75'}
          
            height={100}
            width={100}
            src='/img/vendor-1.jpg'
            alt='this is image'
          />
        </div>
        <div>
          <Image
          className={'w-75 mx-auto h-75'}
          
            height={100}
            width={100}
            src='/img/vendor-1.jpg'
            alt='this is image'
          />
        </div>
      </Slider>
    </div>
  );
};

export default Vendor;
