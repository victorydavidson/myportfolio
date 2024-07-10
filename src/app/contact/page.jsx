"use client"
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Link from 'next/link'; // Import Link from next/link for client-side navigation

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div className="h-full">
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl md:text-6xl">
          <motion.div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </motion.div>
        </div>

        {/* Form container */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-full lg:h-full lg:w-1/2 bg-orange-100 rounded-xl text-lg md:text-xl flex flex-col gap-4 lg:gap-5 justify-center p-6 md:p-5"
        >
          <span>Dear Janada, </span>
          <textarea
            rows={4}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-3">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
