import React from "react";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <main className="bg-gray-50">
      {/* Header */}
      <div className="flex items-center px-10 min-h-[60px] bg-white shadow-sm">
        <h1 className="flex gap-3 items-center text-gray-700 font-medium text-lg">
          <p className="hover:text-green-700 cursor-pointer">Home</p>
          <FaArrowRight className="text-green-800" />
          <p className="font-semibold">Contact Us</p>
        </h1>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="w-full max-w-7xl ">
          {/* Contact Section */}
          <div className="w-full px-8 md:px-16 lg:px-24 py-12 flex flex-col lg:flex-row gap-12">
            {/* Left: Contact Form */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Drop us a message
              </h2>

              <form className="flex flex-col gap-5">
                <div>
                  <label className="block font-medium mb-1">Your name</label>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 outline-green-600"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 outline-green-600"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your Contact number"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 outline-green-600"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 rounded-md px-4 py-2 outline-green-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-all w-fit"
                >
                  Submit <FaArrowRight />
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Get in Touch with Us!
              </h2>
              <p className="text-gray-600 mb-6">
                We’re here to help! Whether you have a question about our
                services, want to collaborate, or simply want to say hello —
                we’d love to hear from you. Use the form below or contact us
                directly.
              </p>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-green-700 text-lg font-medium mb-1">
                    <FaMapMarkerAlt /> Address
                  </div>
                  <p className="text-gray-700 font-medium">
                    Natural Milk World Farm, 343, Berla Road, Vill Asalwas,
                    Surajgarh, Distt-Jhunjhunu, Rajasthan, 333033
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 text-green-700 text-lg font-medium mb-1">
                    <FaPhoneAlt /> Phone
                  </div>
                  <p className="text-gray-700 font-medium">+91 7427003708</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 text-green-700 text-lg font-medium mb-1">
                    <FaEnvelope /> Email
                  </div>
                  <p className="text-gray-700 font-medium">
                    info@naturalmilkworld.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="w-full max-w-7xl h-[400px] md:h-[600px] overflow-hidden rounded-xl shadow-lg">
          <iframe
            title="Natural Milk World Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.2409319172934!2d77.46841247539405!3d23.161405079076623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c46aa62f19b87%3A0x471bc44d1447da13!2sNoble%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1762518047800!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;
