import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const Four04 = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404</title>
      </Helmet>
      <div>
        <h1 className='text-center mt-20 text-5xl text-red-800'>
          No data found
        </h1>
        <div className='flex justify-center items-center pt-5'>
          <Link to='/' className='btn btn-accent'>
            Back To Home
          </Link>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Four04;
