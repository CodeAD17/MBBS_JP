import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './home.css';
import {  Outlet } from 'react-router-dom';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    services: [],
    date: '',
    time: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setIsToday(formData.date === today);
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'services') {
      setFormData(prevData => ({
        ...prevData,
        [name]: value.split(',').map(s => s.trim())
      }));
    } else {
      setFormData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    window.open('/appoint')
  
    try {
      const dataToSend = {
        ...formData,
        date: formData.date ? new Date(formData.date).toISOString() : null
      };
  
      const response = await axios.post('https://api-for-mbbsjp.vercel.app/api/appointments', dataToSend);
      console.log('Appointment booked:', response.data);
      setSuccess('Appointment booked successfully!');
      setFormData({
        name: '',
        phoneNo: '',
        services: [],
        date: '',
        time: '',
      });
    } catch (error) {
      console.error('Error booking appointment:', error.response?.data || error.message);
      setError(error.response?.data?.error || 'An error occurred while booking the appointment.');
    }
  };

  return (
    <div>
           
        <Outlet/>
        <div class="parallax-container">
        <div class="parallax-layer parallax-background">
            <video id="barber-bg" autoplay loop muted>
                <source src="https://v1.pinimg.com/videos/iht/720p/94/db/08/94db08af712bf6e7f9f701c67462c24a.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="parallax-layer content">
          <section id="home" className="hero">
            <div className="hero-content">
              <h1 id='mbbs'>Mama Bhanje Barber Shop</h1>
              <p>Experience the art of grooming like never before</p>
              <a href="#booking" className="btn">Book Appointment</a>
            </div>
          </section>
          </div>
          </div>

          <section id="gallery" className="container">
            <h2>Our Work</h2>
            <div className="gallery">
              <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFpcmN1dHx8fHx8fDE2ODU3MjEyNjI&ixlib=rb-4.0.3&q=80&w=1080" alt="Stylish haircut" width="300" height="300" />
              <img src="https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YmVhcmQlMjB0cmltfHx8fHx8MTY4NTcyMTI2Mg&ixlib=rb-4.0.3&q=80&w=1080" alt="Beard trim" width="300" height="300" />
              <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFpciUyMGNvbG9yaW5nfHx8fHx8MTY4NTcyMTI2Mg&ixlib=rb-4.0.3&q=80&w=1080" alt="Hair coloring" width="300" height="300" />
              <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFpciUyMHN0eWxpbmd8fHx8fHwxNjg1NzIxMjYy&ixlib=rb-4.0.3&q=80&w=1080" alt="Hair styling" width="300" height="300" />
            </div>
          </section>

          <section id="services" className="container">
            <h2>Our Services</h2>
            <div className="services">
              <div className="service-card">
                <h3>Precision Cut</h3>
                <p>Haircut only</p>
              </div>
              <div className="service-card">
                <h3>Beard Trim</h3>
                <p>Shape and style your facial hair</p>
              </div>
              <div className="service-card">
                <h3>Hair and Coloring</h3>
                <p>Transform your look with vibrant colors</p>
              </div>
              <div className="service-card">
                <h3>Hair and Shave</h3>
                <p>Hair Cut + Shave </p>
              </div>
            </div>
          </section>

          <section id="booking" className="container">
            <h2>Book an Appointment</h2>
            <form className="booking-form"  onSubmit={handleSubmit} >
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
              type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required />
              </div>
              <div className="form-group">
                <label htmlFor="number">Phone No.</label>
                <input type="tel"
          id="phoneNo"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          required />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service</label>
                <select  type="text"
          id="services"
          name="services"
          value={formData.services.join(', ')}
          onChange={handleChange}
          required>
                  <option value="">Select a service</option>
                  <option value="Hair-cut">Hair Cut</option>
                  <option value="beard-trim">Beard Trim</option>
                  <option value="hair-coloring">Hair Coloring</option>
                  <option value="hot-towel-shave">Shave</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          disabled={isToday} />
              </div>
              <a href="/appoint" type='submit' className='btn' onClick={handleSubmit}>Book Now</a>
             
            </form>
          </section>
         
            <section id="contact" className="container">
              <h2>Visit Us</h2>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap"}}>
                <div>
                  <h3 style={{color: "#ffd700"}}>Location</h3>
                  <p>Para</p>
                  <p>Rajajipuram, Lucknow</p>
                </div>
                <div>
                  <h3 style={{color: "#ffd700"}}>Hours</h3>
                  <p>Monday - Friday: 9am - 8pm</p>
                  <p>Saturday: 10am - 6pm</p>
                  <p style={{color: "red"}}>Tuseday: Closed</p>
                </div>
                <div>
                  <h3 style={{color: "#ffd700"}}>Contact</h3>
                  <p>Phone: +91-123456789</p>
                  <p>Email: <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="31585f575e71545d584554524445421f585e">mbbs_jp@gmail.com</a></p>
                </div>
              </div>
            </section>
          <footer>
            <p>© 2024 MBBS_JP. All rights reserved.</p>
          </footer> 
    </div>
  )
}