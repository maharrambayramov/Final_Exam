import React from "react";
import "./Header.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <nav>
        <div className="navbar">
          <img
            src="https://preview.colorlib.com/theme/robotics/img/logo.png"
            alt=""
          />
          <ul className="navlist">
            <li>
              <Link to="/"></Link>HOME
            </li>
            <li>ABOUT US</li>
            <li>SERVICES</li>
            <li>PRODUCTS</li>
            <li>BLOG</li>
            <li>CONTACT</li>
            <li>DROPDOWN</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
