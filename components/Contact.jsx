import React from 'react'
import { useState } from 'react';

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "af7c66e2-8eba-4a45-8f32-18e8e7b6c57f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div name="contact" className="min-h-screen w-full p-2 pt-20">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-5xl inline text-red-700 underline border-red-700 font-StrangerThings">Contact</p>
                </div>
                <div className="flex justify-center items-center">
                    <form onSubmit={onSubmit} className="flex flex-col w-full md:1/2">
                        {/* Container for inputs */}
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="p-2 bg-transparent border-2 border-gray-600 rounded-md w-full mb-4 md:mb-0"
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="yourname@domain.com"
                                className="p-2 bg-transparent border-2 border-gray-600 rounded-md w-full mb-4 md:mb-0"
                            />
                            <input
                                type="text"
                                name="mobile"
                                placeholder="Enter your mobile number"
                                className="p-2 bg-transparent border-2 border-gray-600 rounded-md w-full"
                            />
                        </div>
                        <textarea
                            name="message"
                            rows="10"
                            placeholder="Enter your message"
                            className="p-2 bg-transparent border-2 border-gray-600 rounded-md mt-4"
                        ></textarea>
                        <button
                            className="text-white font-semibold bg-gradient-to-bl from-red-700 to-red-950 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                {/* Responsive layout for email and phone */}
                <div className="flex flex-col md:flex-row justify-between items-center text-red-700 text-lg space-y-4 md:space-y-0 mt-8">
                    <a href="mailto:sunilpathakamuri7777@gmail.com">sunilpathakamuri7777@gmail.com</a>
                    <a href="tel:7013353032">(+91) 7013353032</a>
                </div>
                <div className="text-center mt-8">
                    <p>&copy; {new Date().getFullYear()} Pathakamuri Sunil Kumar. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
