'use client';
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/MyProvider';
import VerticalBar from './VerticalBar';
import HoriontalBar from './HorizontalBar';
import Api from '../constants/Api';
import {
  menuDataWithOutParentCategories,
  menuDataWithParentCategories,
} from '../types/types';
import Link from 'next/link';

const NavBar = () => {
  const { homePageData, profile } = useContext(MyContext);
  const [menuWithParent, setMenuWithParent] = useState<
    menuDataWithParentCategories[]
  >([]);
  const [menuWithOutParent, setMenuData] = useState<
    menuDataWithOutParentCategories[]
  >([]);
  useEffect(() => {
    async function fetchData() {
      if (homePageData?.success) {
        setMenuData(
          homePageData?.data?.menuData?.menuDataWithOutParentCategories
        );
        setMenuWithParent(
          homePageData?.data?.menuData?.menuDataWithParentCategories
        );
      }
    }
    fetchData();
  }, [homePageData]);
  return (
    <>
      {/* Navbar Start */}
      <div className='container-fluid bg-dark mb-30'>
        <div className='row px-xl-5'>
          <div className='col-lg-3 d-none d-lg-block'>
            <a
              className='btn d-flex align-items-center justify-content-between bg-primary w-100'
              data-toggle='collapse'
              href='#navbar-vertical'
              style={{ height: 65, padding: '0 30px' }}>
              <h6 className='text-dark m-0'>
                <i className='fa fa-bars mr-2' />
                Categories
              </h6>
              <i className='fa fa-angle-down text-dark' />
            </a>
            <nav
              className='collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light'
              id='navbar-vertical'
              style={{ width: 'calc(100% - 30px)', zIndex: 999 }}>
              <div className='navbar-nav w-100'>
                {menuWithParent?.map((item, index) => (
                  <div key={index} className='nav-item dropdown dropright'>
                    <Link
                      href='#'
                      className='nav-link dropdown-toggle'
                      data-toggle='dropdown'>
                      {item?.name}{' '}
                      <i className='fa fa-angle-right float-right mt-1' />
                    </Link>
                    <div className='dropdown-menu position-absolute max-height-500 overflow-auto rounded-0 border-0 m-0'>
                      {item?.categories?.map((category, index) => (
                        <Link
                          key={`${category?.id + index}`}
                          href={`/shop?category=${category?.slug}`}
                          className='dropdown-item'>
                          {category?.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </nav>
          </div>
          <div className='col-lg-9'>
            <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0'>
              <a href='' className='text-decoration-none d-block d-lg-none'>
                <span className='h1 text-uppercase text-dark bg-light px-2'>
                  Multi
                </span>
                <span className='h1 text-uppercase text-light bg-primary px-2 ml-n1'>
                  Shop
                </span>
              </a>
              <button
                type='button'
                className='navbar-toggler'
                data-toggle='collapse'
                data-target='#navbarCollapse'>
                <span className='navbar-toggler-icon' />
              </button>
              <div
                className='collapse navbar-collapse justify-content-between'
                id='navbarCollapse'>
                <div className='navbar-nav mr-auto py-0'>
                  {menuWithOutParent?.map((data, index) => {
                    return (
                      <div className='nav-item dropdown'>
                        <Link
                          href='#'
                          key={data?.id}
                          className='nav-link dropdown-toggle '
                          data-toggle='dropdown'>
                          {data?.name} <i className='fa fa-angle-down mt-1' />
                        </Link>
                        <div className='dropdown-menu search-menu bg-white rounded-0 border-0 m-0'>
                          {data?.products?.map((product) => {
                            return (
                              <Link
                                href={`/details?slug=${product?.slug}`}
                                key={product?.id}
                                className='dropdown-item'>
                                {product?.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                  {/* <a href='index.html' className='nav-item nav-link'>
                    Home
                  </a>
                  <a href='shop.html' className='nav-item nav-link'>
                    Shop
                  </a>
                  <a href='detail.html' className='nav-item nav-link'>
                    Shop Detail
                  </a>
                  <div className='nav-item dropdown'>
                    <a
                      href='#'
                      className='nav-link dropdown-toggle active'
                      data-toggle='dropdown'>
                      Pages <i className='fa fa-angle-down mt-1' />
                    </a>
                    <div className='dropdown-menu bg-primary rounded-0 border-0 m-0'>
                      <a href='cart.html' className='dropdown-item active'>
                        Shopping Cart
                      </a>
                      <a href='checkout.html' className='dropdown-item'>
                        Checkout
                      </a>
                    </div>
                  </div> */}
                  <a href='contact.html' className='nav-item nav-link'>
                    Contact
                  </a>
                </div>
                <div className='navbar-nav ml-auto py-0 d-none d-lg-block'>
                  <Link href='/wishlist' className='btn px-0'>
                    <i className='fas fa-heart text-primary' />
                    <span
                      className='badge text-secondary border border-secondary rounded-circle'
                      style={{ paddingBottom: 2 }}>
                      {profile?._count?.WishLists||0}
                    </span>
                  </Link>
                  <Link href='/cart' className='btn px-0 ml-3'>
                    <i className='fas fa-shopping-cart text-primary' />
                    <span
                      className='badge text-secondary border border-secondary rounded-circle'
                      style={{ paddingBottom: 2 }}>
                      {profile?._count?.carts||0}
                    </span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar End */}
    </>
  );
};

export default NavBar;
