'use client';
import Button from './Button';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({ availableProducts }: { availableProducts: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // get pageSize from url

  const [pageSize, setPageSize] = React.useState(
    Number(searchParams?.get('pageSize')) || 10
  );
  console.log({ pageSize });
  const [currentPage, setCurrentPage] = React.useState(1);
  const maxPage = Math.ceil(availableProducts / pageSize);

  function handleByCurrentPage(p0: number) {
      setCurrentPage(p0);  
    const params = new URLSearchParams(searchParams.toString());
    params.set('currentPage', p0.toString());
    router.push(`?${params.toString()}`);
  }
  return (
    <nav className='mt-4'>
      <ul className='pagination justify-content-center'>
        <li
          className={`${
            currentPage === 1 ? 'page-item disabled' : 'page-item'
          }`}>
          <Button
            className='page-link'
            children='Previous'
            onClick={() => {
              handleByCurrentPage(1);
            }}
          />
        </li>
        <li className='page-item active'>
          <Button
            className='page-link'
            children={currentPage}
            onClick={() => {
              handleByCurrentPage(
                currentPage > 1 ? currentPage - 1 : currentPage
              );
            }}
          />
        </li>
        <li className='page-item'>
          <Button
            className='page-link'
            children={currentPage + 1}
            onClick={() => {
              handleByCurrentPage(currentPage);
            }}
          />
        </li>
        <li className='page-item'>
          <Button
            className='page-link'
            children={currentPage + 2}
            onClick={() => {
              handleByCurrentPage(
                currentPage < Math.ceil(availableProducts / Number(pageSize))
                  ? currentPage + 1
                  : currentPage
              );
            }}
          />
        </li>
        <li className='page-item'>
          <Button
            className='page-link'
            children='Next'
            onClick={() => {
              handleByCurrentPage(
                Math.ceil(availableProducts / (currentPage * Number(pageSize)))
              );
            }}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
