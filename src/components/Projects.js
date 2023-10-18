import React from 'react'
import './project.css'

function Projects() {
    return (
        <div className="main3">
            <div className="main-info">
                <div className="project1">
                    <div className="projectName">
                        <h2>Project-1:-</h2><h4> Industrial vegetable and Fruit spoilage system(SIH 2022 Finalist)</h4>
                        <hr />
                    </div>
                    <div className="prblmStatement">
                        <h2>Problem Statement:-</h2><h4>"Design and implement an Industrial Vegetable and Fruit Spoilage Monitoring System that effectively detects and addresses spoilage issues in real-time, minimizing waste and ensuring product quality throughout the supply chain."</h4>
                    </div>
                    <div className="picture">
                        <div className="flowchart">
                            <img src={require("./sihflowchat.png")} alt="" />
                        </div>
                        <div className="device">

                            <img src={require("./device.jpg")} alt="Device" />
                        </div>
                    </div>
                    <div className="silent-feature">
                        <h1>Silent-feature</h1>
                        <p> This device which is developed by our team it can detects the freshness of fruits and pesticides in the vegetables using sensor also Artificial Intelligence as well as Machine Learning technique and this two are very cost effective solution for a developing country like India and it also targeted the crops likes Rice , wheat which has the possibilities by the attack of insecticides for that we use Phosphine Sensor. So, developed not only the sensors, camera and microcontroller for the detection of freshness of the fruits and the vegetables. Our future aim to detect the Phosphine level in the crops which is right now the prime concern of Food corporation of India (Ministry of Food).
                        </p>
                    </div>
                    <div className="working-flow">
                        <h2>Overview and Uses</h2>
                        <p>
                            We have developed an innovative solution to monitor the freshness of fruits and vegetables in industrial settings. Our system involves placing a specialized device in close proximity to the produce, which effectively assesses its condition. Specifically, the device employs an MQ4 sensor capable of detecting methane levels. When fruits or vegetables begin to deteriorate, they emit a gas known as methane.
                            <hr />

                            After extensive research, rigorous testing, and on-site validation, we have determined that a threshold value of 255 ppm for methane is indicative of spoilage. To facilitate seamless data transmission, we have integrated an ESP8266 WiFi module, allowing us to relay information to a Firebase server.
                            <hr />

                            To provide users with convenient access to this data, we have created a user-friendly web interface. This interface displays real-time information regarding both methane levels and temperature readings sourced from the Firebase server. In the event that the methane levels surpass the established threshold, the system triggers notifications. Users are promptly alerted through email notifications, an audible buzzer, and a conspicuous red LED indicator. This comprehensive alert system ensures that consumers are promptly informed when a particular fruit or vegetable may not be suitable for consumption.
                            <hr />
                            Our solution represents a significant step forward in reducing food waste and promoting food safety within the industrial sector. Through this innovative technology, we aim to enhance the quality and longevity of produce throughout the supply chain.
                        </p>
                    </div>

                </div>
                <div className="project2">
                    <div className="projectName">
                        <h2>Project-2:-</h2><h4>Advanced CCTV analytics solution(Final Year Project)​</h4>
                        <hr />
                    </div>
                    <div className="prblmStatement">
                        <h2>Problem Statement:-</h2><h4>"Design and develop a technological solution based on live CCTV feeds, that can automatically detect incidents related to street crime, violence, burglary, theft, infiltration, unauthorized access etc. and generate alerts to the nearest Police Station. The solution should also be able to generate a report and maintain a database that includes the nature of incident/crime, location, time, level of alert (i.e., low, medium, high risk alert) etc."</h4>
                    </div>
                    <div className="prblmStatement">
                        <h2>Solution Approch:-</h2><h4> The main abnormal behaviours that this project can detect are: Violence, street crime, burglary, theft, infiltration, unauthorized access ,covering camera, Choking, lying down, Running, Motion in restricted areas.
                            It provides much flexibility by allowing users to choose the abnormal behaviours they want to be detected and keeps track of every abnormal event to be reviewed. We used three methods to detect abnormal behaviours: Motion influence map, Pattern recognition models, State event model.
                        </h4>
                    </div>

                    <div className="picture2">
                        <div className="flowchat">
                            <img src={require("./project2flowchat (2).png")} alt="" />
                        </div>
                        <div className="mlflowchat">
                            <img src={require("./machinelearningflowchart.png")} alt="" />
                        </div>
                        <div className="result">
                            <img src={require("./prototypeOutput.png")} alt="" />
                        </div>
                    </div>
                    <div className="silentfeature">
                        <h4>Silent Frature of this Device</h4>
                    🔯This project which is developed by our team it can detect crime through live CCTV feed and process them to alert the nearby police station.
                        <hr />
                    🔯It classifies the crime detected and sends the alert with live location along with the type of crime and time of crime.
                        <hr />
                    🔯It alerts the nearest medical facility in case of any fatal injuries if detected by the algorithm.
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Projects