import React, { useState } from "react";

const ContectMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    } else {
      alert("Message sent successfully!");
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-2 pt-28">
      <div className="container mx-auto space-y-12">
        {/* Contact Information Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow">
              <span className="text-2xl text-blue-500 mr-4">📧</span>
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:anishkumar3787230@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  anishkumar3787230@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow">
              <span className="text-2xl text-green-500 mr-4">📞</span>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a
                  href="tel:+916203417361"
                  className="text-green-600 hover:underline"
                >
                  +91 6203417361
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow">
              <span className="text-2xl text-blue-700 mr-4">🔗</span>
              <div>
                <h4 className="font-semibold">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/anish-kumar-5b477a23a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow">
              <span className="text-2xl text-pink-500 mr-4">📷</span>
              <div>
                <h4 className="font-semibold">Instagram</h4>
                <a
                  href="https://www.instagram.com/yadav_anish_23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow">
              <span className="text-2xl text-gray-800 mr-4">🐱</span>
              <div>
                <h4 className="font-semibold">GitHub</h4>
                <a
                  href="https://github.com/YadavAnish123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:underline"
                >
                  Check GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center">Contact Me</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 mt-6 max-w-lg mx-auto"
          >
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-3 h-32 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-lg font-semibold transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContectMe;
