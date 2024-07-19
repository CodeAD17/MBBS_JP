import React, { Component } from 'react';


export class App extends Component {
    render() {
      return (
        <div>
          <header>
            <nav className="container">
              <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#gallery">Gallery</a>
                <a href="#services">Services</a>
                <a href="#booking">Book Now</a>
              </div>
            </nav>
          </header>

          <section id="home" className="hero">
            <div className="hero-content">
              <h1 id='mbbs'>Mama Bhanje Barber Shop</h1>
              <p>Experience the art of grooming like never before</p>
              <a href="#booking" className="btn">Book Appointment</a>
            </div>
          </section>

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
            <form className="booking-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="number">Phone No.</label>
                <input type="number" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service</label>
                <select id="service" name="service" required>
                  <option value="">Select a service</option>
                  <option value="precision-cut">Hair Cut</option>
                  <option value="beard-trim">Beard Trim</option>
                  <option value="hair-coloring">Hair Coloring</option>
                  <option value="hot-towel-shave">Shave</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" required />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input type="time" id="time" name="time" required />
              </div>
              <button type="submit" className="btn">Book Now</button>
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
}

export default App
