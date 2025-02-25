import React from "react";
import "./Header.css"; // We'll create this file next
import profileImg from "./assets/profile.jpeg";


const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="profile-container">
                <img src={profileImg} alt="Profile" className="profile-img" />
                <h1 className="logo">
                    Ravali Mukkavilli
                </h1>
            </div>
            {/* <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav> */}
        </header>
    );
};

export default Header;