import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import service from "../../../Images/campsite15.jpg";

const AllPlans = () => {
  const [allplans, setAllPlans] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/all-plans`)
      .then((res) => res.json())
      .then((data) => {
        setAllPlans(data);
      });
  }, []);

  return (
    <div>
      <div className='py-16'>
        <h4 className='text-3xl text-black pb-16 font-extrabold text-center font_architect '>
          Our Plans
        </h4>
        <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
          <Link to='/add-plans' className='mx-auto flex justify-center items-center text-black'>
            <div className='w-40 h-40 z-0 p-4 rounded border border-black border-dashed bg-yellow-100 bg-opacity-60 flex flex-col justify-center items-center shadow-md'>
              <h2 className='text-center font-bold text-5xl'>+</h2>
            </div>
          </Link>

          {allplans.map((eachplan) => (
            <div className='mx-auto' key={eachplan._id}>
              <div>
                <img
                  src={eachplan.image ? eachplan.image : service}
                  className='rounded h-48 w-56 z-30 shadow-md mb-2'
                  alt=''
                />
              </div>
              <div className='w-60 z-0 px-2 ml-4 pt-40 pb-4 rounded -mt-40 bg-yellow-100 flex flex-col items-center justify-center shadow-md'>
                <h2 className='text-center font-bold text-lg'>
                  {eachplan.name}
                </h2>
                <h2 className='text-center text-sm'>
                  {eachplan.description.slice(0, 50)}...
                </h2>
                <Link
                  to={`/plans/${eachplan._id}`}
                  className='explore_btn mt-2 text-center text-black w-28 font-semibold bg-yellow-300 py-1 rounded'
                >
                  Explore <i class='fas fa-arrow-right btn_animation'></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPlans;
