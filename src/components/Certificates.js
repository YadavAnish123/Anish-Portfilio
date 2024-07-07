import React from 'react'
import CertificateItem from './CertificateItem'
import './Certificateitem.css'


const Certificates = () => {
    const data = [
      {
        "title": " My Resume",
        "urlToImage": "resume.jpg",
        "publishedAt": "Present",
        "courseName": "What I do So Far",
        "from": "",
        "driveLink":"https://drive.google.com/file/d/1cHobb2iTPYR1Prt2eRDjUTJlefokMt6i/view?usp=sharing"
    },
         {
            "title": "EXPERIENCE LETTER",
            "urlToImage": "experiance.jpg",
            "publishedAt": "11/03/2023 to Present",
            "courseName": "Backend",
            "from": "Hansraj Ventures Pvt. Ltd.",
            "driveLink":"https://drive.google.com/file/d/1Q61EEr6VDgSQ6SlO5kdKds6_1BBudlha/view?usp=sharing"
        },
         {
            "title": "Internship DataScience",
            "urlToImage": "intershipdatascience.jpg",
            "publishedAt": "10/3/2022  to 19/04/2022",
            "courseName": "Internship",
            "from": "Rinex Technology",
            "driveLink":"https://drive.google.com/file/d/1y_6AqrsMLcJQGXdKZz_QmS4f04VrZ_ui/view?usp=sharing"
        },
        {
          "title": "Data Science",
          "urlToImage": "datascience.jpg",
          "publishedAt": "10/3/2022  to 19/04/2022",
          "courseName": "Data Science",
          "from": "Rinex Technology",
          "driveLink":"https://drive.google.com/file/d/1w7PT0JQ_ikOS5Ugre1pfozRu8cPvL9Il/view?usp=sharing"
      },
        {
            "title": "Hackathon",
            "urlToImage": "hackathon.jpg",
            "publishedAt": "2022",
            "courseName": "Smart India Hackathon ",
            "from": "Goverment of India",
            "driveLink":"https://drive.google.com/file/d/1z79razEgJkXe3BdhSAOHI1kJRjsLrGAT/view?usp=sharing"
        },
        {
            "title": "DSA",
            "urlToImage": "dsa.jpg",
            "publishedAt": "03/09/2021 to 29/11/2021",
            "courseName": "Data Structure",
            "from": "MysirG.com",
            "driveLink":"https://drive.google.com/file/d/1se1PwXeefIuvVw8TpWPJhlGuvtzKxM_I/view?usp=sharing"
        },
        {
          "title": "Machine Learning",
          "urlToImage": "python.jpg",
          "publishedAt": "10/10/2022",
          "courseName": "Machine Learning with Python",
          "from": "IBM(Cognitive Class)",
          "driveLink":"https://drive.google.com/file/d/1eZSzpTNLo2ZOz2rbmKkOB7hB7ElyEh6P/view?usp=sharing"
      },
        {
            "title": "Deep Learning",
            "urlToImage": "Deeplearning.jpg",
            "publishedAt": "10/10/2022",
            "courseName": "Deep Learning ",
            "from": "IBM(Cognitive Class)",
            "driveLink":"https://drive.google.com/file/d/1TZGNlueTmYj__aMs6Uhk_B_z97S7Q0Gl/view?usp=sharing"
        },
        {
          "title": "Compatative Codding",
          "urlToImage": "condingNinja.jpg",
          "publishedAt": "20/07/2022",
          "courseName": "Participition",
          "from": "Coding Ninjas",
          "driveLink":"https://drive.google.com/file/d/1bkwodosn_Chg2HZp0zEw0cMabpk_8WV2/view?usp=sharing"
      }

    ]
    return (
        <div className="container">

          <div className="row">
            {data.map((element) => {
              return <div className="col-md-4" key={element.urlToImage}>
                <CertificateItem title={element.title}  urlToImage={element.urlToImage}  publishedAt={element.publishedAt} from={element.from} courseName={element.courseName} driveLink={element.driveLink} />

              </div>
            })}
          </div>
        </div>

       
    )
}

export default Certificates