import Header from '../header/header';
import './about.css'

const About= () =>{


    return(
        <>
        <Header/>

         <div className="about-container">
        <h1 className="about-title">About Us</h1>

        <p className="about-text">
          We are dedicated to helping people find the right jobs easily and quickly.
          Our platform connects job seekers with companies looking for talented individuals.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>✔ Our Mission</h3>
            <p>
              To make job searching simple, transparent, and effective for everyone.
            </p>
          </div>

          <div className="about-card">
            <h3>✔ What We Do</h3>
            <p>
              We provide updated job listings, easy filters, and a clean interface
              to help you find jobs faster.
            </p>
          </div>

          <div className="about-card">
            <h3>✔ Why Choose Us?</h3>
            <p>
              Fast job updates, user-friendly design, and a supportive experience.
            </p>
          </div>
        </div>
      </div>
        
       </>
    )
}
export default About;