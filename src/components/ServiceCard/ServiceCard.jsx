import React from "react";

const ServiceCard = ({ service }) => {
  const { name, description, price, img } = service;
  return (
    <div className='card w-80 bg-base-100 shadow-xl'>
      <figure>
        <img className='card-img' src={img} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{description.slice(0, 50) + "...  "} </p>
        <p>Price: ${price}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
