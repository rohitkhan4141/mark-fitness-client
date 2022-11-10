import React, { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleReviewInfo from "../../components/SingleReviewInfo/SingleReviewInfo";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [personalReviews, setPersonalReviews] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://assingment-11-server.vercel.app/custom-reviews?email=${user.email}`,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem("jwt-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPersonalReviews(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [isFetching]);

  const deleteUser = (id) => {
    const agreed = window.confirm("Are you want to delete user?");
    if (agreed) {
      fetch(
        `https://assingment-11-server-rohitkhan4141.vercel.app/myreviews/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Successfully deleted review");
            setIsFetching(!isFetching);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const updateHandler = (id, updateReview) => {
    fetch(`https://assingment-11-server.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review: updateReview }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("Successfully updated review");
          setIsFetching(!isFetching);
        }
      })
      .catch((err) => console.log(err));
  };

  let render;
  if (personalReviews.length === 0) {
    render = <p className='text-4xl text-center mt-20'>No reviews</p>;
  } else {
    render = (
      <div className='overflow-x-auto w-full'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Services</th>
              <th>Review</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {personalReviews.map((singleReview) => (
              <SingleReviewInfo
                key={singleReview._id}
                singleReview={singleReview}
                deleteUser={deleteUser}
                updateHandler={updateHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <ToastContainer />
      <div className='w-10/12 mx-auto mt-10'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>My Reviews</title>
        </Helmet>
        {loading ? (
          <div className=' w-48 mt-20 mx-auto'>
            <progress className='progress w-56'></progress>
          </div>
        ) : (
          <>{render}</>
        )}
      </div>
    </HelmetProvider>
  );
};

export default MyReviews;
