import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../../../../index.css";
import logo from "../../../../../Images/camping-crew.png";
import useralogo from "../../../../../Images/user.png";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const NavbarSection = () => {
  const { user, googleSignOut } = useAuth();

  let userimg;

  //  if image is not available then the default avatar will be shown
  if (user.photoURL) {
    userimg = user.photoURL;
  } else {
    userimg = useralogo;
  }

  return (
    <div className='sticky top-0 z-50'>
      <Navbar
        className='lg:h-16 py-3 bg-yellow-300 bg-opacity-90 backdrop-filter backdrop-blur-lg text-white'
        // variant='dark'
        expand='lg'
      >
        <Container className='mx-auto lg:mx-24 md:mx-20'>
          <div className='flex justify-center items-center'>
            <img src={logo} className='mr-2' width='60px' alt='' />
            <Navbar.Brand
              className='font_architect font-semibold text-2xl'
              href='#home'
            >
              Camping Crew
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto my-auto flex flex-row justify-around items-center text-gray-50 lg:pt-0 sm:pt-4 xs:pt-4'>
              <Link
                className='mr-4 font-semibold my-auto hover:text-black  text-gray-800'
                to='/'
              >
                Home
              </Link>

              <Link
                className='mr-4 font-semibold my-auto hover:text-black  text-gray-800'
                to='/'
              >
                Link1
              </Link>

              <Link
                className='mr-4 font-semibold my-auto hover:text-black  text-gray-800'
                to='/'
              >
                Link2
              </Link>

              <Link
                className='mr-4 font-semibold my-auto hover:text-black  text-gray-800'
                to='/'
              >
                Link3
              </Link>

              {user.email && (
                <div className='flex flex-col md:flex-row justify-center md:justify-between items-center mr-2'>
                  <img
                    title={user.displayName}
                    className='rounded-full mr-2'
                    src={userimg}
                    width='40px'
                    alt='img'
                  />
                  {/* <h4 className="text-black">{user.displayName}</h4> */}
                </div>
              )}
            </Nav>
          </Navbar.Collapse>

          {user.email ? (
            <Link
              className='px-3 py-1 font-semibold rounded-md hover:bg-opacity-30 my-auto hover:text-black  text-gray-900 bg-gray-500 bg-opacity-20'
              to='/'
              onClick={googleSignOut}
            >
              Sign out
            </Link>
          ) : (
            <div>
              <Link
                className='px-3 mr-2 font-semibold py-1 rounded-md hover:bg-opacity-30 my-auto hover:text-black  text-gray-900 bg-gray-500 bg-opacity-20'
                to='/signup'
              >
                Sign up
              </Link>
              <Link
                className='px-3 py-1 font-semibold rounded-md hover:bg-opacity-30 my-auto hover:text-black  text-gray-900 bg-gray-500 bg-opacity-20'
                to='/signin'
              >
                Sign in
              </Link>
            </div>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSection;