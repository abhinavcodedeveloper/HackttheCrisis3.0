import React, { useState, useEffect, useRef } from "react";
import HomePage from "../Main-page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import hamLogo from "./ham.svg";
import logoClose from "./ham-c.svg";
import hacklogo1 from "./hacklogo.png";
import styled from "styled-components";
import "./styles.scss";

const Wrapper = styled.div`
  display: block;
  width: 100%;
  margin-top: 0;
  @media (max-width: 788px) {
    margin: 0;
    display: ${props => (props.toggle ? "none" : "static")};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? "-1000px" : "0px")};
    transition: top 1s;
    .nav-content {
      height: fit-content;
      background-color: rgba(50, 13, 136);
    }
  }
`;

const NAVBAR = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("transparent");

  const navigation = useRef();

  const listenScrollEvent = e => {
    if (window.scrollY > 800) {
      setColor("#322e33");
    } else {
      setColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    console.log(navigation);
  }, []);

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", e =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener("mousedown", e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);

  return (
    <Router>
      <nav className="nav_bar" style={{ backgroundColor: color }}>
        <Wrapper toggle={toggle} className="nav-wrapper">
          <div className="nav-content" ref={navigation}>
            <div className="my-container">
              
              <ul>
                {/* Left link section */}
                {/* <li> */}
                {/* <a
        href="https://hack-the-crisis-3.devfolio.co/"
        rel="noreferrer"
        target="_blank"
        className="main-devbtn"
      >
        <button className="dev-button">
          <svg
            className="dev-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 115.46 123.46"
            style={{height: "24px", width: "24px", "margin-right": "8px"}}
          >
            <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"></path>
            <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"></path>
          </svg>
          Apply With Devfolio
        </button>
      </a>
      </li> */}
                <li className="list--general">
                  <Link to={`#home`}>
                    <span className="links">Home </span>{" "}
                  </Link>
                </li>
                <li className="list--general">
                  <Link to={`#about`}>
                    <span className="links">About</span>{" "}
                  </Link>
                </li>
                <li className="list--general">
                  <Link to={`#themes`}>
                    <span className="links">Themes </span>{" "}
                  </Link>
                </li>
                <li className="list--general">
                  <Link to={`#timeline`}>
                    <span className="links">Timeline </span>{" "}
                  </Link>
                </li>

                {/* middle link section */}
                <li className="headerlogo_container">
                  <Link to={`#home`} >
                    <div className="header_logo">
                      <img alt="img" className="header--logo" src="logo3.1.png" />
                    </div>

                  </Link>
                </li>

                {/* Right Link Section */}
                <li className="list--general">
                  <Link to={`#prizes`}>
                    <span className="links">Prizes </span>{" "}
                  </Link>
                </li>
                <li className="list--general">
                  <Link to={`#sponsors`}>
                    <span className="links">Sponsors </span>{" "}
                  </Link>
                </li>

                <li className="list--general">
                  <Link to={`#team`}>
                    <span className="links">Team </span>{" "}
                  </Link>
                </li>
                <li className="list--general">
                  <Link to={`#faq`}>
                    <span className="links">FAQ </span>{" "}
                  </Link>
                </li>

                {/* Hamburger Navbar Menu Button for Small Screen */}
                <img
                  alt="img"
                  className="s-close"
                  onClick={() => setToggle(true)}
                  src={logoClose}
                />
              </ul>
              
            </div>
          </div>
          <div className="ease" />
        </Wrapper>
        <img
          alt="img"
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav>

      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default NAVBAR;