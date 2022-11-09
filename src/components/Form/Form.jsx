import React from "react";

const Form = ({ formHandler, onchangeHandler }) => {
  return (
    <form onSubmit={formHandler}>
      <div className='grid grid-cols-1 gap-5 mt-5'>
        <input
          type='text'
          name='name'
          placeholder='Service Name'
          className='input input-bordered input-success w-full'
          onBlur={onchangeHandler}
        />
        <input
          type='text'
          name='img'
          placeholder='Photo Url'
          className='input input-bordered input-success w-full'
          onBlur={onchangeHandler}
        />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <input
            name='price'
            type='number'
            placeholder='Price'
            className='input input-bordered input-success w-full'
            onBlur={onchangeHandler}
          />
          <input
            name='phone'
            type='number'
            placeholder='Phone Number'
            className='input input-bordered input-success w-full'
            onBlur={onchangeHandler}
          />
        </div>
        <textarea
          className='textarea textarea-success'
          name='description'
          placeholder='Description'
          onBlur={onchangeHandler}
        ></textarea>
      </div>

      <div className='flex items-center justify-center mt-5'>
        <button className='btn btn-accent'>Add Service</button>
      </div>
    </form>
  );
};

export default Form;
