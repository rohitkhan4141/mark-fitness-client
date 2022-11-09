import React from "react";

const Plan = () => {
  return (
    <form>
      <div className='grid grid-cols-1 gap-5 mt-5'>
        <input
          type='text'
          name='name'
          placeholder='Service Name'
          className='input input-bordered input-success w-full'
        />
        <input
          type='email'
          name='img'
          placeholder='Your Email'
          className='input input-bordered input-success w-full'
        />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <input
            name='price'
            type='number'
            placeholder='Your Age'
            className='input input-bordered input-success w-full'
          />
          <input
            name='phone'
            type='number'
            placeholder='Phone Number'
            className='input input-bordered input-success w-full'
          />
        </div>
        <textarea
          className='textarea textarea-success'
          name='description'
          placeholder='Your Idea'
        ></textarea>
      </div>

      <div className='flex items-center justify-center mt-5'>
        <button className='btn btn-accent'>Get Plan</button>
      </div>
    </form>
  );
};

export default Plan;
