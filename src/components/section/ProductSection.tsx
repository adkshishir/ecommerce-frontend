'use client';
import React from 'react';
import ProductCard from '../cards/ProductCard';
import { MyContext } from '@/src/context/MyProvider';
import { productType } from '@/src/types/types';

const ProductSection = () => {
  const { homePageData } = React.useContext(MyContext);
  const [products, setProducts] = React.useState<productType[]>([]);

  React.useEffect(() => {
    homePageData?.success &&
      setProducts(homePageData.data.latestProducts || []);
  }, [homePageData]);

  return (
    <div className='container-fluid pt-5 pb-3'>
      <h2 className='section-title position-relative text-uppercase mx-xl-5 mb-4'>
        <span className='bg-secondary pr-3'>Recent Products</span>
      </h2>
      <div className='row px-xl-5'>
        {products?.map((product, index) => (
          <ProductCard
            key={index}
            image={Array.isArray(product?.media) ? product?.media[0]?.url : product?.media?.url}
            alt={Array.isArray(product?.media) ? product?.media[0]?.alt : product?.media?.alt}
            slug={product?.slug}
            name={product?.name}
            markedPrice={product?.markedPrice}
            discount={product?.discount}
            id={product?.id}
            stock={product?.totalStocks}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
