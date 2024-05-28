'use client';
import ProductCard from '@/src/components/cards/ProductCard';
import Api from '@/src/constants/Api';
import Request from '@/src/helper/Request';
import Image from 'next/image';
import React from 'react';

const Wishlists = () => {
  const [wishlists, setWishlists] = React.useState<any>([]);
  function handleRemove(id: any): void {
    throw new Error('Function not implemented.');
  }
  React.useEffect(() => {
    (async () => {
      let data = await Request.get(
        Api.WISHLIST_USER,
        localStorage.getItem('token') || ''
      );
      setWishlists(data.data);
    })();
  }, []);
  console.log(wishlists);
  return (
    <div className='container'>
      <div className='row d-flex  mb-5 postition-relative'>
        {wishlists.map((item: any) => {
          return (
            <ProductCard
              image={item?.product?.media[0]?.url}
              name={item?.product?.name}
              markedPrice={item?.product?.markedPrice}
              discount={item?.product?.discount}
              stock={item?.product?.totalStocks}
              id={item?.product?.id}
              className='col-lg-4 h-100'
              alt={item?.product?.media[0]?.alt}
              slug={item?.product?.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Wishlists;
