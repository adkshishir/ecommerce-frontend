import ProductCard from '@/src/components/cards/ProductCard';
import Api from '@/src/constants/Api';
import Request from '@/src/helper/Request';
import { productType } from '@/src/types/types';
import Link from 'next/link';
import React from 'react';
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
      };
      message: string;
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

  function handleFilterByPageSize(
    arg0: number
  ): React.MouseEventHandler<HTMLButtonElement> | undefined {
    return () => {
      pageSize = arg0;
    };
  }

  function handleByCurrentPage(
    p0: number
  ): React.MouseEventHandler<HTMLButtonElement> | undefined {
    return () => {
      currentPage = p0;
     }
  }

  return (
    <div className='col-lg-9 col-md-8'>
      <div className='row pb-3'>
        <div className='col-12 pb-1'>
          <div className='d-flex align-items-center justify-content-between mb-4'>
            <div>
              <button className='btn btn-sm btn-light'>
                <i className='fa fa-th-large' />
              </button>
              <button className='btn btn-sm btn-light ml-2'>
                <i className='fa fa-bars' />
              </button>
            </div>
            <div className='ml-2'>
              <div className='btn-group'>
                <button
                  type='button'
                  className='btn btn-sm btn-light dropdown-toggle'
                  data-toggle='dropdown'>
                  Sorting
                </button>
                <div className='dropdown-menu dropdown-menu-right'>
                  <Link className='dropdown-item' href='#'>
                    Latest
                  </Link>
                  <Link className='dropdown-item' href='#'>
                    Popularity
                  </Link>
                  <Link className='dropdown-item' href='#'>
                    Best Rating
                  </Link>
                </div>
              </div>
              <div className='btn-group ml-2'>
                <button
                  type='button'
                  className='btn btn-sm btn-light dropdown-toggle'
                  data-toggle='dropdown'>
                  Showing
                </button>
                <div className='dropdown-menu dropdown-menu-right'>
                  <button
                    className='dropdown-item'
                    onClick={handleFilterByPageSize(10)}>
                    10
                  </button>
                  <button
                    className='dropdown-item'
                    onClick={handleFilterByPageSize(20)}>
                    20
                  </button>
                  <button
                    className='dropdown-item'
                    onClick={handleFilterByPageSize(30)}>
                    30
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            />
          ))
        ) : (
          <div className='col-12 text-center h-100 d-flex align-items-center justify-content-center'>
            <h1>No Products Found</h1>
          </div>
        )}
        <div className='col-12'>
          <nav>
            <ul className='pagination justify-content-center'>
              <li className='page-item disabled'>
                <button className='page-link' onClick={handleByCurrentPage(1)}>
                  Previous
                </button>
              </li>
              <li className='page-item active'>
                <button
                  className='page-link'
                  onClick={handleByCurrentPage(currentPage)}>
                  {currentPage - 1}
                </button>
              </li>
              <li className='page-item'>
                <button
                  className='page-link'
                  onClick={handleByCurrentPage(currentPage)}>
                  {currentPage}
                </button>
              </li>
              <li className='page-item'>
                <button
                  className='page-link'
                  onClick={handleByCurrentPage(currentPage)}>
                  {currentPage + 1}
                </button>
              </li>
              <li className='page-item'>
                <button
                  className='page-link'
                  onClick={handleByCurrentPage(currentPage)}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
