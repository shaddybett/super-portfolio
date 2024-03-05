import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import "./Home.css";

function Home() {
  return ( 
    <div>
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
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hi, I'm Shadrack Bett,Web Developer
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Passionate web developer equipped with a number of skills suiting both frontend and backend.
          </p>
        </div>
        <div href="about" className="max-w-sm ml-20">
            <img src="/home/shadrack/Pictures/IMG_20230918_005447_821.jpg" alt="Bett's image"/>
        </div>
      </div> 
    </div>  
  );
}

export default Home;
