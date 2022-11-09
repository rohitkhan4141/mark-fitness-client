import React from "react";

const SingleReviewInfo = ({ singleReview }) => {
  return (
    <tr>
      <th>
        <label>
          <button
            // onClick={() => deleteUser(user._id)}
            className='btn btn-error'
          >
            X
          </button>
        </label>
        <label>
          {/* <Link to={`/updateuser/${user._id}`} className='btn btn-accent mx-2'>
            <MdOutlineSystemUpdate />
          </Link> */}
        </label>
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
