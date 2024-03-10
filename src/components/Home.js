
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import {
  faPython,
  faJs,
  faReact,
  faHtml5,
  faCss3,
  faCodepen,
  faGithub,
  faWhmcs,
  faThemeco,
  faSquareGit,
  faNodeJs,
  faJira,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./Home.css";

const Nav = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar fluid rounded className="navbar" style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      <span className="self-center whitespace-nowrap text-xl font-bold text-white">
        BETT
      </span>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="text-white">
          <a
            href="https://github.com/shaddybett"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/shadrack-bett-a8072728b/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
        <Link to="/" onClick={(e)=> handleClick(e, "home")}>
          <Navbar.Link
            style={{ color: "white" }}
            className="links"
            onMouseEnter={(e) => (e.target.style.color = "#6f42c1")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Home
          </Navbar.Link>
        </Link>
        <Link to="/about" onClick={(e) => handleClick(e, "about")}>
          <Navbar.Link
            style={{ color: "white" }}
            className="links"
            onMouseEnter={(e) => (e.target.style.color = "#6f42c1")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            About
          </Navbar.Link>
        </Link>
        <Link to="/projects" onClick={(e) => handleClick(e, "projects")}>
          <Navbar.Link
            style={{ color: "white" }}
            className="links"
            onMouseEnter={(e) => (e.target.style.color = "#6f42c1")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Projects
          </Navbar.Link>
        </Link>

        <Link to="/contact" onClick={(e) => handleClick(e, "contact")}>
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
    <div id="home"
      className="bg-black-200 "
      style={{ backgroundColor: "rgb(21, 21, 48)", maxHeight: "100%" }}
    >
      <div className="cards" id="about">
        <div href="about" className="max-w-sm ">
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*C8rCYgM9TgxIHTOLwFtKjw.png"
            alt="Bett"
          />
        </div>
        <div href="about" className="max-w-sm ml-40 card">
          <h5 className="text-4xl font-semi-bold  text-rgb(90, 90, 163) dark:text-rgb(90, 90, 163) mt-20">
            Hi, I'm Shadrack Bett
          </h5>
          <h5 className="text-2xl font-semi-bold tracking-tight text-white dark:text-white mb-2">
            Full-Stack software Developer
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
      <Nav/>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;

const About = () => {
  return (
    <div className="flex flex-col  items-center  h-screen about " id="about">
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
      <div className="skills-container">
        <div className="skill-card">
          <FontAwesomeIcon icon={faJs} />
          <span>JavaScript</span>
        </div>

        <div className="skill-card">
          <FontAwesomeIcon icon={faReact} />
          <span>React</span>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faHtml5} />
          <span>Html</span>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faCss3} />
          <span>CSS</span>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faPython} />
          <span>Python</span>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faCodepen} />
          <span>Flask</span>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faWhmcs} />
          <span>postgres</span>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faThemeco} />
          <span>SQLite</span>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faNodeJs} />
          <span>NodeJs</span>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faJira} />
          <span>Jira</span>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faSquareGit} />
          <span>Git</span>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faGithub} />
          <span>Github</span>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects h-screen" id="projects">
      <h5 className="text-2xl font-semibold text-white dark:text-white mb-2 mt-20">
        My Projects
      </h5>
      <h3 className="text-2xl font-medium text-white dark:text-white mb-4">
        Real life projects I have been involved in
      </h3>
      <div className="project-cards">
        <ProjectCard
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ullamcorper ex."
        />
        <ProjectCard
          title="Project 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ullamcorper ex."
        />
        <ProjectCard
          title="Project 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ullamcorper ex."
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    
    </div>
  );
};
const Contact = () => {
  return (
    <div className="contacts" id="contact">
      <h5 className="text-2xl font-semibold text-white dark:text-white mt-10  contact">
        Contact Me
      </h5>
      <div className="contact-section">
        <div className="contact-details">
          <h5 className="text-xl font-medium text-white dark:text-white">
            I am social get in touch!
          </h5>

          <div className="detail">
            <span className="text-xl text-white">Email:</span>
            <p className="text-l text-white">shadrack.bett.92@gmail.com</p>
          </div>
          <div className="detail ">
            <span className="text-xl text-white">Phone:</span>
            <p className=" text-white">+254 769 465 418</p>
          </div>
          <div className="text-white mt-10">
          <a
            href="https://github.com/shaddybett"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/shadrack-bett-a8072728b/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
        </div>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <>
            <Button gradientDuoTone="purpleToBlue" className="buttonc">
              <p className="text-xl font-medium text-white dark:text-white ml-3 mb-4">
                Send
              </p>
            </Button>
          </>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2024 Bett Shadrack. All rights reserved.</p>
      </div>
    </footer>
  );
};







