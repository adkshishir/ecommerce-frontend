const BASE_URL = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;
const HOME_PAGE = `${BASE_URL}/api/home-page-data`;
const SEARCH_PRODUCTS = `${BASE_URL}/api/search-products`;
const LOGIN = `${BASE_URL}/api/auth/login`;
const SIGNUP = `${BASE_URL}/api/auht/register`;
const PARENT_CATEGORIES = `${BASE_URL}/api/parent-categories`;
const CATEGORIES = `${BASE_URL}/api/categories`;

export default {
  BASE_URL,
  HOME_PAGE,
  SEARCH_PRODUCTS,
  LOGIN,
  SIGNUP,
  PARENT_CATEGORIES,
  CATEGORIES,
};
