import React, { useState, useEffect } from 'react';
import "./submit.css";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Submit() {
  const [latestAppointment, setLatestAppointment] = useState(null);
  const [lastCustomerNo, setLastCustomerNo] = useState(null);
  const [ongoingAppointment, setOngoingAppointment] = useState(null);

  useEffect(() => {
    fetchLatestAppointment();
    fetchOngoingAppointment();

    const timer = setInterval(() => {
      fetchLatestAppointment();
      fetchOngoingAppointment();
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
      } else {
        setLatestAppointment(null);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const fetchOngoingAppointment = async () => {
    try {
      const response = await axios.get('https://api-for-mbbsjp.vercel.app/api/appointments/ongoing');
      setOngoingAppointment(response.data);
    } catch (error) {
      console.error('Error fetching ongoing appointment:', error);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      const response = await axios.delete(`https://api-for-mbbsjp.vercel.app/api/appointments/${id}`);
      if (response.status === 200) {
        setLatestAppointment(null);
        fetchLatestAppointment();
        // You can add a notification here to inform the user that the appointment was cancelled
        alert('Appointment cancelled successfully');
      }
    } catch (error) {
      console.error('Error deleting appointment:', error);
      alert('Failed to cancel appointment. Please try again.');
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
      <video autoPlay muted loop id="background-video1">
        <source src="https://assets.mixkit.co/videos/43244/43244-360.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlayq"></div>
      <div id="bbd">
        <div className="container1">
          <h1 id='head'>Appointment Confirmed</h1>
          {latestAppointment && (
            <div className="confirmation-details1">
               <p><strong>Token No:</strong> {latestAppointment.customerNo}</p>
              <p><strong>Name:</strong> <span id="name">{latestAppointment.name}</span></p>
              <p><strong>Date:</strong> <span id="date">{new Date(latestAppointment.date).toLocaleDateString()}</span></p>
              <p><strong>Time:</strong> <span id="time">{formatTime(latestAppointment.time)}</span></p>
              <p><strong>Service:</strong> <span id="service">{latestAppointment.services.join(', ')}</span></p>
              <button onClick={() => deleteAppointment(latestAppointment._id)} className='button' style={{backgroundColor: "#ff4136"}}>Cancel</button>
            </div>
          )}
          {ongoingAppointment && (
            <div className="ongoing-appointment">
              <h2>Ongoing Appointment</h2>
              <p><strong>Token No:</strong> {ongoingAppointment.customerNo}</p>
            </div>
          )}
          <div className="contact-info1">
            <p>Need to make changes?</p>
            <a href="tel:9862893337" className="button">Call Us</a>
          </div>
        </div>
        <div className="social-links1">
          <a href="https://facebook.com/barberchic"><i className="fab fa-facebook"></i></a>
          <a href="https://instagram.com/barberchic"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com/barberchic"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  );
}