import React from "react";
import "./logoSection.css";
// import drklogo from "./darklogo.png"
import lightLogo from "../navbar/hacklogo.png"
import sym from "./sym.png";

import logo1 from "./logo4.png";
// import logo2 from "./logo2.png";
// import logo3 from "./logo3.png";

import { MIDDLE_SECTION } from "../../Module/General";

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      {/* <h1>{MIDDLE_SECTION.TITLE}</h1> */}
      <h2 style={{ fontWeight: "bold", color: "whitesmoke" }}>What is</h2>
      <h1 style={{ fontWeight: "bolder"}} >Hack the Crisis ?</h1>
      <p style={{ textAlign: "justify" }}  >{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  var myLogo;
  if (MIDDLE_SECTION.LOGO_EFFECT) {
    myLogo = (
      <div className="logoS">
        <img alt="img" className="darklogo" src={lightLogo}></img>
      </div>
    );
  } else {
    myLogo = (
      <div className="logoS">
        <img className="Logo sym" src={sym} alt="Limbohacks" />
        <img className="Logo logo1" src={logo1} alt="Limbohacks" />
      </div>
    );
  }
  return myLogo;
}

export { Logo, LogoSectionAbout };
