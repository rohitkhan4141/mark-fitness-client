import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className='card w-80 bg-base-100 shadow-2xl text-white'>
      <PhotoProvider>
        <PhotoView src={service?.img}>
          <img
            className='card-img rounded-lg cursor-pointer'
            src={service?.img}
            alt='Shoes'
          />
        </PhotoView>
      </PhotoProvider>
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
