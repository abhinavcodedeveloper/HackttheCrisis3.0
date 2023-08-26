import React, { useEffect } from "react";
import { Myinfo } from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./about.css";
import { Logo, LogoSectionAbout } from "../logo-section/logoSection.jsx";
import { FirstPrize, PrizeHeading } from "../prize tracks/prizes.jsx";
import { Prizeinfo } from "../../Module/General.js";
// import {Sponsor, SponsorsHead, SponsorUS} from "../Sponsors/sponsors.jsx";
import { Sponsor, SponsorsHead } from "../Sponsors/sponsors.jsx";
import Birds from "../Birds/birds.jsx";
import Footer from "../Footer/footer.jsx";
import { Member } from "../team/team.jsx";
import pattern from "./pattern4.png";
import Media from "../media/media.jsx";
// import mountains_front from '../navbar/mountains_front.png'
import { ThemesInfo } from "../../Module/General";
import { ThemeCard, CardGrid } from "../Themes/themes.jsx";
import img1 from "./faq1.png";
import Aos from "aos";
import 'aos/dist/aos.css'
import {
  TOP_SECTION,
  TeamInfo,
  // JudgesInfo,
  // sponsorLogos,
  frequentlyAskedQuestions,
  // eventpartner,
  // platinumsponsor,
  // goldsponsor,
  // silversponsor,
  htc2023sponsor
} from "../../Module/General.js";

import Faq from "../FAQ/faq.jsx";

// javascript Map for sponsors

function SponsorGroup(props) {
  return (
    <Row justifyContent="center" alignItems="center">
      {props.map((s, key) => (
        <Col
          key={key}
          justifyContent="center"
          alignItems="center"
          sm={12}
          lg={4}
          md={6}
        >
          {" "}
          <Sponsor link={s.link} srcx={s.src} />{" "}
        </Col>
      ))}
    </Row>
  );
}

// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  return (
    <Row>
      {props.map((s, key) => (
        <Col key={key} className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}

// Prize group ending
function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map((s, k) => (
        <Col key={k} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
}

export default function HomePage(props) {
  useEffect(() => {
    Aos.init();
  }, [])
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
  return (
    <div className="Whole_div" style={{ backgroundImage: `url(${pattern})` }}>
      <div className="color_sectionbg">
        <div className="color_section" id="home">
          <Container fluid >
            <Row className="Row info">
              <Col className="info-div" sm={12} lg={7} md={8}>
                <Myinfo />
              </Col>
              <Col className="d-image" sm={12} lg={5} md={4}>
                <br />
              </Col>
            </Row>

            <Row className="mediaInfo">
              <Col className="" sm={12} lg={12} md={12}>
                <Media />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* Logo section  */}
      <div className="logocover" id="about">
        <Row className="logoSection">
        <Col className="info-div" sm={12} lg={4} md={4} data-aos='fade-left' data-aos-duration='1000'>
            <Logo />
          </Col>
          <Col className="info-div" sm={12} lg={8} md={8} data-aos='fade-right' data-aos-duration='1000'>
            <LogoSectionAbout />
          </Col>
          
        </Row>
      </div>

      <Container fluid>
        {/* {Themes} */}

        <Row className={"themes-section"} id="themes" >
          <h1 style={{ paddingTop: "4rem", paddingBottom: "2rem" }} data-aos='fade-right' data-aos-duration='1000' >
            Hack Themes
          </h1>
          <div data-aos='fade-left' data-aos-duration='1000' >
            <CardGrid>{ThemesInfo.map(ThemeCard)}</CardGrid>
          </div>
        </Row>

        {/* ********Prizes here ***** */}
        <Row className="prizesection" id="prizes">
          <div data-aos='zoom-in' data-aos-duration='1000'  >
            <PrizeHeading type="What's in it for you ?" />
          </div>
          <div data-aos='fade-left' data-aos-duration='1000'>
            {Prizeinfo.map(PrizeGroup)}
          </div>
        </Row>
        {/* ********Prizes ending here ***** */}

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <div className="eventpartners">
            {/* <h5 className="ssubhead">Our Sponsors</h5> */}
            {htc2023sponsor.map(SponsorGroup)}
          </div>
          {/* <div className="eventpartners">
            <h5 className="ssubhead">Event Partners</h5>
            {eventpartner.map(SponsorGroup)}
          </div>
          <div className="platsponsor">
            <h5 className="ssubhead">Platinum Sponsors</h5>
            {platinumsponsor.map(SponsorGroup)}
          </div>
          <div className="goldSponsors">
            <h5 className="ssubhead">Gold Sponsors</h5>
            {goldsponsor.map(SponsorGroup)}
          </div>
          <div className="silverSponsors">
            <h5 className="ssubhead">Silver Sponsors</h5>
            {silversponsor.map(SponsorGroup)}
          </div> */}
          {/* <SponsorUS /> */}
          {/* {sponsorLogos.map(SponsorGroup)} */}
        </Row>
        {/* ********Sponsors ending here ***** */}

        <Birds top="120vh" left="0vh" type="" />

        {/* ********Team here ***** */}
        {/* <h1 id="team">Mentor</h1>

        {JudgesInfo.map(TeamMembers)} */}
        <Row className="team-section" id="team" >
          <h1 style={{ paddingTop: "6rem", color: "#ffe" }} data-aos='zoom-in' data-aos-duration='1000' >Our Team</h1>
          <div data-aos='fade-right' data-aos-duration='1000'>{TeamInfo.map(TeamMembers)}</div>
        </Row>
        {/* {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={FOOTER.JOIN_TEAM}
            content="Interested in joining our team"
          />
        )} */}
        {/* ********Team ending here ***** */}

        {/* ********Frequently asked Questions here ***** */}
        <Row className="mainFaqs" id="faq"  >
          <h1 className="faqs" style={{ paddingTop: "6rem", paddingBottom: "2rem", color: "#ffff" }}>FAQ</h1>
          <div data-aos='fade-right' data-aos-duration='1000'><Faq /></div>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
