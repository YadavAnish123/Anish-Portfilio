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
                             
                        Hello, I'm Anish Kumar.
Additionally, "I bring a competitive edge to every coding challenge because of my passion for solving complex problems and my track record of success in competitive programming." My successes in the grand finals of the Smart India Hackathon in 2022 and 2023 demonstrate my capacity to approach real-world issues in an original manner. I have developed my abilities to design and manage reliable backend systems, create effective APIs, and guarantee project success by paying close attention to detail as a devoted Backend Developer at Hansraj Ventures. Beyond the arena of competition, I am dedicated to greatness,And Now I good handsOn Fullstak development, having skill of automation aslo So I am excited to apply my special combination of abilities and experiences to make a significant contribution to your team and business."
                        </div>
                        <div className="buttons">


                            {/* <a href="http://localhost:5000/resume" className="btn btn-dark" style={{}} target="_blank"> Download Resume</a> */}
                            <button className="btn btn-dark" onClick={onButtonClick}>
                                Download Resume
                            </button>

                            <a href="https://github.com/YadavAnish123" className="btn btn-dark" style={{}} target="_blank">Github</a>
                        </div>

                    </div>
                    <div className="rightSection">
                        <img src={require("./image.png")} alt="" />
                    </div>
                </section>
                 
                
            </div>

        </div>
    )


}

export default Home