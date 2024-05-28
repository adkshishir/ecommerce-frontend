const BASE_URL = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;
const HOME_PAGE = `${BASE_URL}/api/home-page-data`;
const SEARCH_PRODUCTS = `${BASE_URL}/api/search-products`;
const LOGIN = `${BASE_URL}/api/auth/login`;
const SIGNUP = `${BASE_URL}/api/auht/register`;
const PARENT_CATEGORIES = `${BASE_URL}/api/parent-categories`;
const CATEGORIES = `${BASE_URL}/api/categories`;
const PRODUCTS = `${BASE_URL}/api/products`;
const ADD_TO_CART = `${BASE_URL}/api/cart`;
const CART = `${BASE_URL}/api/cart`;
const AUTH_PROFILE = `${BASE_URL}/api/auth/profile`;
const WISHLIST = `${BASE_URL}/api/wishlist`;

export default {
  BASE_URL,
  HOME_PAGE,
  SEARCH_PRODUCTS,
  LOGIN,
  SIGNUP,
  PARENT_CATEGORIES,
  CATEGORIES,
  PRODUCTS,
  ADD_TO_CART,
  CART,
  AUTH_PROFILE,
  WISHLIST
};
 