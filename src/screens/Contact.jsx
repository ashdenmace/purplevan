import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <h2>This will be the separate contact page</h2>
      {/* ContactForm will be a seperate component, 
            because I plan to have the form on the bottom 
            of Welcome Page as well. */}
      <ContactForm />
    </>
  );
}

export default Contact;
