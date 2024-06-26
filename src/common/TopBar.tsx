'use client';
import React, { useContext, useEffect } from 'react';
import Search from './Search';
import Link from 'next/link';
import { ifError } from 'assert';
import { useRouter } from 'next/navigation';
import { MyContext } from '../context/MyProvider';
import Api from '../constants/Api';
import Request from '../helper/Request';

export const TopBar = () => {
  const router = useRouter();
  const { profile, setProfile } = useContext(MyContext);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    if (localStorage?.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, []);

  async function handleLogout() {
    localStorage?.removeItem('token');
    localStorage?.removeItem('profile');
    setIsLoggedIn(false);
    let profile = await Request.get(Api.AUTH_PROFILE, '');
    setProfile(profile?.data);
    router.push('/');
  }
  return (
    <>
      {/* Topbar Start */}
      <div className='container-fluid'>
        <div className='row bg-secondary py-1 px-xl-5'>
          <div className='col-lg-6 d-none d-lg-block'>
            <div className='d-inline-flex align-items-center h-100'>
              <a className='text-body mr-3' href='/'>
                About
              </a>
              <a className='text-body mr-3' href='/'>
                Contact
              </a>
              <a className='text-body mr-3' href='/'>
                Help
              </a>
              <a className='text-body mr-3' href='/'>
                FAQs
              </a>
            </div>
          </div>
          <div className='col-lg-6 text-center text-lg-right'>
            <div className='d-inline-flex align-items-center'>
              <div className='btn-group'>
                <button
                  type='button'
                  className='btn btn-sm btn-light dropdown-toggle'
                  data-toggle='dropdown'>
                  {profile?.name || ' My Account'}
                </button>
                <div className='dropdown-menu dropdown-menu-right'>
                  {isLoggedIn ? (
                    <button
                      onClick={handleLogout}
                      className='dropdown-item'
                      type='button'>
                      Sign out
                    </button>
                  ) : (
                    <>
                      <Link
                        href={'/auth/login'}
                        className='dropdown-item'
                        type='Link'>
                        Sign in
                      </Link>
                      <Link
                        href={'/auth/register'}
                        className='dropdown-item'
                        type='Link'>
                        Sign up
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className='btn-group mx-2'>
                <button
                  type='button'
                  className='btn btn-sm btn-light dropdown-toggle'
                  data-toggle='dropdown'>
                  USD
                </button>
                <div className='dropdown-menu dropdown-menu-right'>
                  <button className='dropdown-item' type='button'>
                    EUR
                  </button>
                  <button className='dropdown-item' type='button'>
                    GBP
                  </button>
                  <button className='dropdown-item' type='button'>
                    CAD
                  </button>
                </div>
              </div>
              <div className='btn-group'>
                <button
                  type='button'
                  className='btn btn-sm btn-light dropdown-toggle'
                  data-toggle='dropdown'>
                  EN
                </button>
                <div className='dropdown-menu dropdown-menu-right'>
                  <button className='dropdown-item' type='button'>
                    FR
                  </button>
                  <button className='dropdown-item' type='button'>
                    AR
                  </button>
                  <button className='dropdown-item' type='button'>
                    RU
                  </button>
                </div>
              </div>
            </div>
            <div className='d-inline-flex align-items-center d-block d-lg-none'>
              <a href='/' className='btn px-0 ml-2'>
                <i className='fas fa-heart text-dark' />
                <span
                  className='badge text-dark border border-dark rounded-circle'
                  style={{ paddingBottom: 2 }}>
                  0
                </span>
              </a>
              <a href='/' className='btn px-0 ml-2'>
                <i className='fas fa-shopping-cart text-dark' />
                <span
                  className='badge text-dark border border-dark rounded-circle'
                  style={{ paddingBottom: 2 }}>
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className='row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex'>
          <div className='col-lg-4'>
            <a href='/' className='text-decoration-none'>
              <span className='h1 text-uppercase text-primary bg-dark px-2'>
                E
              </span>
              <span className='h1 text-uppercase text-dark bg-primary px-2 ml-n1'>
                Comm
              </span>
            </a>
          </div>
          <div className='col-lg-4 col-6 text-left'>
            <form>
              <div className='input-group'>
                <Search />
              </div>
            </form>
          </div>
          <div className='col-lg-4 col-6 text-right'>
            <p className='m-0'>Customer Service</p>
            <h5 className='m-0'>9800000000</h5>
          </div>
        </div>
      </div>
      {/* Topbar End */}
    </>
  );
};
