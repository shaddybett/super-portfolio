import React from "react";

function About() {
  return (
    <div style={{ backgroundColor: "rgb(21, 21, 48)", minHeight: "100vh", paddingTop: 0, margin: 0 }}>
      <div className="about">
        <div href="about" className="max-w-sm ml-20 mt-20 mr-60">
          <img
            src="/home/shadrack/Pictures/IMG_20230918_005447_821.jpg"
            alt="Bett's image"
          />
        </div>
        <div href="about" className="max-w-sm mt-20 ">
          <h5 className="text-4xl font-semi-bold tracking-tight text-rgb(90, 90, 163) dark:text-rgb(90, 90, 163) ">
            About me.
          </h5>
          <p className="font-normal text-white dark:text-gray-400 mt-5">
            I am Shadrack Bett a software developer from Nairobi Kenya specialized in both frontend and backend.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
