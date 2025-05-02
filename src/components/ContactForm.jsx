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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((currentForm) => ({
      ...currentForm,
      [id]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
    //ENV THESE TWO STRINGS;
      .send("service_euwr4wd", "template_mlglzz8", form, {
        publicKey: "fi_CJNSdN-R_m6tOb",
      })
      .then(
        () => {
          console.log("SUCCESS email was sent");
        },
        (error) => {
          console.log("FAILED to send email", error);
        }
      );
  };

  // hazevw1976t2@gmail.com
  return (
    <>
      <div className="contactform">
        <form onSubmit={onSubmit}>
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
        </form>
      </div>
    </>
  );
}

export default ContactForm;
