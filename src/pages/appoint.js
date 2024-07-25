import React, { Component, useState, useEffect } from 'react'
import "./appoint.css";
import "./home";
import { Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Appoint() {
  const [latestAppointment, setLatestAppointment] = useState(null);
  const [lastCustomerNo, setLastCustomerNo] = useState(null);

  useEffect(() => {
    fetchLatestAppointment();

    const timer = setInterval(() => {
      fetchLatestAppointment();
    }, 10000); // 10 seconds in milliseconds

    return () => clearInterval(timer);
  }, []);

  const fetchLatestAppointment = async () => {
    try {
      const response = await axios.get('https://api-for-mbbsjp.vercel.app/api/appointments');
      const appointments = response.data;
      if (appointments.length > 0) {
        const newLatestAppointment = appointments[appointments.length - 1];
        if (newLatestAppointment.customerNo !== lastCustomerNo) {
          setLatestAppointment(newLatestAppointment);
          setLastCustomerNo(newLatestAppointment.customerNo);
          // Notify here (e.g., show a notification or play a sound)
          console.log('New appointment received!');
        }
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const updateAppointmentStatus = async (id, status) => {
    try {
      await axios.patch(`https://api-for-mbbsjp.vercel.app/api/appointments/${id}`, { status });
      fetchLatestAppointment();
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  const location = useLocation();
  const { name, phone, service, date, time } = location.state || {};

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes} ${ampm}`;
  };
  const handleCallCustomer = (phoneNo) => {
    window.location.href = "tel:9862893337";
};

  return (
    <div>
       <div>
      <h2>Latest Appointment</h2>
      {latestAppointment && (
        <div key={latestAppointment.customerNo}>
          <div className="container">
            <div className="confirmation-card">
              <h2>Appointment Details</h2>
              <div className="confirmation-details">
                <div className="detail-item">
                  <span className="detail-label">Tocken No.:</span>
                  <span>{latestAppointment.customerNo}</span>
                  
                </div>
                <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span>{latestAppointment.name}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Phone no.:</span>
                  <span>{latestAppointment.phoneNo}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Service:</span>
                  <span>{latestAppointment.services.join(', ')}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Date:</span>
                  <span>{new Date(latestAppointment.date).toLocaleDateString()}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Estimated Time:<br />   wait for 2 min here<br /> apko time pata lag jaiga </span>
                  <span>{formatTime(latestAppointment.time)}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Status:</span>
                  <span>{latestAppointment.status}</span>
                </div>
              </div>
              <div className="actions">
              <button className='btn' onClick={() => handleCallCustomer()}>Call</button>
                <button onClick={() => updateAppointmentStatus(latestAppointment._id, 'accepted')} className="btn">Accept</button>
                <button onClick={() => updateAppointmentStatus(latestAppointment._id, 'cancelled')} className="btn" style={{backgroundColor: "#ff4136"}}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}  
    </div>
    </div>
  )
}