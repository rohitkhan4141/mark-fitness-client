import React, { useContext, useEffect, useState } from "react";
import SingleReviewInfo from "../../components/SingleReviewInfo/SingleReviewInfo";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const MyReviews = () => {
  // const users = useLoaderData();
  const { user } = useContext(AuthContext);
  const [personalReviews, setPersonalReviews] = useState([]);

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
        console.log(data);
        setPersonalReviews(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (id) => {
    const agreed = window.confirm("Are you want to delete user?");
    //   if (agreed) {
    //     fetch(`http://localhost:5000/users/${id}`, {
    //       method: "DELETE",
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data.deletedCount > 0) {
    //           alert("Successfully deleted user");
    //           const remainingUsers = displayedUser.filter(
    //             (usr) => usr._id !== id
    //           );
    //           setDisplayedUser(remainingUsers);
    //         }
    //       })
    //       .catch((err) => console.log(err));
    //   }
  };
  return (
    <div className='w-10/12 mx-auto mt-10'>
      <div className='overflow-x-auto w-full'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Services</th>
              <th>Review</th>
              <th>Email</th>
              {/* <th>Salary</th> */}
            </tr>
          </thead>
          <tbody>
            {personalReviews.map((singleReview) => (
              <SingleReviewInfo
                key={singleReview._id}
                singleReview={singleReview}
                deleteUser={deleteUser}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
