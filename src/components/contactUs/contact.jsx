import Header from '../header/header'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header />

      <section className="contact-wrapper">

        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Reach out anytime.</p>
        </div>

        <div className="contact-grid">

          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Email: support@example.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Location: Nagpur, Maharashtra</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required/>
            <input type="email" placeholder="Your Email" required/>
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>

        </div>

      </section>
    </>
  );
};

export default Contact;
