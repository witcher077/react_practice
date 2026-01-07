import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Cards from "../Cards/Cards";
import icon1 from "../../../assets/InnovativeIdeas-Icons/PNG/Icon (1).png";
import icon2 from "../../../assets/InnovativeIdeas-Icons/PNG/Icon (2).png";
import icon3 from "../../../assets/InnovativeIdeas-Icons/PNG/Icon (3).png";
import icon4 from "../../../assets/InnovativeIdeas-Icons/PNG/Icon (4).png";
import icon5 from "../../../assets/InnovativeIdeas-Icons/PNG/Icon (5).png";
import bannerImage from "../../../assets/thoughtFoundryHeroBanner.png";
import rightArrow from "../../../assets/InnovativeIdeas-Icons/PNG/arrow-right.png"
import { Link } from "react-router-dom";
import "./HowItWorks.scss";
const HowItWorks = () => {
  return (
    <div className="HowItWorks">
      <Container>
        <img src={bannerImage} style={{display:"none"}}/>
      <h1 className="HowItWorksHeader">How it works</h1>
      <Row>
        <Col className="divCenter">
          <img src={icon1} className="divCenterIcons" />
          <p>Submit your Idea</p>
        </Col>
        <Col className="divCenter">
          <img src={rightArrow} className="rightArrow" />
        </Col>
        <Col className="divCenter">
          <img src={icon4} className="divCenterIcons" />
          <p>Like and Vote</p>
        </Col>
        <Col className="divCenter">
        <img src={rightArrow} className="rightArrow" />
        </Col>
        <Col className="divCenter">
          <img src={icon5} className="divCenterIcons"/>
          <p>Idea is Approved</p>
        </Col>
        <Col className="divCenter">
        <img src={rightArrow}  className="rightArrow"/>
        </Col>
        <Col className="divCenter">
          <img src={icon2} className="divCenterIcons" />
          <p>Self-Nominate</p>
        </Col>
        <Col className="divCenter">
        <img src={rightArrow}  className="rightArrow"/>
        </Col>
        <Col className="divCenter">
          <img src={icon3}  className="divCenterIcons"/>
          <p>Implement</p>
        </Col>
      </Row>
      <div className="text-center">
        <Link
          to="/submitIdea"
          className="btn btn-warning submitIdeaBtn"
          role="button"
        >
          Submit Your Idea
        </Link>
      </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
