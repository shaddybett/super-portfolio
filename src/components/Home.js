import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { Button } from 'flowbite-react';
import "./Home.css";

function Home() {
  return ( 
    <div className="bg-black-200" style={{ backgroundColor: 'rgb(21, 21, 48)', minHeight: '100vh' }}>
      <Navbar fluid rounded className="navbar">
        <span className="self-center whitespace-nowrap text-xl font-bold text-white">BETT</span>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Navbar.Link href="#" active style={{ color: 'white' }} className="links" onMouseEnter={(e) => e.target.style.color = '#6f42c1'} onMouseLeave={(e) => e.target.style.color = 'white'}>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="#" style={{ color: 'white' }} className="links" onMouseEnter={(e) => e.target.style.color = '#6f42c1'} onMouseLeave={(e) => e.target.style.color = 'white'}>
            About
          </Navbar.Link>
          <Navbar.Link href="#" style={{ color: 'white' }} className="links" onMouseEnter={(e) => e.target.style.color = '#6f42c1'} onMouseLeave={(e) => e.target.style.color = 'white'}>
            Services
          </Navbar.Link>
          <Navbar.Link href="#" style={{ color: 'white' }} className="links" onMouseEnter={(e) => e.target.style.color = '#6f42c1'} onMouseLeave={(e) => e.target.style.color = 'white'}>
            Pricing
          </Navbar.Link>
          <Navbar.Link href="#" style={{ color: 'white' }} className="links" onMouseEnter={(e) => e.target.style.color = '#6f42c1'} onMouseLeave={(e) => e.target.style.color = 'white'}>
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="cards" id="about">
        <div href="about" className="max-w-sm">
          <h5 className="text-4xl font-semi-bold tracking-tight text-rgb(90, 90, 163) dark:text-rgb(90, 90, 163) ">
            Hi, I'm Shadrack Bett.
          </h5>
          <h5 className="text-2xl font-semi-bold tracking-tight text-white dark:text-white mb-2">
            Full Stack software Developer
          </h5>
          <p className="font-normal text-white dark:text-gray-400 mt-5">
            Welcome to my portfolio, i build exceptional and accessible digital experiences for the web.
          </p>
        </div>
        <div href="about" className="max-w-sm ml-20">
            <img src="/home/shadrack/Pictures/IMG_20230918_005447_821.jpg" alt="Bett's image"/>
        </div>
      </div> 
      <div className="button">
      <Button gradientDuoTone="purpleToBlue">My Projects</Button>
      </div>
    </div>  
  );
}

export default Home;
