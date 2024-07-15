import React, { Component } from 'react'
import './App.css';

export class App extends Component {
    render() {
      return (
        <div>
          <header>
            <nav className="container">
              <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#booking">Book Now</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
              </div>
            </nav>
          </header>

          <section id="home" className="hero" style={{background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') no-repeat center center/cover"}}>
            <h1 className="fade-in-up">Mama Bhanje Barber Shop</h1>
            <p className="fade-in-up">Experience the pinnacle of grooming excellence<br /> By The Best Barber Shop From last 2 Years<br /> in Para Rajajipuram Lucknow</p>
            <p className="fade-in-up">GOOGLE RATING OF: &#11088;4.7 </p>
            <a href="#booking" className="btn fade-in-up">Book Your Session</a>
          </section>

          <section id="services" className="services container">
            <h2>Our Premium Services</h2>
            <div className="service-grid">
              <div className="service-card">
                <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFpcmN1dHx8fHx8fDE2ODU3MjEyNjI&ixlib=rb-4.0.3&q=80&w=200" alt="Precision Cut"/>
                <h3>Precision Cut</h3>
                <p>Tailored haircuts for the modern gentleman</p>
              </div>
              <div className="service-card">
                <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YmVhcmQtdHJpbXx8fHx8fDE2ODU3MjEyNjI&ixlib=rb-4.0.3&q=80&w=200" alt="Beard Sculpting"/>
                <h3>Beard Sculpting</h3>
                <p>Expert beard trimming and shaping</p>
              </div>
              <div className="service-card">
                <img src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG90LXRvd2VsLXNoYXZlfHx8fHx8MTY4NTcyMTI2Mg&ixlib=rb-4.0.3&q=80&w=200" alt="Luxury Shave"/>
                <h3>Luxury Shave</h3>
                <p>Indulgent hot towel shave experience</p>
              </div>
              <div className="service-card">
                <img src="https://images.unsplash.com/photo-1554519934-e32b1629d9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFpci1jb2xvcnx8fHx8fDE2ODU3MjEyNjI&ixlib=rb-4.0.3&q=80&w=200" alt="Color Treatment"/>
                <h3>Color Treatment</h3>
                <p>Premium hair coloring and highlights</p>
              </div>
            </div>
          
            <div className="service-details" style={{marginTop: "3rem", backgroundColor: "var(--secondary-color)", padding: "2rem", borderRadius: "10px"}}>
              <h3 style={{color: "var(--accent-color)", marginBottom: "1rem"}}>Elevate Your Grooming Experience</h3>
              <p>At Elite Cuts, we offer more than just haircuts. Our comprehensive range of services is designed to cater to every aspect of men's grooming:</p>
              <ul style={{listStyleType: "none", paddingLeft: 0}}>
                <li style={{marginBottom: "1rem"}}>
                  <strong style={{color: "var(--accent-color)"}}>Executive Grooming Package:</strong> A complete makeover including haircut, beard trim, and facial treatment.
                </li>
                <li style={{marginBottom: "1rem"}}>
                  <strong style={{color: "var(--accent-color)"}}>Scalp Treatments:</strong> Revitalize your scalp with our nourishing and rejuvenating treatments.
                </li>
                <li style={{marginBottom: "1rem"}}>
                  <strong style={{color: "var(--accent-color)"}}>Hair Styling:</strong> From classic pompadours to modern textured looks, our stylists can create any style you desire.
                </li>
                <li style={{marginBottom: "1rem"}}>
                  <strong style={{color: "var(--accent-color)"}}>Facial Treatments:</strong> Cleanse, exfoliate, and nourish your skin with our premium facial treatments.
                </li>
                <li>
                  <strong style={{color: "var(--accent-color)"}}>Grooming Products:</strong> Take home our curated selection of high-quality grooming products to maintain your look.
                </li>
              </ul>
              <p style={{marginTop: "1rem"}}>Each service is performed by our expert stylists using premium products and techniques. Experience the Elite Cuts difference today!</p>
            </div>
          </section>

          <section id="booking" className="container">
            <form className="booking-form fade-in-up" action="/book" method="GET">
              <h2 style={{color: "var(--accent-color)", textAlign: "center", marginBottom: "1.5rem"}}>Book Your Elite Experience</h2>
              <div className="form-group">
                <label htmlFor="service">Select Service</label>
                <select id="service" name="service" required>
                  <option value="">Choose a service</option>
                  <option value="precision-cut">Precision Cut</option>
                  <option value="beard-sculpting">Beard Sculpting</option>
                  <option value="luxury-shave">Luxury Shave</option>
                  <option value="color-treatment">Color Treatment</option>
                  <option value="full-package">Full Grooming Package</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="stylist">Choose Stylist</label>
                <select id="stylist" name="stylist" required>
                  <option value="">Select a stylist</option>
                  <option value="alex">Alex - Master Barber</option>
                  <option value="sam">Sam - Color Specialist</option>
                  <option value="jordan">Jordan - Beard Expert</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Select Date</label>
                <input type="date" id="date" name="date" required/>
              </div>
              <div className="form-group">
                <label htmlFor="time">Select Time</label>
                <input type="time" id="time" name="time" required/>
              </div>
              <button type="submit" className="btn">Confirm Booking</button>
            </form>
          </section>

          <section id="testimonials" className="testimonials">
            <div className="container">
              <h2>What Our Clients Say</h2>
              <div className="testimonial-slider">
                <div className="testimonial-slide">
                  <div className="testimonial-card">
                    <img src="https://lh3.googleusercontent.com/a-/ALV-UjW7C1xaebPGEUP9NvVwUCWJXgsY-AMqpnbmPxsA4nim-xjh0ABR=w75-h75-p-rp-mo-ba4-br100" alt="John Doe"/>
                    <h3>NIRMAL PAL</h3>
                    <h3>&#11088;&#11088;&#11088;&#11088;&#11088;</h3>
                    <h5>10 months ago</h5>
                    <p>"Overall good experience"</p>
                  </div>
                  <div className="testimonial-card">
                    <img src="https://lh3.googleusercontent.com/a-/ALV-UjWt2OrMamJjPk2Sdabm9FkHZKnJFC2T53M7v-9aeXTavbf9I4k=w75-h75-p-rp-mo-ba2-br100" alt="John Doe"/>
                    <h3>Parikshit Mishra</h3>
                    <h3>&#11088;&#11088;&#11088;&#11088;&#11088;</h3>
                    <h5>11 months ago</h5>

                    <p>"One of the Best hair salon in this area."</p>
                  </div>
                  <div className="testimonial-card">
                    <img src="https://lh3.googleusercontent.com/a-/ALV-UjUXKE1PPQ74n-oGJCh9bohUADJotKgcg-NMyVcsu50lrqIQbPM=w75-h75-p-rp-mo-ba3-br100" alt="John Doe"/>
                    <h3>Ajay Singh</h3>
                    <h3>&#11088;&#11088;&#11088;&#11088;&#11088;</h3>
                    <h5>2 Years ago</h5>

                    <p>"By The Best Barber Shop From last 2 Years"</p>
                  </div>
                  <div className="testimonial-card">
                    <img src="https://lh3.googleusercontent.com/a-/ALV-UjXrk8CknC1lZ2gKM5YJ_Cmfp2UkFgpcJxcPKwXqC6oHYQlUquA3=w75-h75-p-rp-mo-br100" alt="John Doe"/>
                    <h3>ठा. आर्यन प्रताप सिंह</h3>
                    <h3>&#11088;&#11088;&#11088;&#11088;&#11088;</h3>
                    <h5>7 months ago</h5>

                    <p>"Good job"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }
}

export default App
