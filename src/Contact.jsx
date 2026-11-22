import { useState } from "react";

import {
  FaPaperPlane,
  FaEnvelope,
  FaLocationDot,
  FaShieldHalved
} from "react-icons/fa6";


function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });


  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState(false);


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };


  const validate = () => {

    let newErrors = {};


    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }


    if (!form.email.trim()) {

      newErrors.email = "Email is required";

    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {

      newErrors.email = "Invalid email address";

    }


    if (!form.message.trim()) {

      newErrors.message = "Message is required";

    } else if (form.message.length < 10) {

      newErrors.message =
        "Message must be at least 10 characters";

    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: ""
      });

    }

  };


  return (

    <section className="page-section">

      <div className="container">

        <div className="page-title">

          <span>
            // SECURE_CHANNEL
          </span>

          <h1>
            CONTACT <em>NODE</em>
          </h1>

          <p>
            Open a communication channel.
          </p>

        </div>


        <div className="contact-grid">


          <div className="contact-info">

            <div className="big-icon">
              <FaShieldHalved />
            </div>


            <h2>
              OPEN A CHANNEL
            </h2>


            <p>
              Send us a message using the secure
              frontend communication interface.
            </p>


            <div className="contact-detail">

              <FaEnvelope />

              hello@neonroot.demo

            </div>


            <div className="contact-detail">

              <FaLocationDot />

              DIGITAL NODE // 01

            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >


            {success && (

              <div className="success">

                ✓ MESSAGE TRANSMITTED

              </div>

            )}


            <label>
              NAME
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            {errors.name && (
              <small className="error">
                {errors.name}
              </small>
            )}


            <label>
              EMAIL
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />

            {errors.email && (
              <small className="error">
                {errors.email}
              </small>
            )}


            <label>
              MESSAGE
            </label>

            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
            />

            {errors.message && (
              <small className="error">
                {errors.message}
              </small>
            )}


            <button
              type="submit"
              className="btn-neon"
            >

              <FaPaperPlane />

              TRANSMIT MESSAGE

            </button>


          </form>

        </div>

      </div>

    </section>

  );
}

export default Contact;