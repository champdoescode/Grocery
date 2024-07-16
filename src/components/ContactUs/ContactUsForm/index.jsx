import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';
import backgroundImage from '../../../../public/images/contact-background.jpg'; // Adjust the path as needed

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    contact_number: '',
    from_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate email
    if (!formData.from_email.includes('@') || !formData.from_email.includes('.com')) {
      newErrors.from_email = 'Please enter a valid email address';
      valid = false;
    }

    // Validate phone number (assuming 10-digit format)
    if (formData.contact_number.length !== 10 || isNaN(formData.contact_number)) {
      newErrors.contact_number = 'Please enter a 10-digit valid phone number';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate database storage (replace with actual API call)
      try {
        // Assuming you have an API endpoint to store form data
        const response = await fetch('your-backend-api-url', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({
            from_name: '',
            contact_number: '',
            from_email: '',
            message: '',
          });
        } else {
          console.error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div
      className="relative bg-center bg-no-repeat bg-cover w-full mt-4 p-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: '85vh', // Ensures the background covers the viewport height
      }}
    >
      <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-16 items-start justify-center p-6 rounded-lg">
        <div
          className="flex flex-col justify-between p-6 w-full lg:w-1/2 lg:mr-auto"
          data-aos="fade-up"
        >
          {submitted ? (
            <div className="text-center text-green-600 font-semibold mb-4">Submitted successfully!</div>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <h3 className="text-3xl font-semibold mb-6 text-gray-800">CONTACT <span className="text-green-500">US</span> FORM</h3>
              <div className="flex space-x-4 mb-4">
                <input
                  className="w-1/2 p-2 bg-transparent border-b-2 border-gray-800 mt-4 focus:outline-none text-black placeholder-black"
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <input
                  className="w-1/2 p-2 bg-transparent border-b-2 border-gray-800 mt-4 focus:outline-none text-black placeholder-black"
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <input
                className="w-1/2 p-2 mb-4 bg-transparent border-b-2 border-gray-800 mt-4 focus:outline-none text-black placeholder-black"
                type="text"
                placeholder="Phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
              {errors.contact_number && <p className="text-red-500">{errors.contact_number}</p>}
              <input
                className="w-full p-2 mb-4 bg-transparent border-b-2 border-gray-800 focus:outline-none mt-4 text-black placeholder-black"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.from_email && <p className="text-red-500">{errors.from_email}</p>}
              <textarea
                className="w-full mb-4 p-2 bg-transparent border-b-2 border-gray-800 mt-2 rounded-md focus:outline-none text-black placeholder-black"
                placeholder="Message"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <button
                type="submit"
                className="w-1/3 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition mt-4"
              >
                SUBMIT
              </button>
            </form>
          )}
        </div>
        <div
          className="flex flex-col justify-between p-6 w-full lg:w-1/2 mb-8 lg:mb-0 bg-opacity-0"
          data-aos="fade-down"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white mt-24">Grocery Shop</h2>
            <address className="text-white">
              <div className="text-2xl flex items-center mb-2">
                <FaMapMarkerAlt className="text-green-500 mr-2" />
                <span>411-006, Regus Skye One Unit No 101,</span>
              </div>
              <div className="pl-6 text-2xl">Kalyani Nagar,</div>
              <div className="pl-6 text-2xl mb-4">Pune - 411-006</div>
              <div className="text-2xl flex items-center mb-2">
                <FaPhoneAlt className="text-green-500 mr-2" />
                <a href="tel:+9195195119521" className="text-black-1000">+91 801 077 8440</a>
              </div>
              <div className="text-2xl flex items-center">
                <FaEnvelope className="text-green-500 mr-2" />
                <a href="mailto:info@cyboardschool.com" className="text-blue-800">info@numetry.in</a>
              </div>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
