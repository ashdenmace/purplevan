import { useState } from "react";
import emailjs from "@emailjs/browser";

import "../styles/ContactForm.css";

function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
    mobile: "",
  });
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((currentForm) => ({
      ...currentForm,
      [id]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, message } = form
    
    if(!fullName || !email || !message){
      setError("You must include your name, email and message")
      return;
    }

    setError(null);

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setError("SUCCESS email was sent");
          setForm({
            fullName: "",
            email: "",
            message: "",
            mobile: "",
          });
        },
        (err) => {
          setError(`FAILED to send email: ${err}`);
        }
      );
  };

  return (
    <>
      <div className="contactform">
        <form onSubmit={onSubmit}>
          {error && <div className="error-bubble">{error}</div>}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              value={form.fullName}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={handleChange}
              placeholder="Email address"
            />
          </div>
          <div className="mb-3">
            <input
              type="mobile"
              className="form-control"
              id="mobile"
              placeholder="Phone Number (optional)"
              onChange={handleChange}
              value={form.phoneNumber}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="message"
              rows="3"
              value={form.message}
              placeholder="Message"
              onChange={handleChange}
            ></textarea>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
