import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://assingment-11-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  return (
    <HelmetProvider>
      <div className='mb-10'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Services</title>
        </Helmet>
        <h1 className='text-center text-5xl mb-10 font-bold mt-5 text-accent '>
          My Services
        </h1>
        {loading ? (
          <div className=' w-48 mt-20 mx-auto'>
            <progress className='progress w-56'></progress>
          </div>
        ) : (
          <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 place-self-center self-center justify-items-center'>
            {services.map((singleService) => (
              <ServiceCard key={singleService._id} service={singleService} />
            ))}
          </div>
        )}
      </div>
    </HelmetProvider>
  );
};

export default Services;
