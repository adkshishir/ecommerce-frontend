'use client';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SideBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const prices = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
  const colors = ['Black', 'White', 'Red', 'Blue', 'Yellow', 'Green'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

  function handleFilterByPrice(min: string, max: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('minPrice', min);
    params.set('maxPrice', max);
    router.push(`?${params.toString()}`);
  }
  function handleFilterByColor(color: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('color', color);
    router.push(`?${params.toString()}`);
  }

  function handleFilterByProductSize(arg0: string) {
    // setPageSize(arg0);
    const params = new URLSearchParams(searchParams.toString());
    params.set('size', arg0.toString());
    router.push(`?${params.toString()}`);
  }
    
  return (
    <div className='col-lg-3 col-md-4'>
      {/* Price Start */}
      <h5 className='section-title position-relative text-uppercase mb-3'>
        <span className='bg-secondary pr-3'>Filter by price</span>
      </h5>
      <div className='bg-light p-4 mb-30'>
        <form>
          <div className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
            <input
              type='radio'
              name='price'
              className='custom-control-input'
              defaultChecked
              id={'price-all'}
              onClick={() => {
                handleFilterByPrice('', '');
              }}
            />
            <label className='custom-control-label' htmlFor='price-all'>
              All Price
            </label>
            {/* <span className='badge border font-weight-normal'>{totalProducts}</span> */}
          </div>
          {prices.map(
            (price, index) =>
              index !== prices.length - 1 && (
                <div className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
                  <input
                    type='radio'
                    className='custom-control-input'
                    id={`price-${price}`}
                    value={price}
                    name='price'
                    onClick={() => {
                      handleFilterByPrice(
                        price.toString(),
                        (price + 1000).toString()
                      );
                    }}
                  />
                  <label
                    className='custom-control-label'
                    htmlFor={`price-${price}`}>
                    ${price}-${price + 1000}
                  </label>
                  <span className='badge border font-weight-normal'>
                    {/* 150 */}
                  </span>
                </div>
              )
          )}
        </form>
      </div>
      {/* Price End */}
      {/* Color Start */}
      <h5 className='section-title position-relative text-uppercase mb-3'>
        <span className='bg-secondary pr-3'>Filter by color</span>
      </h5>
      <div className='bg-light p-4 mb-30'>
        <form>
          <div className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
            <input
              type='radio'
              className='custom-control-input'
              defaultChecked
              name='color'
              id='color-all'
              onClick={() => {
                handleFilterByColor('');
              }}
            />
            <label className='custom-control-label' htmlFor='color-all'>
              All Color
            </label>
            {/* <span className='badge border font-weight-normal'>1000</span> */}
          </div>
          {colors.map((color) => (
            <div className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
              <input
                type='radio'
                value={color}
                name='color'
                className='custom-control-input'
                id={`color-${color}`}
                onClick={() => {
                  handleFilterByColor(color);
                }}
              />
              <label
                className='custom-control-label'
                htmlFor={`color-${color}`}>
                {color}
              </label>
              <span className='badge border font-weight-normal'>
                {/* 150 */}
              </span>
            </div>
          ))}
        </form>
      </div>
      {/* Color End */}
      {/* Size Start */}
      <h5 className='section-title position-relative text-uppercase mb-3'>
        <span className='bg-secondary pr-3'>Filter by size</span>
      </h5>
      <div className='bg-light p-4 mb-30'>
        <form>
          <div className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
            <input
              type='radio'
              className='custom-control-input'
              defaultChecked
              id='size-all'
              name='size'
                onClick={() => {
                    handleFilterByProductSize('')
                }}
            />
            <label className='custom-control-label' htmlFor='size-all'>
              All Size
            </label>
            <span className='badge border font-weight-normal'>1000</span>
          </div>
          {sizes.map((size) => (
            <div className='custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3'>
              <input
                type='radio'
                className='custom-control-input'
                id={`size-${size}`}
                name='size'
                      value={size}
                onClick={() => {
                    handleFilterByProductSize(size)
                }}
              />
              <label className='custom-control-label' htmlFor={`size-${size}`}>
                {size}
              </label>
              <span className='badge border font-weight-normal'>
                {/* 150 */}
              </span>
            </div>
          ))}
        </form>
      </div>
      {/* Size End */}
    </div>
  );
};

export default SideBar;
