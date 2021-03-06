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
              className='font_architect font-semibold text-xl md:text-2xl'
              href='/'
            >
              Camping Crew
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto my-auto flex justify-around items-center text-gray-50 xs:mt-4 md:mt-0'>
              <Link
                className='mr-4 font-semibold my-2 md:my-0 hover:text-black  text-gray-800'
                to='/'
              >
                Home
              </Link>

              <Link
                className='mr-4 font-semibold  my-2 md:my-0 hover:text-black  text-gray-800'
                to='/all-plans'
              >
                All Plans
              </Link>
              {user.email && (
                <>
                  <Link
                    className='mr-4 font-semibold  my-2 md:my-0 hover:text-black  text-gray-800'
                    to='/my-plans'
                  >
                    My Plans
                  </Link>

                  <Link
                    className='mr-4 font-semibold  my-2 md:my-0 hover:text-black  text-gray-800'
                    to='/manage-bookings'
                  >
                    Manage Plans
                  </Link>

                  <Nav.Link className='flex flex-col md:flex-row justify-center md:justify-between items-center mr-2'>
                    <div class='dropdown'>
                      <img
                        title={user?.displayName}
                        className='rounded-full mr-2'
                        src={userimg}
                        width='40px'
                        alt='img'
                        type='button'
                        id='dropdownMenu2'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      />
                      <div
                        class='dropdown-menu dropdown-menu-right py-2 mt-2 shadow-sm bg-yellow-100 bg-opacity-80 backdrop-filter backdrop-blur-md'
                        aria-labelledby='dropdownMenu2'
                      >
                        <button
                          class='dropdown-item font-extrabold'
                          type='button'
                        >
                          {user?.displayName}
                        </button>
                        <button class='dropdown-item' type='button'>
                          Settings
                        </button>
                        <hr></hr>
                        <button class='dropdown-item' type='button'>
                          Help
                        </button>
                      </div>
                    </div>
                  </Nav.Link>
                </>
              )}
            </Nav>

            <div className='flex justify-center items-center xs:pt-4 md:pt-0'>
              {user.email ? (
                <Link
                  className='px-3 py-1 font-semibold rounded-md hover:bg-opacity-30 my-2 md:my-0 hover:text-black text-gray-900 bg-gray-500 bg-opacity-20'
                  to='/'
                  onClick={googleSignOut}
                >
                  Sign out
                </Link>
              ) : (
                <div>
                  <Link
                    className='px-3 mr-2 font-semibold py-1 rounded-md hover:bg-opacity-30  my-2 md:my-0 hover:text-black  text-gray-900 bg-gray-500 bg-opacity-20'
                    to='/signup'
                  >
                    Sign up
                  </Link>
                  <Link
                    className='px-3 py-1 font-semibold rounded-md hover:bg-opacity-30  my-2 md:my-0 hover:text-black  text-gray-900 bg-gray-500 bg-opacity-20'
                    to='/signin'
                  >
                    Sign in
                  </Link>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
