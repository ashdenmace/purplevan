import ContactForm from "../components/ContactForm";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="form-text-container">
          <h2>Contact Us</h2>
          <p>Please feel free to ask any questions about the van or make an offer! We hope to get back to you in 1 to 3 days.</p>
          <ContactForm />
        </div>
        <div className="photo-container">
          <img className="contact-photo" src="https://purplevan-photos.s3.us-east-1.amazonaws.com/current%2F20191008_115751.jpg"></img>
        </div>
      </div>
      
    </>
  );
}

export default Contact;
