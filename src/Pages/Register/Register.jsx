import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, googleAuth, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  const hendleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    console.log(name, photoUrl);

    createUser(email, password)
      .then((userdata) => {
        const user = userdata.user;
        form.reset();
        setError("");
        handleUpdateUserProfile(name, photoUrl);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const googleLogIn = () => {
    googleAuth()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className='hero min-h-screen bg-base-200'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Register</title>
      </Helmet>
      <div className='hero-content flex-col w-10/12 mx-auto'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold mb-3'>Register!</h1>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body' onSubmit={hendleSubmit}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                required
                placeholder='name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                required
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>PhotoUrl</span>
              </label>
              <input
                type='text'
                name='photoURL'
                required
                placeholder='photoUrl'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                required
                placeholder='password'
                className='input input-bordered'
              />
              <label className='label'>
                <Link to='/signin' className='label-text-alt link link-hover'>
                  Have an account? Login
                </Link>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
