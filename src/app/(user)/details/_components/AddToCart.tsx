'use client';
import Button from '@/src/components/Button';
import Api from '@/src/constants/Api';
import { MyContext } from '@/src/context/MyProvider';
import groupByType from '@/src/helper/FormateVarients';
import Request from '@/src/helper/Request';
import { productType } from '@/src/types/types';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

const AddToCart = ({
  product,
  formatedVariants,
}: {
  product: productType | undefined;
  formatedVariants: any;
}) => {
  const [quantity, setQuantity] = React.useState(1);
  const [variantId, setVariantId] = useState<number | null>(null);
  const {setProfile} = useContext(MyContext);
  const handleAddToCart = async() => {
    console.log(product?.variants);
    try {
      //  fomate variants in
      let formatedVariants: any;
      if (product?.variants) {
        formatedVariants = product && groupByType(product?.variants);
      }
      let profile = await Request.get(
        Api.AUTH_PROFILE,
        localStorage.getItem('token') || ''
      )
      setProfile(profile?.data);
      //  add to cart
      // post
      if (!localStorage?.getItem('token')) {
        toast.error('Please login first');
        return;
      }
      const response: any = Request.post(
        Api.ADD_TO_CART,
        {
          productId: product?.id,
          quantity: quantity,
          variantId: variantId,
        },
        localStorage.getItem('token') || ''
      );
      // delete all selection
      toast.success('Added to cart successfully'); 
      setVariantId(null);
      setQuantity(1);
      return;
    } catch {
      console.log('error while adding to cart');
    }
  };

  return (
    <div className='row'>
      <div className='col-12'>
        {/* {variants start} */}
        {formatedVariants &&
          Object.entries(formatedVariants).map(([key, value]: any, index) => (
            <div className='d-flex mb-3'>
              <strong className='text-dark mr-3'>
                {key.replace(key[0], key[0].toUpperCase())} :
              </strong>
              <form>
                {value.map(
                  (
                    variant: {
                      value: string;
                      parentId: string;
                      id: number;
                    },
                    ind: number
                  ) => (
                    <div
                      className='custom-control custom-radio custom-control-inline'
                      key={index}>
                      <input
                        type='radio'
                        className='custom-control-input'
                        id={variant?.value}
                        onClick={() => setVariantId(variant?.id)}
                        name={'variant'}
                      />
                      <label
                        className='custom-control-label'
                        htmlFor={variant.value}>
                        {variant?.value}
                      </label>
                    </div>
                  )
                )}
              </form>
            </div>
          ))}
        <br />

        {/* variants end */}
      </div>
      <div className='input-group quantity mr-3' style={{ width: 130 }}>
        <div className='input-group-btn'>
          <Button
            onClick={() => {
              setQuantity(quantity > 2 ? quantity - 1 : quantity);
            }}
            className='btn btn-primary '>
            <i className='fa fa-minus' />
          </Button>
        </div>
        <input
          type='text'
          className='form-control  col-6 bg-secondary border-0 text-center'
          //   defaultValue={1}
          value={quantity}
          onChange={(e) => {
            if (isNaN(Number(e.target.value))) return;
            if (Number(e.target.value) > Number(product?.totalStocks))
              alert('out of stock');
            setQuantity(
              product && Number(product?.totalStocks) > Number(e.target.value)
                ? Number(e.target.value)
                : Number(product?.totalStocks) || quantity
            );
          }}
        />
        <div className='input-group-btn '>
          <Button
            onClick={() => {
              setQuantity(
                product && product?.totalStocks > quantity
                  ? quantity + 1
                  : quantity
              );
            }}
            className='btn btn-primary '>
            <i className='fa fa-plus' />
          </Button>
        </div>
      </div>
      <Button className='btn btn-primary px-3 ' onClick={handleAddToCart}>
        <i className='fa fa-shopping-cart mr-1' /> Add To Cart
      </Button>
    </div>
  );
};

export default AddToCart;
