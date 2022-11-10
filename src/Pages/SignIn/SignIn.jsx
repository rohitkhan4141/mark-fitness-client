import React, { useContext, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const SignIn = () => {
  const [error, setError] = useState("");
  const { login, googleAuth, setLoading } = useContext(AuthContext);
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
        fetch("https://assingment-11-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.user.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.token) {
              localStorage.setItem("jwt-token", data.token);
              setLoading(false);
              form.reset();
              setError("");
              navigate(from, { replace: true });
            }
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const googleLogIn = () => {
    googleAuth()
      .then((user) => {
        fetch("https://assingment-11-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.user.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.token) {
              localStorage.setItem("jwt-token", data.token);
              setLoading(false);
              form.reset();
              setError("");
              navigate(from, { replace: true });
            }
          });
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Login</title>
        </Helmet>
        <div className='hero-content flex-col w-10/12 mx-auto'>
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
                  <Link
                    to='/register'
                    className='label-text-alt link link-hover'
                  >
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
                <button className='btn btn-accent'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default SignIn;
