import React from "react";

const Review = ({ review, user }) => {
  console.log(user);
  return (
    <div>
      <div className='flex gap-20 mb-10 items-center'>
        <div className='flex items-center gap-3'>
          <div className='avatar'>
            <div className='w-16 rounded-full'>
              <img src={user?.photoURL} alt='' />
            </div>
          </div>
          <h3>{user?.displayName}</h3>
        </div>
        <div>{review.email}</div>
      </div>
      <div className='divider'></div>
    </div>
  );
};

export default Review;
