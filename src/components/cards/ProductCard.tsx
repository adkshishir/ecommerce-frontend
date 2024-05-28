'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Request from '@/src/helper/Request';
import Api from '@/src/constants/Api';
import toast from 'react-hot-toast';
import Button from '../Button';
import { MyContext } from '@/src/context/MyProvider';
type ProductCardProps = {
  image: string;
  name: string;
  markedPrice: number;
  discount: number;
  stock: number;
  className?: string;
  alt: string;
  slug: string;
  id: number;
};
const ProductCard = ({
  image,
  name,
  markedPrice,
  stock,
  className,
  alt,
  discount,
  slug,
  id,
}: ProductCardProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setProfile } = useContext(MyContext);
  async function handleCartStore() {
    try {
      await Request.post(
        Api.CART,
        {
          productId: id,
          quantity: 1,
        },
        localStorage.getItem('token') || ''
      );
      let profile = await Request.get(
        Api.AUTH_PROFILE,
        localStorage.getItem('token') || ''
      );
      setProfile(profile?.data);
      toast.success('Product added successfully');
      // getCart();
    } catch (error) {
      toast.error('Error while adding product');
    }
  }
  function handleWishList() {}
  function handleRefresh() {}
  function handleSearch() {
    const params = new URLSearchParams(searchParams.toString());
    params.set('name', name);
    router.push(`?${params.toString()}`);
  }

  return (
    <div className={`w-full col-lg-3 col-md-6 col-sm-12 ${className}`}>
      <div className='product-item bg-light mb-4'>
        <div className='product-img position-relative overflow-hidden'>
          <Image
            height={100}
            width={100}
            className='img-fluid w-100 product-image'
            src={image || '/img/product-1.jpg'}
            alt={alt}
          />
          <div className='product-action'>
            <Button
              onClick={handleCartStore}
              className='btn btn-outline-dark btn-square'>
              <i className='fa fa-shopping-cart' />
            </Button>
            <Button
              onClick={handleWishList}
              className='btn btn-outline-dark btn-square'>
              <i className='fa fa-heart' />
            </Button>

            <Button
              onClick={handleSearch}
              className='btn btn-outline-dark btn-square'>
              <i className='fa fa-search' />
            </Button>
          </div>
        </div>
        <div className='text-center py-4'>
          <a
            className='h6 text-decoration-none text-truncate'
            href={`details?slug=${slug}`}>
            {name}
          </a>
          <div className='d-flex align-items-center justify-content-center mt-2'>
            <h5>{markedPrice - discount}</h5>
            <h6 className='text-muted ml-2'>
              <del>Rs{markedPrice}</del>
            </h6>
          </div>
          <div className='d-flex align-items-center justify-content-center mb-1'>
            <small className='fa fa-star text-primary mr-1' />
            <small className='fa fa-star text-primary mr-1' />
            <small className='fa fa-star text-primary mr-1' />
            <small className='fa fa-star text-primary mr-1' />
            <small className='fa fa-star text-primary mr-1' />
            <small>({stock})</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
