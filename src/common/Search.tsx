'use client';
import * as React from 'react';
import Api from '../constants/Api';
import Request from '../helper/Request';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Product {
  name: string;
  slug: string;
}

export default function Search() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [products, setProducts] = React.useState<any>([]);
  const [search, setSearch] = React.useState<string>('');
  const [options, setOptions] = React.useState<readonly Product[]>([]);
  let loading = open && options.length === 0;

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
    getProducts();
  }, [open, search]);
  async function getProducts() {
    try {
      loading = true;
      setOptions([]);
      setTimeout(async () => {
        let fetchProducts = await Request.get(Api.SEARCH_PRODUCTS);
        setProducts(await fetchProducts.data.products);
        if (fetchProducts.data.products.length > 0)
          setOptions(await fetchProducts.data.products);
        else {
          setOptions([
            {
              name: 'Not Found',
              slug: 'oops',
            },
          ]);
        }
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='d-flex position-relative '>
      <input
        type='text'
        className='form-control'
        placeholder='Search'
        value={search}
        onBlur={() =>
          setTimeout(() => {
            setOpen(false);
          }, 200)
        }
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setSearch(e.target.value || '');
        }}
      />

      <div
        onClick={() => router.push(`/shop?name=${search}`)}
        className='input-group-append'>
        <span className='input-group-text border-primary text-white'>
          <i className='fa fa-search text-primary' />
        </span>
      </div>
      {open && (
        <div
          className='w-100 search-menu position-absolute rounded shadow bg-white '
          style={{ zIndex: 1, top: '50px' }}>
          {products.map((product: Product, index: number) => (
            <div
              key={index}
              className='w-100 h-100 d-flex flex-column justify-content-center'>
              <Link
                href={`/details?slug=${product.slug}`}
                key={product.slug + index}
                onClick={() => setOpen(false)}
                className='text-decoration-none mx-3 my-1 nav-link text-dark'>
                {product.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}