import ProductCard from '@/src/components/cards/ProductCard';
import Api from '@/src/constants/Api';
import Request from '@/src/helper/Request';
import { categoryType, parentCategoryType } from '@/src/types/types';
import {
  useRouter,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';
import React from 'react';

const ProductSection = async ({
  searchParams: { category },
}: {
  searchParams: { category: string };
}) => {
  const parentCategoriesData = await Request.get(Api.PARENT_CATEGORIES);
  const parentCategories = (await parentCategoriesData.success)
    ? parentCategoriesData.data
    : [];
  console.log(await parentCategories[0]);
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
                  <a className='dropdown-item' href='#'>
                    Latest
                  </a>
                  <a className='dropdown-item' href='#'>
                    Popularity
                  </a>
                  <a className='dropdown-item' href='#'>
                    Best Rating
                  </a>
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
                  <a className='dropdown-item' href='#'>
                    10
                  </a>
                  <a className='dropdown-item' href='#'>
                    20
                  </a>
                  <a className='dropdown-item' href='#'>
                    30
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {parentCategories.map((category: categoryType | parentCategoryType) => (
          <ProductCard
            image={category.media.url||'/img/product-1.jpg'}
            name={category.name}
            price={100}
            stock={100}
            className='col-lg-4 col-md-6 col-sm-6 pb-1'
            alt={category.media.alt}
          />
        ))}

        {/* <ProductCard
          image='/img/product-1.jpg'
          name='Product Name Goes Here'
          price={100}
          stock={100}
          className='col-lg-4 col-md-6 col-sm-6 pb-1'
          alt={''}
        />
        <ProductCard
          image='/img/product-2.jpg'
          name='Product Name Goes Here'
          price={100}
          stock={100}
          className='col-lg-4 col-md-6 col-sm-6 pb-1'
          alt={'this is the photo'}
        />
        <ProductCard
          image='/img/product-3.jpg'
          name='Product Name Goes Here'
          price={100}
          stock={100}
          className='col-lg-4 col-md-6 col-sm-6 pb-1'
          alt={'this is the photo'}
        />
        <ProductCard
          image='/img/product-4.jpg'
          name='Product Name Goes Here'
          price={100}
          stock={100}
          className='col-lg-4 col-md-6 col-sm-6 pb-1'
          alt={'this is the photo'}
        />
        <ProductCard
          image='/img/product-5.jpg'
          name='Product Name Goes Here'
          price={100}
          stock={100}
          className='col-lg-4 col-md-6 col-sm-6 pb-1'
          alt={'this is the photo'}
        />
        <ProductCard
          image='/img/product-6.jpg'
          name='Product Name Goes Here'
          price={100}
          stock={100}
          className='col-lg-4 col-md-6 col-sm-6 pb-1'
          alt={'this is the photo'}
        />
        <ProductCard
          image='/img/product-7.jpg'
          name='Product Name Goes Here'
          price={100}
          stock={100}
          className='col-lg-4 col-md-6 col-sm-6 pb-1'
          alt={'this is the photo'}
        />
        <ProductCard
          image='/img/product-8.jpg'
          name='Product Name Goes Here'
          price={100}
          stock={100}
          className='col-lg-4 col-md-6 col-sm-6 pb-1'
          alt={'this is the photo'}
        />
        <ProductCard
          image='/img/product-9.jpg'
          name='Product Name Goes Here'
          price={100}
          stock={100}
          className='col-lg-4 col-md-6 col-sm-6 pb-1'
          alt={'this is the photo'}
        /> */}
        <div className='col-12'>
          <nav>
            <ul className='pagination justify-content-center'>
              <li className='page-item disabled'>
                <a className='page-link' href='#'>
                  Previous
                </a>
              </li>
              <li className='page-item active'>
                <a className='page-link' href='#'>
                  1
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  2
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  3
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
