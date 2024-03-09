//

import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import { faPython } from "@fortawesome/free-brands-svg-icons";

import "./Home.css";

const Nav = () => {
  return (
    <Navbar fluid rounded className="navbar">
      <span className="self-center whitespace-nowrap text-xl font-bold text-white">
        BETT
      </span>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/">
          <Navbar.Link
            style={{ color: "white" }}
            className="links"
            onMouseEnter={(e) => (e.target.style.color = "#6f42c1")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Home
          </Navbar.Link>
        </Link>
        <Link to="/About">
          <Navbar.Link
            style={{ color: "white" }}
            className="links"
            onMouseEnter={(e) => (e.target.style.color = "#6f42c1")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            About
          </Navbar.Link>
        </Link>
        <Link to="/skills">
          <Navbar.Link
            style={{ color: "white" }}
            className="links"
            onMouseEnter={(e) => (e.target.style.color = "#6f42c1")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Skills
          </Navbar.Link>
        </Link>
        <Link to="/projects">
          <Navbar.Link
            style={{ color: "white" }}
            className="links"
            onMouseEnter={(e) => (e.target.style.color = "#6f42c1")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Projects
          </Navbar.Link>
        </Link>

        <Link to="/contact">
          <Navbar.Link
            style={{ color: "white" }}
            className="links"
            onMouseEnter={(e) => (e.target.style.color = "#6f42c1")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Contact
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Home = () => {
  return (
    <div
      className="bg-black-200 "
      style={{ backgroundColor: "rgb(21, 21, 48)", minHeight: "100vh" }}
    >
      <Nav />
      <div className="cards" id="about">
        <div href="about" className="max-w-sm ">
          <img
            src="/home/shadrack/Pictures/IMG_20230918_005447_821.jpg"
            alt="Bett"
          />
        </div>
        <div href="about" className="max-w-sm ml-40 card">
          <h5 className="text-4xl font-semi-bold  text-rgb(90, 90, 163) dark:text-rgb(90, 90, 163) ">
            Hi, I'm Shadrack Bett.
          </h5>
          <h5 className="text-2xl font-semi-bold tracking-tight text-white dark:text-white mb-2">
            Full Stack software Developer.
          </h5>
          <p className="font-normal text-white dark:text-gray-400 mt-2">
            Specialized in both front-end and back-end, i build exceptional and
            accessible digital experiences for the web.
          </p>
        </div>
      </div>
      <div>
        <Link to="/projects">
          <Button gradientDuoTone="purpleToBlue" className="buttonB">
            Download C.V
          </Button>
        </Link>
      </div>
      <About />
      <Skills />
    </div>
  );
};
export default Home;

const About = () => {
  return (
    <div className="flex flex-col  items-center  h-screen about ">
      <h5 className="text-2xl font-semibold  text-white dark:text-white mb-2 mt-20 ">
        About Me
      </h5>
      <h3 className="text-2xl font-medium  text-white dark:text-white mb-4">
        I am a passionate web developer
      </h3>
      <p className="text-2l text-white aboutext">
        Bett is a graduate from Moringa School, a bootcamp training individuals
        in the job-relevant skills currently in demand in the industry. I am
        equipped with a number of skills suitable for bot front-end and back-end
        making me a full-stack developer soaring in the field of tech. I am
        currently looking forward to an intern position to apply my skills and
        also to learn more from the experts in the field.{" "}
      </p>
      <h3 className="text-2xl font-medium  text-white dark:text-white mt-10">
        My Skills
      </h3>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills">
      <FontAwesomeIcon icon={faPython} />
      github
    </div>
  );
};
