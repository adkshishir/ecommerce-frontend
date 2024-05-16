'use client';
import { MyContext } from '@/src/context/MyProvider';
import { categoryType, parentCategoryType } from '@/src/types/types';
import React, { useContext } from 'react';
const Carousel = () => {
  const { homePageData } = useContext(MyContext);
  const [toggleCarousel, setToggleCarousel] = React.useState(0);
  const [parentCategory, setParentCategory] = React.useState<
    parentCategoryType[]
  >([]);
  const [specialCategory, setSpecialCategory] = React.useState<categoryType[]>(
    []
  );

  React.useEffect(() => {});
  return (
    <>
      {/* Carousel Start */}
      <div className='container-fluid mb-3'>
        <div className='row px-xl-5'>
          <div className='col-lg-8'>
            <div
              id='header-carousel'
              className='carousel slide carousel-fade mb-30 mb-lg-0'
              data-ride='carousel'>
              <ol className='carousel-indicators'>
                {homePageData?.success &&
                  homePageData.data.parentCategories?.map((category, index) => (
                    <li
                      key={index}
                      data-target='#header-carousel'
                      onClick={() => setToggleCarousel(index)}
                      data-slide-to={index}
                      className={index === 0 ? 'active' : ''}></li>
                  ))}
              </ol>
              <div className='carousel-inner'>
                {homePageData?.success &&
                  homePageData.data.parentCategories?.map((category, index) => (
                    <div
                      key={index}
                      className={
                       `carousel-item ${index === 0 ? 'active' : ''} position-relative` }
                      style={{ height: 430 }}>
                      <img
                        className='position-absolute w-100 h-100'
                        src={category?.media?.url || '/img/carousel-1.jpg'}
                        alt={category?.media?.alt}
                        style={{ objectFit: 'cover' }}
                      />
                      <div className='carousel-caption d-flex flex-column align-items-center justify-content-center'>
                        <div className='p-3' style={{ maxWidth: 700 }}>
                          <h1 className='display-4 text-white mb-3 animate__animated animate__fadeInDown'>
                            {category.name}
                          </h1>
                          <p className='mx-md-5 px-5 animate__animated animate__bounceIn'>
                            {category.description}
                          </p>
                          <a
                            className='btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp'
                            href={`/${category.slug}`}>
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}

              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='product-offer mb-30' style={{ height: 200 }}>
              <img
                className='img-fluid'
                src='img/offer-1.jpg'
                alt='this is image'
              />
              <div className='offer-text'>
                <h6 className='text-white text-uppercase'>Save 20%</h6>
                <h3 className='text-white mb-3'>Special Offer</h3>
                <a href='' className='btn btn-primary'>
                  Shop Now
                </a>
              </div>
            </div>
            <div className='product-offer mb-30' style={{ height: 200 }}>
              <img
                className='img-fluid'
                src='img/offer-2.jpg'
                alt='this is image'
              />
              <div className='offer-text'>
                <h6 className='text-white text-uppercase'>Save 20%</h6>
                <h3 className='text-white mb-3'>Special Offer</h3>
                <a href='' className='btn btn-primary'>
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
    </>
  );
};

export default Carousel;
