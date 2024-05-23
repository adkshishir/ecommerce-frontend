'use client';

import React from 'react';
import Button from './Button';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pageSize, setPageSize] = React.useState(10);
  function handleFilterByPageSize(arg0: number) {
    setPageSize(arg0);
    const params = new URLSearchParams(searchParams.toString());
    params.set('pageSize', arg0.toString());
    router.push(`?${params.toString()}`);
  }

  return (
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
              <Button
                children='10'
                value={10}
                onClick={() => {
                  handleFilterByPageSize(10);
                }}
                className='dropdown-item'
              />
              <Button
                children='20'
                value={20}
                onClick={() => {
                  handleFilterByPageSize(20);
                }}
                className='dropdown-item'
              />
              <Button
                children='30'
                value={30}
                onClick={() => {
                  handleFilterByPageSize;
                }}
                className='dropdown-item'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
