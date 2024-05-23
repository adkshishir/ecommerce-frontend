'use client'
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import ProductCard from '../cards/ProductCard';

const ProductCarousel = () => {
    const settings = {
        // dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, 
        // autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div className='slider-container container h-100'>
      <Slider {...settings} className='gap-2'>
          <div className='container-fluid w-100 h-100' >
            <div className='w-100 bg-white h-100' style={{padding: '10px',height:"300px"}}> shsihir</div>
            {/* <ProductCard name='Product Name' image='/img/product-1.jpg' price={100} stock={100} className='w-100 h-100 '/> */}

          </div>
            < ProductCard alt=''  name='Product Name' image='/img/product-1.jpg' price={100} stock={100} className='w-100 h-100'/>
            < ProductCard alt=''  name='Product Name' image='/img/product-1.jpg' price={100} stock={100} className='w-100 h-100'/>
            < ProductCard alt=''  name='Product Name' image='/img/product-1.jpg' price={100} stock={100} className='w-100 h-100'/>
            < ProductCard alt=''  name='Product Name' image='/img/product-1.jpg' price={100} stock={100} className='w-100 h-100'/>   
       
        {/* <div>
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
        </div> */}
      </Slider>
    </div>
  )
}

export default ProductCarousel