import React from "react";
import CertificateItem from "./CertificateItem";

const Certificates = () => {
  const data = [
    
    {
      title: "Btech(IT)",
      urlToImage: "img/Provisional.jpg",
      publishedAt: "2020-2024",
      courseName: "Information Technology",
      from: "Narula Institute Of Technology",
      driveLink:
        "https://drive.google.com/file/d/1AHkLES7pc4LXMHDuepTiM3Kkpg1E2-Fb/view?usp=drivesdk",
    },
    {
      title: "Class 12",
      urlToImage: "12th.jpg",
      publishedAt: "2020",
      courseName: "Secondary Eduction",
      from: "Sacred Heart Public School Sitamarhi",
      driveLink:
        "https://drive.google.com/file/d/1XXcUbmAPTyZZcFkVpdrsBm9hZd1_xvDM/view?usp=sharing",
    },
    {
      title: "Class 10",
      urlToImage: "10th.jpg",
      publishedAt: "2017",
      courseName: "Primary Eduction",
      from: "Brilliant Public School Sitamrahi",
      driveLink:
        "https://drive.google.com/file/d/1LuVAbyET5xAewDGWRr3otYpe7yVFjF1Q/view?usp=sharing",
    },
    {
      title: "My Resume",
      urlToImage: "resume.jpg",
      publishedAt: "Present",
      courseName: "What I do So Far",
      from: "",
      driveLink:
        "https://drive.google.com/file/d/1r0InFImbKHjubeZANq6rZYwXImDKb9D7/view?usp=drivesdk",
    },
    // {
    //   title: "EXPERIENCE LETTER",
    //   urlToImage: "experiance.jpg",
    //   publishedAt: "11/03/2023 to 31/06/2023",
    //   courseName: "Backend",
    //   from: "Hansraj Ventures Pvt. Ltd.",
    //   driveLink:
    //     "https://drive.google.com/file/d/1Q61EEr6VDgSQ6SlO5kdKds6_1BBudlha/view?usp=sharing",
    // },
    
    
    {
      title: "Hackathon",
      urlToImage: "hackathon.jpg",
      publishedAt: "2022",
      courseName: "Smart India Hackathon",
      from: "Goverment of India",
      driveLink:
        "https://drive.google.com/file/d/1z79razEgJkXe3BdhSAOHI1kJRjsLrGAT/view?usp=sharing",
    }
  ];

  return (
    <div class="pt-28">

    
    <div className="container mx-auto p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((element, index) => (
          <CertificateItem
            key={index}
            title={element.title}
            urlToImage={element.urlToImage}
            publishedAt={element.publishedAt}
            from={element.from}
            courseName={element.courseName}
            driveLink={element.driveLink}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Certificates;
