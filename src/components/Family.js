import React from "react";
import profilePhoto from "./img/anish3.jpg"; // Replace with your actual photo path
import anjaliPhoto from "./img/Anjali_Yadav.jpg";
import RanjanaDidi from "./img/RanjanaDidi.jpg";
import Prince from "./img/prince3.jpg";
import Dadi from "./img/Dadi.jpg";

const Family = () => {
  const myDetails = {
    name: "Anish Yadav",
    age: 24,
    height: "5.4 ft",
    complexion: "Fair",
    designation: "Fullstack Developer at Greenwave Solution Private Limited",
    btech: "B.Tech in Information Technology (NIT Kolkata), 9.0 SGPA",
    twelfth: "12th: Sacred Heart Public School Sitamarhi, 74.20%",
    tenth: "10th: Brilliant Public School, 9.2 CGPA",
    image: profilePhoto,
  };

  const familyMembers = [
    {
      name: "Shivpuri Devi (Grand Mother)",
      age: 85,
      profession: "House Maker",
      image: Dadi,
    },
    {
      name: "RamCharitra Ray (Father)",
      age: 55,
      profession: "Business",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mandodari Devi (Mother)",
      age: 45,
      profession: "Asha",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Anjali Yadav (Elder Sister)",
      age: 32,
      profession: "House Maker",
      husband: {
        name: "Sanjeev Yadav",
        profession: "Business",
      },
      image: anjaliPhoto,
    },
    {
      name: "Ranjana Yadav (Elder Sister)",
      age: 30,
      profession: "District Project Assistant",
      husband: {
        name: "Dhananjay Yadav",
        profession: "Child Department",
      },
      image: RanjanaDidi,
    },
    {
      name: "Anu Yadav (Elder Sister)",
      age: 26,
      profession: "Cyber Cafe",
      husband: {
        name: "Vikash Yadav",
        profession: "Social Worker at Women & Child Development Sitamarhi",
      },
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Prince Yadav (Younger Brother)",
      age: 20,
      profession: "Student",
      image: Prince,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 pt-28 font-roboto">
      {/* About Me Section */}
      <h1 className="text-4xl font-poppins font-bold text-center mb-8">About Me</h1>
      <div className="flex flex-wrap justify-center gap-6 mb-10 mx-auto max-w-6xl">
        {/* Card 1: Profile Image */}
        <div className="bg-gray-100 rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow max-w-md text-center w-full">
          <img
            src={myDetails.image}
            alt={myDetails.name}
            className="h-200px object-cover w-full"
          />
          <h2 className="text-2xl bg-slate-100 font-semibold mt-4 font-poppins">{myDetails.name}</h2>
        </div>

        {/* Card 2: Personal Details */}
        <div className="bg-white  text-xl rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow max-w-md w-full">
          <h2 className="text-xl font-bold mb-4 font-poppins">Personal Details</h2>
          <p className="text-gray-700 mt-4"><strong>Name:</strong> {myDetails.name}</p>
          <p className="text-gray-700 mt-4"><strong>Age:</strong> {myDetails.age}</p>
          <p className="text-gray-700 mt-4"><strong>Height:</strong> {myDetails.height}</p>
          <p className="text-gray-700 mt-4"><strong>Complexion:</strong> {myDetails.complexion}</p>
          <p className="text-gray-700 mt-4"><strong>Designation:</strong> {myDetails.designation}</p>
          <p className="text-gray-700 mt-4"><strong>B.Tech:</strong> {myDetails.btech}</p>
          <p className="text-gray-700 mt-4"><strong>12th:</strong> {myDetails.twelfth}</p>
          <p className="text-gray-700 mt-4"><strong>10th:</strong> {myDetails.tenth}</p>
        </div>
      </div>

      {/* Meet My Family Section */}
      <h1 className="text-4xl font-poppins font-bold text-center mb-8">Meet My Family</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {familyMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 sm:h-60 object-cover rounded-t-md"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold font-poppins">{member.name}</h2>
              <p className="text-gray-600 font-roboto">Age: {member.age}</p>
              <p className="text-gray-600 font-roboto">Profession: {member.profession}</p>
              {member.husband && (
                <>
                  <p className="text-gray-600 font-roboto"><strong>Husband:</strong> {member.husband.name}</p>
                  <p className="text-gray-600 font-roboto">Husband's Profession: {member.husband.profession}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Family;
