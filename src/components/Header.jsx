import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaHome,FaPhone,FaUser,FaUserGraduate,FaCode} from "react-icons/fa";

const Header = () => {
  return (
    <nav>
      <h1>⎡TechGeek⎦</h1>
      <main>
        <HashLink to={"/#home"}><FaHome/>Home</HashLink>
        <Link to={"/contact"}><FaPhone/>Contact</Link>
        <HashLink to={"/#about"}><FaUser/>About</HashLink>
        <HashLink to={"/#skills"}><FaUserGraduate/>skills</HashLink>
        <Link to={"/services"}><FaCode/>Services</Link>
      </main>
    </nav>
  );
};

export default Header;
