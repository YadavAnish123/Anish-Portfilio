import React from "react";
import sihFlowchart from "./sihflowchat.png";
import sihDevice from "./device.jpg";
import project2Flowchart from "./project2flowchat (2).png";
import mlFlowchart from "./machinelearningflowchart.png";
import prototypeOutput from "./prototypeOutput.png";
 

function Projects() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto space-y-10 p-4 ">
        {/* Project 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 pt-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 ">Project-1:</h2>
            <h4 className="text-lg text-gray-700">
              Industrial Vegetable and Fruit Spoilage System (SIH 2022 Finalist)
            </h4>
            <hr className="border-gray-300" />
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Problem Statement:
            </h2>
            <h4 className="text-gray-600">
              "Design and implement an Industrial Vegetable and Fruit Spoilage
              Monitoring System that effectively detects and addresses spoilage
              issues in real-time, minimizing waste and ensuring product quality
              throughout the supply chain."
            </h4>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={sihFlowchart}
              alt="Flowchart"
              className="rounded-lg shadow-md w-full md:w-1/2"
            />
            <img
              src={sihDevice}
              alt="Device"
              className="rounded-lg shadow-md w-full md:w-1/2"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-lg font-semibold text-gray-800">
              Silent Features
            </h1>
            <p className="text-gray-600">
              Our device detects the freshness of fruits and pesticides in
              vegetables using sensors and AI/ML techniques. It provides a
              cost-effective solution for monitoring spoilage and insecticides
              in crops like rice and wheat. It uses a Phosphine sensor and
              integrates cameras and microcontrollers for real-time detection.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Overview and Uses
            </h2>
            <p className="text-gray-600">
              The device monitors methane levels to detect spoilage, sending
              data to a Firebase server via an ESP8266 WiFi module. Real-time
              updates are displayed on a web interface, and notifications are
              triggered via email, buzzer, and LED indicators when thresholds
              are exceeded.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Project-2:</h2>
            <h4 className="text-lg text-gray-700">
              Advanced CCTV Analytics Solution (Final Year Project)
            </h4>
            <hr className="border-gray-300" />
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Problem Statement:
            </h2>
            <h4 className="text-gray-600">
              "Design and develop a technological solution based on live CCTV
              feeds to automatically detect incidents like street crime,
              violence, burglary, and unauthorized access, generating alerts
              and maintaining a detailed database."
            </h4>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Solution Approach:
            </h2>
            <h4 className="text-gray-600">
              This system detects abnormal behaviors like violence, theft, or
              infiltration using methods such as motion influence mapping,
              pattern recognition, and state-event modeling. Alerts are
              generated with live location, time, and crime type.
            </h4>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={project2Flowchart}
              alt="Flowchart"
              className="rounded-lg shadow-md w-full md:w-1/3"
            />
            <img
              src={mlFlowchart}
              alt="Machine Learning Flowchart"
              className="rounded-lg shadow-md w-full md:w-1/3"
            />
            <img
              src={prototypeOutput}
              alt="Prototype Output"
              className="rounded-lg shadow-md w-full md:w-1/3"
            />
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">
              Silent Features
            </h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Detects crimes through live CCTV feeds and alerts the nearest
                police station.
              </li>
              <li>
                Sends real-time alerts with live location, crime type, and time.
              </li>
              <li>
                Alerts the nearest medical facility in case of fatal injuries.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
