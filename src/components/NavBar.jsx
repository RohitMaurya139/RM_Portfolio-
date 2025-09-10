import React from 'react'
import logo from "../assets/rmlogo.webp"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <img src={logo} alt="logo" className="w-12" />
          </a>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/rohit139maurya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RohitMaurya139"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/rohiit.maurya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar