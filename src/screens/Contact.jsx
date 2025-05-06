import ContactForm from "../components/ContactForm";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <h2>Contact Us</h2>
      <div className="contact-container">
        <ContactForm />
        <div className="photo-container">
          <img className="contact-photo" src="https://purplevan-photos.s3.us-east-1.amazonaws.com/hazevan-photos%2F20191008_115751.jpg"></img>
        </div>
      </div>
      
    </>
  );
}

export default Contact;
