import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './main.css';
import { Outlet } from 'react-router-dom';

export function Main() {
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
  const [ongoingAppointment, setOngoingAppointment] = useState([]);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setIsToday(formData.date === today);
    fetchOngoingAppointment();
  }, [formData.date]);

  const fetchOngoingAppointment = async () => {
    try {
      const response = await axios.get('https://api-for-mbbsjp.vercel.app/api/appointments');
      const appointments = response.data;
      if (appointments.length > 0) {
        const oldestAppointment = appointments[0];
        setOngoingAppointment(oldestAppointment);
      } else {
        setOngoingAppointment(null);
      }
    } catch (error) {
      console.error('Error fetching ongoing appointment:', error);
    }
  };

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
      fetchOngoingAppointment();
    } catch (error) {
      console.error('Error booking appointment:', error.response?.data || error.message);
      setError(error.response?.data?.error || 'An error occurred while booking the appointment.');
    }
  };

  return (
    <div>
      <Outlet/>
      <div className='main'>
        <video autoPlay muted loop id="background-video">
          <source src="https://assets.mixkit.co/videos/43244/43244-360.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>

        <header>
          <div className="container">
           
              <div className="logo">
                
                <a href="/">Home</a>
                <a href="/#gallery">Gallery</a>
                <a href="/#services">Services</a>
                <a href="/#booking">Book Now</a>
              </div>
             
            
          </div>
        </header>


        <main>
          <section className="hero">
            <div className="container">
              <h1>Welcome to MBBS JP</h1>
              <p>Experience the art of grooming like never before</p>
              <a href="#booking" className="cta-button">Book Your Cut</a>
            </div>
          </section>

          <section id="services" className="services container">
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-cut"></i></div>
              <h3>Haircut</h3>
              <p>Precision cuts tailored to your style</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-razor"></i></div>
              <h3>Shave</h3>
              <p>Classic hot towel shaves for a smooth finish</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-paint-brush"></i></div>
              <h3>Color</h3>
              <p>Expert color treatments to express yourself</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-head-side"></i></div>
              <h3>Styling</h3>
              <p>Trendy styles to keep you looking fresh</p>
            </div>
          </section>

          <section id="gallery" className="gallery container">
            <div className="gallery-item">
              <img src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Modern fade haircut on a young man" width="150" height="150" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFpciUyMHN0eWxpbmd8fHx8fHwxNjg1NzIxMjYy&ixlib=rb-4.0.3&q=80&w=1080" alt="Classic pompadour style on a gentleman" width="150" height="150" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFpcmN1dHx8fHx8fDE2ODU3MjEyNjI&ixlib=rb-4.0.3&q=80&w=1080" alt="Trendy textured crop haircut" width="150" height="150" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFpciUyMGNvbG9yaW5nfHx8fHx8MTY4NTcyMTI2Mg&ixlib=rb-4.0.3&q=80&w=1080" alt="Sleek side part with beard trim" width="150" height="150" />
            </div>
          </section>

          <section id="booking" className="booking-form container">
            <h2>Book Your Appointment</h2>
            <form onSubmit={handleSubmit}>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              {success && <p style={{ color: 'green' }}>{success}</p>}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNo">Phone</label>
                <input type="tel" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="services">Service</label>
                <select id="services" name="services" value={formData.services.join(', ')} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option value="haircut">Haircut</option>
                  <option value="shave">Shave</option>
                  <option value="color">Color</option>
                  <option value="styling">Styling</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>
              {!isToday && (
                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
                </div>
              )}
              <div className="form-group">
                <input type="submit" value="Book Now" />
              </div>
            <ul>
            {ongoingAppointment && (
                <div className="ongoing-appointment">
                 <h2>Ongoing Appointments</h2>
                  <p><strong>Token No:</strong> {ongoingAppointment.customerNo}</p>
                  <a href="tel:7266008080" className="button">Call Us</a>
                </div>
              )}
            </ul>
            </form>
          </section>

          <section id="ongoing-appointments" className="container">
            
          </section>
        </main>
      </div>
    </div>
  )
}

export default Main