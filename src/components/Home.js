import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { Card } from "flowbite-react";
import { Blockquote } from "flowbite-react";
import "./Home.css";

function Home() {
  return (
    <Blockquote >
      <svg
        className="mb-4 h-8 w-8 text-gray-400 dark:text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      />
      <div className="flex justify-end bg-white-200">
        <Navbar fluid rounded className="bg-white-200">
          <Navbar.Toggle />
          <Navbar.Collapse className="bg-white-200">
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link as={Link} href="#">
              About
            </Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="cards">
        <Card href="#" className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
        <Card href="#" className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </Blockquote>
  );
}

export default Home;
