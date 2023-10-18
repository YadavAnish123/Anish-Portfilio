import React from 'react'
import './Home.css'
import resume from './AnishResume.pdf'

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
        <div>
            <div className="main5">
                <section className="firstSection">
                    <div className="leftSection">
                        <div>
                            Hi,my name is <span className="purple">Anish Kumar</span>
                            <br />
                            And I am passionate
                            backend developer with a passion for building robust and scalable systems.Programmer.
                        </div>
                        <div className="buttons">
                             
                            
                            {/* <a href="http://localhost:5000/resume" className="btn btn-dark" style={{}} target="_blank"> Download Resume</a> */}
                            <button className="btn btn-dark" onClick={onButtonClick}>
                    Download PDF
                </button>
                             
                            <a href="https://github.com/YadavAnish123" className="btn btn-dark" style={{}} target="_blank">Github</a>
                        </div>

                    </div>
                    <div className="rightSection">
                        <img src="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-3d-illustration-of-character-website-developer-png-image_9954600.png" alt="" />
                    </div>
                </section>
                <hr />
                <section className="secondSection">
                    <span className="text-gray"> What I have done so far</span>
                    <h1> work expreience</h1>

                    <div className="box">
                        <div className="vertical">
                            <img className="image-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="" />

                            <div className="vertical-title">
                                NodeJs Developer(2022-Now)
                            </div>
                            <div className="vertical-desc">
                                As Backend Developer, I demonstrated all
                                professional and technical skills toward organizational and personal development.
                                I handles all backend development, API creation, and written logic smartly and came out with the expected results.
                                Moreover, I professionally handles the official policy regularly daily. I work commitments have tremendously helped
                                in the growth of the organization.
                            </div>
                        </div>
                        <div className="vertical">
                            <img className="image-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="" />


                            <div className="vertical-title">
                                Smart India Hackethon Finalist(2022)
                            </div>
                            <div className="vertical-desc">
                                We placed in the final SIH2022.We created a software which can detect
                                fruit deterioration by methane and temp level.I have used HTML,CSS and
                                JS in frontend and Machine learning model in backend and I used
                                firebase for taking data of methane and temp.

                            </div>
                        </div>
                        <div className="vertical">
                            <img className="image-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="" />

                            <div className="vertical-title">
                                IBM Hack Challenge 2022 (09/2022 - 10/2022)
                            </div>
                            <div className="vertical-desc">
                                This project aims at building a web App that automatically estimates
                                food attributes such as ingredients and nutritional value by classifying
                                the input image of food. Our method employs Clarifai's AI-Driven Food
                                Detection Model for accurate food identification and Food API's to give
                                the nutritional value of the identified food.
                            </div>
                        </div>
                        <div className="vertical">
                            <img className="image-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="" />

                            <div className="vertical-title">
                                Machine Learing Internship(10 march 2022 to 19 April 2022)
                            </div>
                            <div className="vertical-desc">
                                Proficient in Python for machine learning, utilizing libraries like NumPy, Pandas, and Scikit-learn. Successfully applied advanced techniques, including neural networks and ensemble methods, for problem-solving. Strong background in data preprocessing, feature engineering, and model evaluation.


                            </div>
                        </div>
                        
                    </div>
                </section>
            </div>

        </div>
    )


}

export default Home