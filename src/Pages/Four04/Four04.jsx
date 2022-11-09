import React from "react";
import { Link } from "react-router-dom";

const Four04 = () => {
  return (
    <div>
      <h1 className='text-center mt-20 text-5xl text-red-800'>No data found</h1>
      <div className='flex justify-center items-center pt-5'>
        <Link to='/' className='btn btn-accent'>
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Four04;
