import React from "react";

import resume from "./AnishResume.pdf";
 
import anisimg from "./img/anisimg.jpg";

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
      <div className="container mx-auto max-w-6xl shadow-lg rounded-lg flex flex-col-reverse md:flex-row items-center md:items-start p-6">
        {/* Left Section (About) */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Hi, I'm Anish Kumar
          </h1>
          <p className="bg-gray-100 text-2xl mb-6 leading-relaxed">
            I'm a Software Developer at Greenwave Solution Private Limited with a
            passion for tackling complex challenges and a proven track record in
            competitive programming, including achievements in the Smart India
            Hackathon 2022 and 2023. I bring innovation, precision, and a
            results-driven approach to every project and am eager to contribute
            my expertise to drive meaningful impact within the team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-center">
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

        {/* Right Section (Photo) */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end mb-6 md:mb-0">
          <img
            src={anisimg}
            alt="Anish Kumar"
            className="w-full h-auto max-h-[500px] md:w-3/4 md:h-auto object-cover shadow-md rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
