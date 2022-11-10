import React, { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Review from "../../components/Review/Review";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import "./ServicesDetails.css";

const ServicesDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [isfetching, setIsfetching] = useState(false);
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://assingment-11-server-rohitkhan4141.vercel.app/reviews/${service._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [isfetching]);

  const submitReviewHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.area.value;
    const date = Date.parse(new Date());
    const singleReview = {
      service_id: service._id,
      serviceName: service.name,
      email: user.email,
      img: user.photoURL,
      name: user.displayName,
      review: message,
      date,
    };
    fetch("https://assingment-11-server.vercel.app/add-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setIsfetching(!isfetching);
          form.reset();
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const handleOnClick = () => {
    navigate("/signin", { state: { from: location } });
  };

  return (
    <HelmetProvider>
      <div className='mb-10'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{service?.name}</title>
        </Helmet>
        <div className='w-10/12 mx-auto '>
          <div>
            <div className='flex flex-col gap-10 items-center lg:flex-row lg:justify-evenly lg:shadow-md pt-20 lg:pb-10 pb-16 mb-16 rounded-md text-white'>
              <div className='lg:w-1/2'>
                <h2 className='text-4xl mb-4'>Service Name: {service?.name}</h2>
                <p className='text-lg py-2'>
                  Description: {service?.description}
                </p>
                <p className='text-lg text-bold mt-4'>
                  Price: ${service?.price}
                </p>
              </div>
              <div className='max-w-md details-img'>
                <img className='rounded-md' src={service?.img} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='w-10/12 mx-auto lg:shadow-md pb-10 pl-1 lg:pl-10 '>
          <h2 className='text-3xl pt-5 pb-10'>Reviews</h2>
          <div>
            {reviews.map((review) => (
              <Review key={review._id} review={review} user={user} />
            ))}
          </div>
          {user ? (
            <form onSubmit={submitReviewHandler}>
              <textarea
                className='textarea textarea-success w-full mb-3'
                placeholder='Add your Review'
                name='area'
              ></textarea>
              <button className='btn btn-accent'>Add Review</button>
            </form>
          ) : (
            <>
              <span className='text-lg'>Please login To give Reviw</span>
              <br />
              <button className='btn btn-accent mt-3' onClick={handleOnClick}>
                Login
              </button>

              {/* <Link to='/signin' className='btn btn-accent mt-3'>
              Login
            </Link> */}
            </>
          )}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ServicesDetails;
