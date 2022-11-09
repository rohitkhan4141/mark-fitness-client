import React, { useState } from "react";

const SingleReviewInfo = ({ singleReview, deleteUser, updateHandler }) => {
  const [updateReview, setUpdateReview] = useState("");
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => deleteUser(singleReview._id)}
            className='btn btn-error'
          >
            X
          </button>
        </label>
        <label htmlFor='my-modal' className='btn btn-accent mx-2'>
          update
        </label>

        <input type='checkbox' id='my-modal' className='modal-toggle' />
        <div className='modal'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg mb-3'>Update Review</h3>
            <form>
              <textarea
                className='textarea textarea-success w-full mb-3'
                placeholder='update Review'
                name='area'
                onChange={(e) => setUpdateReview(e.target.value)}
              ></textarea>
              <div className='modal-action'>
                <label
                  onClick={() => updateHandler(singleReview._id, updateReview)}
                  htmlFor='my-modal'
                  className='btn btn-accent'
                >
                  Update
                </label>
              </div>
            </form>
          </div>
        </div>
      </th>
      <td>
        <div className='flex items-center space-x-3'>
          <div>
            <div className='font-bold'>{singleReview?.serviceName}</div>
          </div>
        </div>
      </td>
      <td>
        <span className='badge badge-ghost badge-sm p-3'>
          {singleReview?.review}
        </span>
      </td>
      <td>{singleReview?.email}</td>
    </tr>
  );
};

export default SingleReviewInfo;
