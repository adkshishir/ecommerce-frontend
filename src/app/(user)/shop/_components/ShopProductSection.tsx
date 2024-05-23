import ProductCard from '@/src/components/cards/ProductCard';
import Api from '@/src/constants/Api';
import Request from '@/src/helper/Request';
import { productType } from '@/src/types/types';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import Filter from './Filter';
import Pagination from './Pagination';

type searchParamsType = {
  category?: string;
  parentCategory?: string;
  maxPrice?: string;
  minPrice?: string;
  name?: string;
  sortBy?: string;
  currentPage?: number;
  pageSize?: number;
  color?: string;
  size?: string;
};
type productResponseType =
  | {
      success: false;
      data: [];
      message: string;
    }
  | {
      success: true;
      data: {
        products: productType[];
        totalProducts: number;
      };
    };

const ProductSection = async ({
  searchParams,
}: {
  searchParams: searchParamsType;
}) => {
  //  get string from searchParams for params
  const params = `?${Object.entries(searchParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`;
  let currentPage = 1;
  let pageSize = 10;
  let sortBy = 'newest';
  let category = '';
  let parentCategory = '';
  let maxPrice = '';
  let minPrice = '';
  let name = '';
  let color = '';
  let size = '';
  const productResponse: productResponseType = await Request.get(
    `${Api.SEARCH_PRODUCTS}${params}`
  );
  const products: productType[] =
    (productResponse?.success && productResponse?.data?.products) || [];
  console.log({ products });

  return (
    <div className='col-lg-9 col-md-8'>
      <div className='row pb-3'>
        <Filter />
        {products.length > 0 ? (
          products?.map((product) => (
            <ProductCard
              key={product.id}
              image={product.media[0]?.url || '/img/product-1.jpg'}
              name={product.name}
              markedPrice={product.markedPrice}
              discount={product.discount}
              stock={100}
              className='col-lg-4 col-md-6 col-sm-6 pb-1'
              alt={product.media[0]?.alt || `${product.name}`}
              slug={product.slug}
            />
          ))
        ) : (
          <div className='col-12 text-center h-100 d-flex align-items-center justify-content-center'>
            <h1>No Products Found</h1>
          </div>
        )}
        <div className='col-12'>
          <Pagination
            availableProducts={
              (productResponse?.success &&
                productResponse?.data?.totalProducts) ||
              0
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
