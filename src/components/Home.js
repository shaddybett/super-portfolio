import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import "./Home.css";

function Home() {
  return (
    <div
      className="bg-black-200"
      style={{ backgroundColor: "rgb(21, 21, 48)", minHeight: "100vh" }}
    >
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
          <Link to="/about">
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
      <div className="cards" id="about">
        <div href="about" className="max-w-sm ">
          <img
            src="/home/shadrack/Pictures/IMG_20230918_005447_821.jpg"
            alt="Bett's image"
          />
        </div>
        <div href="about" className="max-w-sm ml-40">
          <h5 className="text-4xl font-semi-bold tracking-tight text-rgb(90, 90, 163) dark:text-rgb(90, 90, 163) ">
            Hi, I'm Shadrack Bett.
          </h5>
          <h5 className="text-2xl font-semi-bold tracking-tight text-white dark:text-white mb-2">
            Full Stack software Developer based in Kenya.
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
    </div>
  );
}
export default Home;
