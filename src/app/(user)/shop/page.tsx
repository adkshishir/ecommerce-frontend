import ProductCard from '@/src/components/cards/ProductCard';
import React from 'react';
import ShopProductSection from './_components/ShopProductSection';
import SideBar from './_components/SideBar';

const page = ({searchParams}: any) => {
  console.log(searchParams)
  return (
    <>
      {/* Shop Start */}
      <div className='container-fluid'>
        <div className='row px-xl-5'>
          {/* Shop Sidebar Start */}
          <SideBar />
          {/* Shop Sidebar End */}
          {/* Shop Product Start */}
          <ShopProductSection searchParams={searchParams} />
          {/* Shop Product End */}
        </div>
      </div>
      {/* Shop End */}
    </>
  );
};

export default page;
