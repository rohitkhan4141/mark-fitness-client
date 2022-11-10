import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../../components/Form/Form";

const AddService = () => {
  const [service, setService] = useState({});
  const formHandler = (event) => {
    event.preventDefault();
    fetch("https://assingment-11-server.vercel.app/add-services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("user Added Successfully");
          event.target.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  const onchangeHandler = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newService = {
      ...service,
    };
    newService[field] = value;
    setService(newService);
  };
  return (
    <HelmetProvider>
      <ToastContainer />
      <div className='w-full px-10 lg:w-1/2 mx-auto mt-12'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Add Services</title>
        </Helmet>
        <h1 className='text-5xl text-center mb-10 text-white'>Add Service</h1>
        <Form
          button={"add User"}
          formHandler={formHandler}
          onchangeHandler={onchangeHandler}
          placeHold={false}
        />
      </div>
    </HelmetProvider>
  );
};

export default AddService;
