import Image from 'next/image';
import React from 'react';

type CategoryCardProps={
    categoryName:string
    productCount:number
    image:string
    href:string
}
export const CategoryCard = ({categoryName,productCount,image,href}:CategoryCardProps) => {
  return (
    <>
      <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
        <a className='text-decoration-none' href={href}>
          <div className='cat-item d-flex align-items-center mb-4'>
            <div
              className='overflow-hidden'
              style={{ width: 100, height: 100 }}>
              <Image
                height={100}
                width={100}
                className='img-fluid'
                src={image}
                alt='this is image'
              />
            </div>
            <div className='flex-fill pl-3'>
              <h6>{categoryName}</h6>
              <small className='text-body'>{productCount} Products</small>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
