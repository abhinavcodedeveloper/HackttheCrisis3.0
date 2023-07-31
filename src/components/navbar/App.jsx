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
  @media (max-width: 470px) {
    margin: 0;
    display: ${props => (props.toggle ? "none" : "static")};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? "-1000px" : "0px")};
    transition: top 1s;
    .nav-content {
      height: 50%;
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
  const [color, setColor] = useState("#5D3891");

  const navigation = useRef();

  const listenScrollEvent = e => {
    if (window.scrollY > 800) {
      setColor("#5D3891");
    } else {
      setColor("#5D3891");
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
                      <img alt="img" className="header--logo" src={hacklogo1} />
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