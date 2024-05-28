'use client';
import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { homeDataResponseType, productType, profileType } from '../types/types';
import Request from '../helper/Request';
import Api from '../constants/Api';
interface myContextType {
  homePageData: homeDataResponseType | undefined;
  setHomePageData: React.Dispatch<
    React.SetStateAction<homeDataResponseType | undefined>
  >;
  products: productType[];
  setProducts: React.Dispatch<React.SetStateAction<productType[]>>;
  profile: profileType|undefined;
  setProfile: React.Dispatch<React.SetStateAction<profileType|undefined>>;
}
const initialState = {
  homePageData: undefined,
  setHomePageData: () => {},
  products: [],
  setProducts: () => {},
  profile: undefined,
  setProfile: () => {},
};
export const MyContext = createContext<myContextType>(initialState);

const MyProvider = ({ children }: { children: ReactNode }) => {
  const [homePageData, setHomePageData] = useState<homeDataResponseType>();
  const [products, setProducts] = useState<productType[]>([]);
  const [profile, setProfile] = useState<profileType>();

  return (
    <MyContext.Provider
      value={{
        homePageData,
        setHomePageData,
        products,
        setProducts,
        profile,
        setProfile,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
