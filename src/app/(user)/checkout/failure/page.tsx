import Link from 'next/link';
import React from 'react';

const failure = () => {
  return (
    <div className='container text-center ' style={{ minHeight: '23vh' }}>
      <h1 className='my-5'>Payment Failed</h1>
      <h3 className='my-5'>
        Please Contact to the admin to address your problem. <br /> thank you!!
      </h3>
      <Link href='/checkout' className='btn btn-primary btn-lg rounded'>
        Orders
      </Link>
    </div>
  );
};

export default failure;
