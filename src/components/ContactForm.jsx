import { useState } from "react";

import "../styles/ContactForm.css";

function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((currentForm) => ({
      ...currentForm,
      [id]: value,
    }));
  };

  // hazevw1976t2@gmail.com
  return (
    <>
      <div className="contactform">
        <div className="mb-3">
          {/* <label for="fullname" className="form-label">Full Name</label> */}
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
          {/* <label for="email" className="form-label">Email address</label> */}
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={handleChange}
            placeholder="Email address"
          />
        </div>
        <div className="mb-3">
          {/* <label for="email" className="form-label">Email address</label> */}
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
          {/* <label for="message" className="form-label"></label> */}
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
      </div>
    </>
  );
}

export default ContactForm;
