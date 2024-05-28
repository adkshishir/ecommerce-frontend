'use client';
import Api from '@/src/constants/Api';
import Request from '@/src/helper/Request';
import { categoryType } from '@/src/types/types';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { MyContext } from '@/src/context/MyProvider';

type cartType = {
  id: number;
  quantity: number;
  variant: { id: number; name: string; price: number; image: string };
  product: {
    id: number;
    name: string;
    markedPrice: number;
    discount: number;
    image: string;
    quantity: number;
    total: number;
    media: {
      url: string;
      alt: string;
    }[]
  };
};
const page = () => {
  const router = useRouter();
  const { setProfile } = useContext(MyContext);
  const [carts, setCart] = useState<cartType[]>([]);
  useEffect(() => {
    getCart();
  }, []);
  async function getCart() {
    const response = await Request.get(
      Api.CART,
      localStorage.getItem('token') || ''
    );
    const { data, success } = response;
    if (success) {
      setCart(data);
      console.log(carts, 'cart');
    }
  }
  async function handleSubmit() {}
  useEffect(() => {
    console.log({ carts });
  }, [carts]);

  async function handleRemove(id: number) {
    try {
      await Request.delete(
        Api.CART + '/' + id,
        localStorage.getItem('token') || ''
      );
      let profile = await Request.get(
        Api.AUTH_PROFILE,
        localStorage.getItem('token') || ''
      );
      setProfile(profile?.data);
      toast.success('Product removed successfully');
      getCart();
    } catch (error) {
      toast.error('Error while removing product');
    }
  }
  return (
    <>
      {/* Cart Start */}
      <div className='container-fluid'>
        <div className='row px-xl-5'>
          <div className='col-lg-8 table-responsive mb-5 postition-relative'>
            <table className='table table-light table-borderless table-hover  mb-0 '>
              <thead className='thead-dark '>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody className='align-middle'>
                {carts?.map((item) => (
                  <tr key={item.id} className='align-middle '>
                    <td className='align-middle'>
                      {/* <img
                        src='img/product-1.jpg'
                        alt='this is image'
                        style={{ width: 50 }}
                      />{' '} */}
                      <Image
                        alt='this is image'
                        src={
                          item.product?.media[0]?.url || '/img/product-1.jpg'
                        }
                        width={50}
                        className='mr-2'
                        style={{ width: 50 }}
                        height={50}
                      />
                      {item.product?.name}
                    </td>
                    <td className='align-middle'>
                      Rs{' '}
                      {Number(item.product?.markedPrice) -
                        Number(item.product?.discount)}
                    </td>
                    <td className='align-middle'>
                      <div
                        className='input-group quantity mx-auto'
                        style={{ width: 100 }}>
                        <div className='input-group-btn'>
                          <button className='btn btn-sm btn-primary btn-minus'>
                            <i className='fa fa-minus' />
                          </button>
                        </div>
                        <input
                          type='text'
                          className='form-control form-control-sm bg-secondary border-0 text-center'
                          defaultValue={item?.quantity}
                        />
                        <div className='input-group-btn'>
                          <button className='btn btn-sm btn-primary btn-plus'>
                            <i className='fa fa-plus' />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className='align-middle'>
                      Rs{' '}
                      {(Number(item.product?.markedPrice) -
                        Number(item.product?.discount)) *
                        item.quantity}
                    </td>
                    <td className='align-middle'>
                      <button
                        className='btn btn-sm btn-danger'
                        onClick={() => handleRemove(item.id)}>
                        <i className='fa fa-times' />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='col-lg-4'>
            <form className='mb-30' onSubmit={handleSubmit}>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control border-0 p-4'
                  placeholder='Coupon Code'
                />
                <div className='input-group-append'>
                  <button className='btn btn-primary'>Apply Coupon</button>
                </div>
              </div>
            </form>
            <h5 className='section-title position-relative text-uppercase mb-3'>
              <span className='bg-secondary pr-3'>Cart Summary</span>
            </h5>
            <div className='bg-light p-30 mb-5'>
              <div className='border-bottom pb-2'>
                <div className='d-flex justify-content-between mb-3'>
                  <h6>Subtotal</h6>
                  <h6>
                    Rs{' '}
                    {carts?.reduce(
                      (a, b) =>
                        a + b.product?.markedPrice - b.product?.discount,
                      0
                    )}
                  </h6>
                </div>
                <div className='d-flex justify-content-between'>
                  <h6 className='font-weight-medium'>Shipping</h6>
                  <h6 className='font-weight-medium'>Rs {150}</h6>
                </div>
              </div>
              <div className='pt-2'>
                <div className='d-flex justify-content-between mt-2'>
                  <h5>Total</h5>
                  <h5>
                    Rs{' '}
                    {carts?.reduce(
                      (a, b) =>
                        a + b.product?.markedPrice - b.product?.discount,
                      0
                    ) + 150}
                  </h5>
                </div>
                <button
                  onClick={() => {
                    router.push('/checkout');
                  }}
                  className='btn btn-block btn-primary font-weight-bold my-3 py-3'>
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart End */}
    </>
  );
};

export default page;
