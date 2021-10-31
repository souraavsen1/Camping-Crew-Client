import axios from "axios";
import React, { useEffect, useState } from "react";
import Booking from "./Booking";

const ManageBooking = () => {
  const [bookedPlans, setBookedPlans] = useState([]);
  const [rerender, setRerender] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/all-bookings`)
      .then((res) => res.json())
      .then((data) => {
        setBookedPlans(data);
        setLoading(false);
      });
  }, [rerender]);

  const deleteSingleBooking = (id) => {
    const permission = window.confirm("Are you sure want to cancel ?");
    if (permission) {
      fetch(`http://localhost:5000/remove-booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setRerender(!rerender);
        });
    }
  };

  const data = {status:"Accepted"}

  const handelUpdatesStatus = (id) => {
    const permission = window.confirm("Do you want to accept the reservation ?");
    if (permission) {
      axios.put(`http://localhost:5000/booking/update/${id}`, data)
        .then((res) => {
          console.log(res);
           setRerender(!rerender);
        });
    }
  };

  return (
    <div>
      <div className='py-16 bg-gray-50'>
        <h2 className='text-black font-semibold font_architect text-3xl text-center pb-16'>
          Manage Booked Plans
        </h2>

        {loading && (
          <div class='sk-cube-grid'>
            <div class='sk-cube sk-cube1'></div>
            <div class='sk-cube sk-cube2'></div>
            <div class='sk-cube sk-cube3'></div>
            <div class='sk-cube sk-cube4'></div>
            <div class='sk-cube sk-cube5'></div>
            <div class='sk-cube sk-cube6'></div>
            <div class='sk-cube sk-cube7'></div>
            <div class='sk-cube sk-cube8'></div>
            <div class='sk-cube sk-cube9'></div>
          </div>
        )}

        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {bookedPlans.map((plan) => (
            <Booking
              key={plan._id}
              plan={plan}
              deleteSingleBooking={deleteSingleBooking}
              handelUpdatesStatus={handelUpdatesStatus}
            ></Booking>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageBooking;
