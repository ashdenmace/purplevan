import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <h2>Contact Us</h2>
      {/* ContactForm will be a seperate component, 
            because I plan to have the form on the bottom 
            of Welcome Page as well. 
            AWS SES 
            AWS S3 BUCKET
            */}
      <ContactForm />
    </>
  );
}

export default Contact;
