import Api from '@/src/constants/Api';
import Request from '@/src/helper/Request';
import { productType } from '@/src/types/types';
import React from 'react';
import AddToCart from './_components/AddToCart';
import groupByType from '@/src/helper/FormateVarients';

const page = async ({ searchParams, params }: any) => {
  const response = await Request.get(`${Api.PRODUCTS}/${searchParams.slug}`);
  let formatedVariants: any[] = [];
  let product: productType | undefined = undefined;
  if (response?.success) {
    product = response?.data;
    formatedVariants = product && groupByType(product?.variants);
  }
  return (
    <>
      <div>
        {/* Shop Detail Start */}
        <div className='container-fluid pb-5'>
          <div className='row px-xl-5'>
            <div className='col-lg-5 mb-30'>
              <div
                id='product-carousel'
                className='carousel slide'
                data-ride='carousel'>
                <div className='carousel-inner bg-light'>
                  {/* {product?.media?.map((media, index) => (
                    <div className='carousel-item' key={index}>
                      <Image
                        src={media.url}
                        alt={media.alt}
                        width={500}
                        height={500}
                      />
                    </div>
                  ))} */}
                  {
                    <div className='carousel-item active'>
                      <img
                        className='w-100 h-100'
                       
                        src={product?.media?.url}
                        alt={product?.media?.alt}
                      />
                    </div>
                  }
                  {/* <div className='carousel-item active'>
                    <img
                      className='w-100 h-100'
                      src='img/product-1.jpg'
                      alt='this is image'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      className='w-100 h-100'
                      src='img/product-2.jpg'
                      alt='this is image'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      className='w-100 h-100'
                      src='img/product-3.jpg'
                      alt='this is image'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      className='w-100 h-100'
                      src='img/product-4.jpg'
                      alt='this is image'
                    />
                  </div> */}
                </div>
                <a
                  className='carousel-control-prev'
                  href='#product-carousel'
                  data-slide='prev'>
                  <i className='fa fa-2x fa-angle-left text-dark' />
                </a>
                <a
                  className='carousel-control-next'
                  href='#product-carousel'
                  data-slide='next'>
                  <i className='fa fa-2x fa-angle-right text-dark' />
                </a>
              </div>
            </div>
            <div className='col-lg-7 h-auto mb-30'>
              <div className='h-100 bg-light p-30'>
                <h3>{product?.name}</h3>
                <div className='d-flex mb-3'>
                  <div className='text-primary mr-2'>
                    <small className='fas fa-star' />
                    <small className='fas fa-star' />
                    <small className='fas fa-star' />
                    <small className='fas fa-star-half-alt' />
                    <small className='far fa-star' />
                  </div>
                  <small className='pt-1'>(99 Reviews)</small>
                </div>
                <h3 className='font-weight-semi-bold mb-4'>
                  ${product && product?.markedPrice - product?.discount}
                </h3>
                <p className='mb-4'>{product?.details}</p>
              

                <div className='d-flex align-items-center mb-4 pt-2'>
                  <AddToCart product={product} formatedVariants={formatedVariants} />
                </div>
                <div className='d-flex pt-2'>
                  <strong className='text-dark mr-2'>Share on:</strong>
                  <div className='d-inline-flex'>
                    <a className='text-dark px-2' href='/'>
                      <i className='fab fa-facebook-f' />
                    </a>
                    <a className='text-dark px-2' href='/'>
                      <i className='fab fa-twitter' />
                    </a>
                    <a className='text-dark px-2' href='/'>
                      <i className='fab fa-linkedin-in' />
                    </a>
                    <a className='text-dark px-2' href='/'>
                      <i className='fab fa-pinterest' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row px-xl-5'>
            <div className='col'>
              <div className='bg-light p-30'>
                <div className='nav nav-tabs mb-4'>
                  <a
                    className='nav-item nav-link text-dark active'
                    data-toggle='tab'
                    href='#tab-pane-1'>
                    Description
                  </a>
                  <a
                    className='nav-item nav-link text-dark'
                    data-toggle='tab'
                    href='#tab-pane-2'>
                    Information
                  </a>
                  <a
                    className='nav-item nav-link text-dark'
                    data-toggle='tab'
                    href='#tab-pane-3'>
                    Reviews (0)
                  </a>
                </div>
                <div className='tab-content'>
                  <div className='tab-pane fade show active' id='tab-pane-1'>
                    <h4 className='mb-3'>Product Description</h4>
                    <p>{product?.description}</p>
                  </div>
                  <div className='tab-pane fade' id='tab-pane-2'>
                    <h4 className='mb-3'>Additional Information</h4>
                    <p>{product?.additionalInformation}</p>
                 
                  </div>
                  <div className='tab-pane fade' id='tab-pane-3'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <h4 className='mb-4'>1 review for "Product Name"</h4>
                        <div className='media mb-4'>
                          <img
                            src='img/user.jpg'
                            alt='this is image'
                            className='img-fluid mr-3 mt-1'
                            style={{ width: 45 }}
                          />
                          <div className='media-body'>
                            <h6>
                              John Doe
                              <small>
                                {' '}
                                - <i>01 Jan 2045</i>
                              </small>
                            </h6>
                            <div className='text-primary mb-2'>
                              <i className='fas fa-star' />
                              <i className='fas fa-star' />
                              <i className='fas fa-star' />
                              <i className='fas fa-star-half-alt' />
                              <i className='far fa-star' />
                            </div>
                            <p>
                              Diam amet duo labore stet elitr ea clita ipsum,
                              tempor labore accusam ipsum et no at. Kasd diam
                              tempor rebum magna dolores sed sed eirmod ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <h4 className='mb-4'>Leave a review</h4>
                        <small>
                          Your email address will not be published. Required
                          fields are marked *
                        </small>
                        <div className='d-flex my-3'>
                          <p className='mb-0 mr-2'>Your Rating * :</p>
                          <div className='text-primary'>
                            <i className='far fa-star' />
                            <i className='far fa-star' />
                            <i className='far fa-star' />
                            <i className='far fa-star' />
                            <i className='far fa-star' />
                          </div>
                        </div>
                        <form>
                          <div className='form-group'>
                            <label htmlFor='message'>Your Review *</label>
                            <textarea
                              id='message'
                              cols={30}
                              rows={5}
                              className='form-control'
                              defaultValue={''}
                            />
                          </div>
                          <div className='form-group'>
                            <label htmlFor='name'>Your Name *</label>
                            <input
                              type='text'
                              className='form-control'
                              id='name'
                            />
                          </div>
                          <div className='form-group'>
                            <label htmlFor='email'>Your Email *</label>
                            <input
                              type='email'
                              className='form-control'
                              id='email'
                            />
                          </div>
                          <div className='form-group mb-0'>
                            <input
                              type='submit'
                              defaultValue='Leave Your Review'
                              className='btn btn-primary px-3'
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shop Detail End */}
        {/* Products Start */}
        {/* <div className='container-fluid py-5'>
          <h2 className='section-title position-relative text-uppercase mx-xl-5 mb-4'>
            <span className='bg-secondary pr-3'>You May Also Like</span>
          </h2>
          <div className='row px-xl-5'>
            <div className='col'>
              <ProductCarousel />
            </div>
          </div>
        </div> */}
        {/* Products End */}
      </div>
    </>
  );
};

export default page;
