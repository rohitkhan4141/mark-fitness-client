import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

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
      <div>
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-self-center self-center justify-items-center'>
          {services.map((singleService) => (
            <ServiceCard key={singleService._id} service={singleService} />
          ))}
        </div>
        <div className='flex justify-center items-center mt-10'>
          <button className='btn btn-primary'>Show More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
