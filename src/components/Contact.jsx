import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [result, setResult] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const message = formData.get("message");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    const errors = {};

    if (!name) {
      errors.name = "Name is required.";
    } else if (name.length < 5) {
      errors.name = "Name should be at least 5 characters long.";
    }

    if (!email || !emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!mobile || !mobileRegex.test(mobile)) {
      errors.mobile = "Please enter a valid 10-digit mobile number.";
    }

    if (!message) {
      errors.message = "Message is required.";
    } else if (message.length < 100) {
      errors.message = "Message should be at least 100 characters long.";
    }

    return errors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast.error("Please correct the errors before submitting.");
      setResult("");
      return;
    }

    setFormErrors({});
    formData.append("access_key", "af7c66e2-8eba-4a45-8f32-18e8e7b6c57f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Hey! glad that I heard from you, I will contact you soon.");
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to submit the form. Please try again later.");
    }

    setResult("");
  };

  return (
    <div name="contact" className="min-h-screen w-full p-2 pt-20">
      <ToastContainer />
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-5xl inline text-red-700 underline border-red-700 font-StrangerThings">
            Contact
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={onSubmit} className="flex flex-col w-full md:1/2">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full mb-4 md:mb-0">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 border-gray-600 rounded-md w-full"
                />
                {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
              </div>
              <div className="w-full mb-4 md:mb-0">
                <input
                  type="text"
                  name="email"
                  placeholder="yourname@domain.com"
                  className="p-2 bg-transparent border-2 border-gray-600 rounded-md w-full"
                />
                {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  className="p-2 bg-transparent border-2 border-gray-600 rounded-md w-full"
                />
                {formErrors.mobile && <p className="text-red-500">{formErrors.mobile}</p>}
              </div>
            </div>
            <div className="mt-4">
              <textarea
                name="message"
                rows="10"
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 border-gray-600 rounded-md w-full"
              ></textarea>
              {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}
            </div>
            <button
              className="text-white font-semibold bg-gradient-to-bl from-red-700 to-red-950 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-red-700 text-lg space-y-4 md:space-y-0 mt-8">
          <a href="mailto:sunilpathakamuri7777@gmail.com">sunilpathakamuri777@gmail.com</a>
          <a href="tel:7013353032">(+91) 7013353033</a>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Pathakamuri Sunil Kumar. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
