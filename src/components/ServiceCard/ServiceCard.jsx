import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className='card w-80 bg-base-100 shadow-2xl text-white'>
      <figure>
        <img className='card-img' src={service?.img} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{service?.name}</h2>
        <p>{service?.description?.slice(0, 50) + "...  "} </p>
        <p>Price: ${service?.price}</p>
        <div className='card-actions justify-end'>
          <Link
            to={`/services/${service?._id}`}
            className='btn btn-accent text-white'
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
