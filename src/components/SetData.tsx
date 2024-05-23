'use client';
import React, { useContext, useEffect } from 'react';
import { homeDataResponseType, productType } from '../types/types';
import { MyContext } from '../context/MyProvider';
import Request from '../helper/Request';
import Api from '../constants/Api';

const SetData = ({
  homeData,
  products,
}: {
  homeData: homeDataResponseType;
  products: productType[];
}) => {
  const { setHomePageData, setProducts } = useContext(MyContext);
  useEffect(() => {
    const fetchData = async () => {
      const homeData: homeDataResponseType = await Request.get(Api.HOME_PAGE);
      const products = await Request.get(Api.SEARCH_PRODUCTS);
      setHomePageData({
        ...homeData,
      });
      setProducts(products.data.products);
    };

    fetchData();
    // setHomePageData({
    //   ...homeData,
    // });
    // setProducts(products);
  }, []);
  return <></>;
};

export default SetData;
