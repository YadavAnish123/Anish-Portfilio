import React from "react";

import resume from "./AnishResume.pdf";
import profilePhoto from "./image.png"; // Ensure the correct path to your image file

const Home = () => {
  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="container mx-auto max-w-4xl h-auto  shadow-lg rounded-lg flex flex-col md:flex-row items-center md:items-start p-6">
        {/* Left Section (Photo) */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start mb-6 md:mb-0 " >
          <img
            src={profilePhoto}
            alt="Anish Kumar"
            className="rounded-full w-40 h-40 md:w-64 md:h-64 object-cover shadow-md"
          />
        </div>

        {/* Right Section (About) */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Hi, I'm Anish Kumar
          </h1>
          <p className="text-gray-600 mb-6">
            I'm a Software Developer at Greenwave Solution Private Limited with a
            passion for tackling complex challenges and a proven track record in
            competitive programming, including achievements in the Smart India
            Hackathon 2022 and 2023. I bring innovation, precision, and a
            results-driven approach to every project and am eager to contribute
            my expertise to drive meaningful impact within the team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-700 transition"
              onClick={onButtonClick}
            >
              Download Resume
            </button>
            <a
              href="https://github.com/YadavAnish123"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-700 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
