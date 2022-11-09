import React from "react";

const Review = ({ review, user }) => {
  return (
    <div>
      <div className='flex gap-20 mb-10 items-center'>
        <div className='flex items-center gap-3'>
          <div className='avatar'>
            <div className='w-16 rounded-full'>
              <img src={review?.img} alt='' />
            </div>
          </div>
          <h3>{review?.name}</h3>
        </div>
        <div>
          <p>{review?.review}</p>
        </div>
      </div>
      <div className='divider'></div>
    </div>
  );
};

export default Review;
