'use client';
import React, { useContext } from 'react';
import ProductCard from '../cards/ProductCard';
import { MyContext } from '@/src/context/MyProvider';

const FeatureSection = () => {
  const { homePageData } = useContext(MyContext);
  return (
    <div className='container-fluid pt-5 pb-3'>
      <h2 className='section-title position-relative text-uppercase mx-xl-5 mb-4'>
        <span className='bg-secondary pr-3'>Top Sells</span>
      </h2>
      <div className='row px-xl-5'>
        {homePageData?.success &&
          homePageData.data.popularProducts?.map((product, index) => (
            <ProductCard
              key={index}
              image={Array.isArray(product?.media) ? product?.media[0]?.url : product?.media?.url}
              alt={Array.isArray(product?.media) ? product?.media[0]?.alt : product?.media?.alt}
              id={product.id}
              slug={product.slug}
              name={product.name}
              markedPrice={product.markedPrice}
              discount={product.discount}
              stock={product.totalStocks}
            />
          ))}
      </div>
    </div>
  );
};

export default FeatureSection;
