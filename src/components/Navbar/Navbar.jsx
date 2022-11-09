import React, { useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  const navlink = (
    <>
      <li className='mx-3'>
        <Link to='/'>Home</Link>
      </li>
      <li className='mx-3'>
        <Link to='/myreviews'>My Reviews</Link>
      </li>
      <li className='mx-3'>
        <Link to='/addservices'>Add Service</Link>
      </li>
      {user ? (
        <>
          <div
            className='tooltip tooltip-bottom'
            data-tip={
              user?.displayName ? user?.displayName : "Havent Share Name"
            }
          >
            {user?.photoURL ? (
              <img
                className='w-10 h-10 rounded-full mx-4'
                src={user?.photoURL ? user.photoURL : ""}
                alt=''
              />
            ) : (
              <BsFillPersonFill />
            )}
          </div>
          <button onClick={handleLogout} className='btn btn-ghost'>
            logout
          </button>
        </>
      ) : (
        <>
          <li className='mx-3'>
            <Link to='/signin'>Login</Link>
          </li>
          <li className='mx-3'>
            <Link to='/register'>Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className='navbar bg-base-100 justify-between'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navlink}
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>{navlink}</ul>
      </div>
    </div>
  );
};

export default Navbar;
