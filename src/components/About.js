import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-10 px-2 pt-28">
      <div className="container mx-auto space-y-12">
        {/* Profile Section */}
        <div className="flex  items-center bg-white shadow-lg rounded-lg p-6 space-x-28 ">
        <p className="w-1/2 text-center text-xl leading-relaxed font-serif">
        My name is Anish Kumar, and I hail from Sitamarhi, Bihar. I am currently working as a software developer at Greenwave Solution Private Limited in Kolkata. I pursued my engineering degree in Information Technology from Narula Institute of Technology, Kolkata. I completed my Class 12 education at Sacred Heart Public School and my Class 10 at Brilliant Public School. 

My hobbies include exploring advancements in technology, engaging in sports, and fostering innovation. Thank you!
          </p>
          <div className="w-1/2 ">
            <img
              src={require("./image.png")}
              alt="Profile"
              className="object-cover w-84 h-84 "
            />
          </div>
           
          
        </div>

        {/* College Section */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold text-center pb-4">College</h1>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={require("./collegeimg.jpg")}
                alt="College"
                className="w-full h-60 object-cover rounded-lg"
              />
              <h1 className="text-xl font-semibold">I ❤️ NiT</h1>
            </div>
            <p className="text-center text-lg mt-4">
              <hr className="border-t border-gray-200 my-2" />
              Thoroughly relishing my college life here in Kolkata, West Bengal.
              The cultural scene is vibrant and diverse, with events like
              Kritanj, Navodaya, Sarwastipuja, and Vishkarama Puja dotting our
              calendar.
              <hr className="border-t border-gray-200 my-2" />
            </p>
          </div>
        </div>

        {/* Schools Section */}
        <div className="space-y-6">
          {/* 12th School */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white shadow-lg rounded-lg p-6">
            <div>
              <h2 className="text-2xl font-bold text-center text-blue-600">
                12th School
              </h2>
              <img
                src={require("./12school.jpg")}
                alt="12th School"
                className="w-full h-40 object-cover rounded-lg mt-4"
              />
              <h4 className="text-center mt-2 text-lg font-semibold">
                Sacred Heart School Sitamarhi
              </h4>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              I successfully completed my 12th class from CBSE Board in the year
              2020. I was also appeared in 2019 and received a score of 61%,
              which was too low. Therefore, I decided to wait another year to
              improve my 12th percentage and JEE Mains rank. I scored 74.20% in
              2020 and ranked around 78,000 in JEE Mains. I then enrolled in
              Kolkata's Narula Institute of Technology.
            </p>
          </div>

          {/* 10th School */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-gradient-to-r from-green-400 to-blue-400 text-white shadow-lg rounded-lg p-6">
            <div>
              <h2 className="text-2xl font-bold text-center">10th School</h2>
              <img
                src={require("./10thschool.jpg")}
                alt="10th School"
                className="w-full h-40 object-cover rounded-lg mt-4"
              />
              <h4 className="text-center mt-2 text-lg font-semibold">
                Brilliant Public School Sitamarhi
              </h4>
            </div>
            <p className="leading-relaxed">
              I completed my 10th class from Brilliant Public School Sitamarhi,
              affiliated with CBSE Board, in 2017. I scored 9.2 CGPA and laid
              the foundation for my future academic endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
