import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaDumbbell } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { IoIosBody } from "react-icons/io";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Plan from "../../components/Plan/Plan";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

// GiMuscleUp

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://assingment-11-server.vercel.app/services-home")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Home</title>
        </Helmet>
        <Hero />
        <div className='w-10/12 mx-auto my-24 '>
          <h2 className='text-4xl text-center py-16 text-white'>
            Whats Is Your Primary Fitness Goal
          </h2>
          <div className='flex flex-col md:flex-row justify-evenly items-center cursor-pointer gap-10'>
            <div className='flex flex-col items-center justify-center align-middle border border-accent rounded-lg p-16'>
              <GiMuscleUp className='text-9xl text-accent' />
              <h3 className='text-xl mt-6'>I Want to Build Muscle</h3>
            </div>
            <div className='flex flex-col items-center justify-center align-middle border border-accent rounded-lg lg:p-16 cursor-pointer p-20'>
              <IoIosBody className='text-9xl text-accent body' />
              <h3 className='text-xl mt-6'>I Want to get Lean</h3>
            </div>
            <div className='flex flex-col items-center justify-center align-middle border border-accent rounded-lg lg:p-16 cursor-pointer px-14 py-16'>
              <FaDumbbell className='text-9xl text-accent' />
              <h3 className='text-xl mt-6'>I Want to Build Strength</h3>
            </div>
          </div>
        </div>
        <div className='mb-6'>
          <h2 className='text-4xl text-center pb-20 text-white'>Services</h2>
          <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-self-center self-center justify-items-center gap-8 lg:gap-0'>
            {services.map((singleService) => (
              <ServiceCard key={singleService._id} service={singleService} />
            ))}
          </div>
          <div className='flex justify-center items-center mt-10'>
            <Link to='/services' className='btn btn-accent text-white'>
              Show More
            </Link>
          </div>
        </div>
        <div>
          <h2 className='text-4xl text-center p-16 text-white '>
            Get A Custom Plan
          </h2>
          <div className=' w-full px-10 lg:px-0 lg:w-1/2 mx-auto'>
            <div>
              <Plan />
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
