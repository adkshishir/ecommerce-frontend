'use client';
import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { homeDataResponseType, productType } from '../types/types';
import Request from '../helper/Request';
import Api from '../constants/Api';
interface myContextType {
  homePageData: homeDataResponseType | undefined;
  setHomePageData: React.Dispatch<
    React.SetStateAction<homeDataResponseType | undefined>
  >;
  products: productType[];
  setProducts: React.Dispatch<React.SetStateAction<productType[]>>;
}
const initialState = {
  homePageData: undefined,
  setHomePageData: () => { },
  products: [],
  setProducts: () => { },
};
export const MyContext = createContext<myContextType>(initialState);

const MyProvider = ({ children }: { children: ReactNode }) => {
  const [homePageData, setHomePageData] = useState<homeDataResponseType>();
  const [products, setProducts] = useState<productType[]>([]);
  
  return (
    <MyContext.Provider value={{ homePageData, setHomePageData, products, setProducts }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
