'use client';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import Api from '../constants/Api';
import Request from '../helper/Request';
import { MyContext } from '../context/MyProvider';

interface Product {
  name: string;
  slug: string;
}

export default function Search() {
  const [open, setOpen] = React.useState(false);
  const [products, setProducts] = React.useState<any>([]);
  const [search, setSearch] = React.useState<string>('');
  const [options, setOptions] = React.useState<readonly Product[]>([]);
  let loading = open && options.length === 0;

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
    async function getProducts() {
      loading = true;
      setOptions([]);
      setTimeout(async () => {
        let fetchProducts = await Request.get(Api.SEARCH_PRODUCTS + search);
        if (fetchProducts.data.length > 0) setOptions(await fetchProducts.data);
        else {
          setOptions([
            {
              name: 'Not Found',
              slug: 'oops',
            },
          ]);
        }
      }, 1000);
    }
    getProducts();
  }, [open, search]);
  return (
    <div className='d-flex  '>
      <Autocomplete
        id='asynchronous-demo'
        sx={{ width: 300, border: 'unset', borderRadius: 'unset' }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.slug === value.slug}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            value={search}
            onChange={async (e) => {
              setSearch(e.target.value || '');
              // let fetchProducts = await Request.get(
              //   Api.SEARCH_PRODUCTS + e.target.value
              // );
              // setProducts(await fetchProducts.data);
            }}
            {...params}
            label='Search'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color='inherit' size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
      <div className='input-group-append'>
        <span className='input-group-text bg-primary border-primary text-white'>
          <i className='fa fa-search' />
        </span>
      </div>
    </div>
  );
}

// const products = async (search: string = '') => {
//   try {
//     const data = await Request.get(Api.SEARCH_PRODUCTS);
//     if (data.success) {
//       return data.data.map((product: Product) => ({
//         name: product.name,
//         slug: product.slug,
//       }));
//     } else {
//       return [];
//     }
//   } catch {
//     return [];
//   }
// };
