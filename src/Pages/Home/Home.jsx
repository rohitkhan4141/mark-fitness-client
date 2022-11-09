import { useEffect, useState } from "react";
import { FaDumbbell } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { IoIosBody } from "react-icons/io";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
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
    <div>
      <Hero />
      <div className='w-10/12 mx-auto my-20'>
        <h2 className='text-4xl text-center py-16 text-white'>
          Whats Is Your Primary Fitness Goal
        </h2>
        <div className='flex justify-evenly items-center cursor-pointer'>
          <div className='flex flex-col items-center justify-center align-middle border border-accent rounded-lg p-16'>
            <GiMuscleUp className='text-9xl text-accent' />
            <h3 className='text-xl mt-6'>I Want to Build Muscle</h3>
          </div>
          <div className='flex flex-col items-center justify-center align-middle border border-accent rounded-lg p-16 cursor-pointer'>
            <IoIosBody className='text-9xl text-accent' />
            <h3 className='text-xl mt-6'>I Want to get Lean</h3>
          </div>
          <div className='flex flex-col items-center justify-center align-middle border border-accent rounded-lg p-16 cursor-pointer'>
            <FaDumbbell className='text-9xl text-accent' />
            <h3 className='text-xl mt-6'>I Want to Build Strength</h3>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-4xl text-center pb-16 text-white'>Services</h2>
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-self-center self-center justify-items-center'>
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
    </div>
  );
};

export default Home;
