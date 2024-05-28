'use client';
import React, { useContext, useEffect } from 'react';
import { homeDataResponseType, productType, profileType } from '../types/types';
import { MyContext } from '../context/MyProvider';
import Request from '../helper/Request';
import Api from '../constants/Api';

const SetData = () => {
  const { setHomePageData, setProducts, setProfile } = useContext(MyContext);
  useEffect(() => {
    const fetchData = async () => {
      const homeData: homeDataResponseType = await Request.get(Api.HOME_PAGE);
      const products = await Request.get(Api.SEARCH_PRODUCTS);
      const profile = await Request.get(
        Api.AUTH_PROFILE,
        localStorage?.getItem('token') || ''
      );
      setHomePageData({
        ...homeData,
      });
      setProducts(products?.data?.products);
      setProfile(profile?.data);
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
