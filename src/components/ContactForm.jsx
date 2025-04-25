import "../styles/ContactForm.css";

function ContactForm() {

    return (
        <>
            <div className="contactform-container">
                <div className="mb-3">
                    {/* <label for="fullname" className="form-label">Full Name</label> */}
                    <input type="text" className="form-control" id="fullname" placeholder="First and Last Name" />
                </div>
                <div className="mb-3">
                    {/* <label for="email" className="form-label">Email address</label> */}
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    {/* <label for="message" className="form-label">
                        Please let us know if you are interested! Make sure to include
                        your preferred contact methods and where we can reach you!
                    </label> */}
                    <textarea className="form-control" id="message" rows="3"></textarea>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </>
    )
}

export default ContactForm;

