import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="main">
      <div className="main-info">
        <div className="profile">
          <div className="profile-img">
            <img src={require("./image.png")} alt="" />
          </div>
          <div className="sign">
            <img src={require("./sign.png")} alt="" />
          </div>
          <div className="introduction">
            <p>Anish Kumar is my name. Additionally, I'm from Sitamarhi, Bihar.I'm now working on my bachelor's degree in the "Informarion Technology Department" at Naurula Institute of Technology.I am proficient in the programming languages C, C++, Java, Python, and SQL. I also use JavaScript, React, Express, Node.js, MongoDB, and SQL for development.I've been working as a backend developer for more than a year. My interests are in technology exploration, sports, and innovation. thankYou.</p>
          </div>
        </div>

        <div className="college">
          <div className="college-img">
            <h1>Our College</h1>
            <img src={require("./collegeimg.jpg")} alt="" />
            <h1>I ❤️ NiT</h1>
          </div>
          <div className="collegeBio">
            <p>
              <hr />What is Fell About my College life...<hr></hr>Thoroughly relishing my college life here in Kolkata, West Bengal. The cultural scene is vibrant and diverse, with events like Kritanj, Navodiya, Sarwastipuja, and Vishkarama Puja dotting our calendar. Each of these celebrations brings a unique flavor to our college experience, filling it with color and enthusiasm.

              What truly makes this journey special are the friendships I've forged along the way. Raju, Daiyan, Hariom, Ayush, Satyam, Praveen, and Satish have become my constants, weaving a tapestry of shared experiences and unwavering support. They are the pillars that make this journey not just educational, but also deeply enriching on a personal level.

              With the backdrop of Kolkata's rich cultural heritage and the lively atmosphere of our college, every day is an adventure. These moments, whether big or small, are treasures that I'll carry with me long after this chapter is over. It's a privilege to be part of such a vibrant community, and I intend to savor every bit of it.
            </p>
          </div>
          <div className="school12">
            <div className="schoolimg">
              <h1>12th School</h1>
            <img src={require("./12school.jpg")} alt="" />
               <h4> 
              Sacred Heart School Sitamarhi
              </h4>
             
            </div>
           <div className="schoolBio12">
            <p>
            I successfully completed my 12th class from CBSE Boad in the year 2020. I was also apperead  in 2019 and received a score of 61%, which is too low. Additionally, my JEE MAIN rank is also not insufficient for admission to any nit college, therefore I made the decision to wait another year in order to raise both my jee mains ranks and my 12th percentage. And I received a 12th grade score of 74.20 in 2020, and I rank around 78 thoushand on the jee mains. I then enrolled in Kolkata's Narula Institute of Technology. 
            </p>
           </div>

          </div>
          <div className="school10">
            <div className="schoolimg10">
              <h1>10th School</h1>
            <img src={require("./10thschool.jpg")} alt="" />
               <h4> 
               Brilliant Public School Sitamarhi
              </h4>
             
            </div>
           <div className="schoolBio10">
            <p>
            I have  completed my 10th class from Brilliant Public school Sitamarhi which is Affialiate to CBSE Boad in the year 2017. and I Scored 9.2 CGPA. 
            </p>
           </div>

          </div>

        </div>


      </div>
    </div>
  )
}

export default About