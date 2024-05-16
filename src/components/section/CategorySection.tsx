'use client';
import React, { useEffect } from 'react';
import { CategoryCard } from '../cards/CategoryCard';
import { MyContext } from '@/src/context/MyProvider';

const CategorySection = () => {
  const { homePageData } = React.useContext(MyContext);
  return (
    <div className='container-fluid pt-5'>
      <h2 className='section-title position-relative text-uppercase mx-xl-5 mb-4'>
        <span className='bg-secondary pr-3'>Categories</span>
      </h2>
      <div className='row px-xl-5 pb-3'>
        {homePageData?.success &&
          homePageData?.data?.categories?.map((category) => (
            <CategoryCard
              key={category.id}
              image={category?.media?.url}
              categoryName={category.name}
              alt={category?.media?.alt}
              href={`/category/${category.slug}`}
              productCount={category?.id || 0}
            />
          ))}
        {/* <CategoryCard
          image='/img/cat-1.jpg'
          categoryName='Category Name'
          href='/'
          productCount={100}
        />
        <CategoryCard
          image='/img/cat-2.jpg'
          categoryName='Category Name'
          href='/'
          productCount={100}
        />
        <CategoryCard
          image='/img/cat-3.jpg'
          categoryName='Category Name'
          href='/'
          productCount={100}
        />
        <CategoryCard
          image='/img/cat-4.jpg'
          categoryName='Category Name'
          href='/'
          productCount={100}
        />
        <CategoryCard
          image='/img/cat-1.jpg'
          categoryName='Category Name'
          href='/'
          productCount={100}
        />
        <CategoryCard
          image='/img/cat-2.jpg'
          categoryName='Category Name'
          href='/'
          productCount={100}
        />
        <CategoryCard
          image='/img/cat-3.jpg'
          categoryName='Category Name'
          href='/'
          productCount={100}
        />
        <CategoryCard
          image='/img/cat-4.jpg'
          categoryName='Category Name'
          href='/'
          productCount={100}
        />
        <CategoryCard
          image='/img/cat-1.jpg'
          categoryName='Category Name'
          href='/'
          productCount={100}
        />
        <CategoryCard
          image='/img/cat-3.jpg'
          categoryName='Category Name'
          href='/'
          productCount={100}
        />
        <CategoryCard
          image='/img/cat-2.jpg'
          categoryName='Category Name'
          href='/'
          productCount={100}
        />
        <CategoryCard
          image='/img/cat-4.jpg'
          categoryName='Category Name'
          href='/'
          productCount={100}
        /> */}
      </div>
    </div>
  );
};

export default CategorySection;
