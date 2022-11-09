import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Review from "../../components/Review/Review";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import "./ServicesDetails.css";

const ServicesDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://assingment-11-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);
  const service = useLoaderData();
  return (
    <div>
      <div className='w-10/12 mx-auto '>
        <div>
          <div className='flex flex-col gap-10 items-center lg:flex-row lg:justify-evenly lg:shadow-md pt-20 lg:pb-10 pb-16 mb-16 rounded-md text-white'>
            <div className='lg:w-1/2'>
              <h2 className='text-4xl mb-4'>Service Name: {service?.name}</h2>
              <p className='text-lg py-2'>
                Description: {service?.description}
              </p>
              <p className='text-lg text-bold mt-4'>Price: ${service?.price}</p>
            </div>
            <div className='max-w-md details-img'>
              <img className='rounded-md' src={service?.img} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-10/12 mx-auto lg:shadow-md'>
        <h2 className='text-3xl pt-5 pb-10'>Reviews</h2>
        <div>
          {reviews.map((review) => (
            <Review key={review._id} review={review} user={user} />
          ))}
        </div>
      </div>
      {user ? <div></div> : <>Login for Review</>}
    </div>
  );
};

export default ServicesDetails;
