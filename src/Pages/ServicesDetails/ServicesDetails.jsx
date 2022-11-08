import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ServicesDetails.css";

const ServicesDetails = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div className='w-10/12 mx-auto '>
      <div>
        <div className='flex flex-col gap-10 items-center lg:flex-row lg:justify-evenly lg:shadow-md pt-20 lg:pb-10 pb-16 mb-16 rounded-md text-white'>
          <div className='lg:w-1/2'>
            <h2 className='text-4xl mb-4'>Service Name: {service?.name}</h2>
            <p className='text-lg py-2'>Description: {service?.description}</p>
            <p className='text-lg text-bold mt-4'>Price: ${service?.price}</p>
          </div>
          <div className='max-w-md details-img'>
            <img className='rounded-md' src={service?.img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
