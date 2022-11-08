import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const SignIn = () => {
  const [error, setError] = useState("");
  const { login, googleAuth, githubAuth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const hendleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((user) => {
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.displayName,
            email: user.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.token) {
              localStorage.setItem("jwt-token", data.token);
              form.reset();
              setError("");
              navigate(from, { replace: true });
            }
          });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };
  const googleLogIn = () => {
    googleAuth()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };
  const githubLogIn = () => {
    githubAuth()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold mb-4'>Please Login now!</h1>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body' onSubmit={hendleSubmit}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
              <label className='label'>
                <Link to='/register' className='label-text-alt link link-hover'>
                  Haven't an accout ? Register!
                </Link>
              </label>
            </div>
            <h6 className='pt-2 text-center text-blue-500 cursor-pointer'>
              Login With
            </h6>
            <div className='w-50 mx-auto py-2 flex gap-4'>
              <FaGoogle
                className='text-center cursor-pointer hover:text-blue-500'
                onClick={googleLogIn}
              />
            </div>
            <span className='text-red-400'>{error}</span>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
