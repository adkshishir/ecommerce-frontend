'use client';
import React, { useContext, useEffect } from 'react';
import { MyContext } from '../context/MyProvider';
import VerticalBar from './VerticalBar';
import HoriontalBar from './HorizontalBar';
import Api from '../constants/Api';

const NavBar = () => {
  const { homePageData } = useContext(MyContext);
  const [menuData, setMenuData] = React.useState<any>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(Api.HOME_PAGE);
      const data = await response.json();
    }
    fetchData();
  }, []);
  return (
    <>
      {/* Navbar Start */}
      <div className='container-fluid bg-dark mb-30'>
        <div className='row px-xl-5'>
          {/* {menuData?.map((item: any, index: number) => (
            <div key={index} className=' d-none d-lg-block'>
              <a
                className='btn d-flex align-items-center justify-content-between '
                data-toggle='collapse'
                href={'#navbar-vertical' + index}>
                <h6 className='text-white col-lg-2 m-0'>
                  <i className='fa fa-bars mr-2' />
                  {item?.name}
                </h6>
                <i className='fa fa-angle-down text-white' />
              </a>
              <nav
                className='collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light'
                id={'navbar-vertical' + index}
                style={{
                  zIndex: 999,
                  overflowY: 'scroll',
                  maxHeight: '500px',
                }}>
                <div className='navbar-nav '>
                  {item?.categories.map((category: any, index: number) => (
                    <div key={index} className='nav-item dropdown dropright'>
                      <a
                        href='#'
                        className='nav-link dropdown-toggle'
                        data-toggle='dropdown'>
                        {category.name.length > 20
                          ? category.name.slice(0, 20) + '...'
                          : category.name}
                        <i className='fa fa-angle-right float-right mt-1' />
                      </a>
                      <div className='dropdown-menu position-absolute rounded-0 border-0 m-0'>
                        {category.products.map(
                          (product: any, index: number) => (
                            <a
                              href={`${item.slug}/${category.slug}/${product.slug}`}
                              className='dropdown-item'
                              key={index}>
                              {product.name.length > 20
                                ? product.name.slice(0, 20) + '...'
                                : product.name}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                  <a href='/' className='nav-item nav-link'>
                    Shirts
                  </a>
                  <a href='/' className='nav-item nav-link'>
                    Jeans
                  </a>
                  <a href='/' className='nav-item nav-link'>
                    Swimwear
                  </a>
                  <a href='/' className='nav-item nav-link'>
                    Sleepwear
                  </a>
                  <a href='/' className='nav-item nav-link'>
                    Sportswear
                  </a>
                  <a href='/' className='nav-item nav-link'>
                    Jumpsuits
                  </a>
                  <a href='/' className='nav-item nav-link'>
                    Blazers
                  </a>
                  <a href='/' className='nav-item nav-link'>
                    Jackets
                  </a>
                  <a href='/' className='nav-item nav-link'>
                    Shoes
                  </a>
                </div>
              </nav>
            </div>
                      ))} */}
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
                {menuData?.map((menu: any, index: number) => (
                  <>
                    <div className='nav-item dropdown dropright'>
                      <a
                        href='#'
                        className='nav-link dropdown-toggle'
                        data-toggle='dropdown'>
                        {menu?.name}
                        {menu?.categories.length > 0 && (
                          <i className='fa fa-angle-right float-right mt-1' />
                        )}
                      </a>
                      {menu?.categories.length > 0 && (
                        <div className='dropdown-menu position-absolute rounded-0 border-0 m-0'>
                          {menu?.categories.map(
                            (category: any, index: number) => (
                              <a
                                key={index}
                                href={`${menu.slug}/${category.slug}`}
                                className='dropdown-item'>
                                {category.name}
                              </a>
                            )
                          )}
                        </div>
                      )}
                    </div>
                    {/* <a href='#' className='nav-item nav-link'>
                      Shirts
                    </a>
                    <a href='#' className='nav-item nav-link'>
                      Jeans
                    </a>
                    <a href='#' className='nav-item nav-link'>
                      Swimwear
                    </a>
                    <a href='#' className='nav-item nav-link'>
                      Sleepwear
                    </a>
                    <a href='#' className='nav-item nav-link'>
                      Sportswear
                    </a>
                    <a href='#' className='nav-item nav-link'>
                      Jumpsuits
                    </a>
                    <a href='#' className='nav-item nav-link'>
                      Blazers
                    </a>
                    <a href='#' className='nav-item nav-link'>
                      Jackets
                    </a>
                    <a href='#' className='nav-item nav-link'>
                      Shoes
                    </a> */}
                  </>
                ))}
              </div>
            </nav>
          </div>

          <div className='col-lg-9'>
            <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0'>
              <a href='/' className='text-decoration-none d-block d-lg-none'>
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
                  <a href='index.html' className='nav-item nav-link active'>
                    Home
                  </a>

                  <a href='shop.html' className='nav-item nav-link'>
                    Shop
                  </a>
                  <a href='detail.html' className='nav-item nav-link'>
                    Shop Detail
                  </a>

                  <a href='contact.html' className='nav-item nav-link'>
                    Contact
                  </a>
                </div>
                <div className='navbar-nav ml-auto py-0 d-none d-lg-block'>
                  <a href='/' className='btn px-0'>
                    <i className='fas fa-heart text-primary' />
                    <span
                      className='badge text-secondary border border-secondary rounded-circle'
                      style={{ paddingBottom: 2 }}>
                      0
                    </span>
                  </a>
                  <a href='/' className='btn px-0 ml-3'>
                    <i className='fas fa-shopping-cart text-primary' />
                    <span
                      className='badge text-secondary border border-secondary rounded-circle'
                      style={{ paddingBottom: 2 }}>
                      0
                    </span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* <HoriontalBar/> */}
      </div>
      {/* Navbar End */}
    </>
  );
};

export default NavBar;
