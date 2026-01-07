import React, { useState, useEffect, useContext } from "react";
import "./LogoBanner.scss";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router";
import AuthContext from "../../../store/auth-context";
import ThoughtFoundrylogo from "../../../assets/ThoughtFoundrylogo.png";
import AIhandimg from "../../../assets/AIhandimg.png";
import bulbs from "../../../assets/bulbs.png";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const LogoBanner = (props) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  useEffect(() => {}, []);

  return (
    <div className="HeaderBanner">
      <Container>
        <Row>
          {/* <img src={SubmitIdeaBanner}/> */}
          <Row>
          <Col className="bannerImg1">
            <img src={ThoughtFoundrylogo} className="ThoughtFoundrylogo2" />
          </Col>
          <Col className="bannerImg2">
            <img src={AIhandimg} className="ai" />
          </Col>
        </Row>
        </Row>
        {/* {props.submit &&<div className="text-center">
          <Link
            to="/submitIdea"
            className="btn btn-warning submitIdeaBtn"
            role="button"
          >
            Submit Your Idea!
          </Link>
        </div>} */}
      </Container>
    </div>
  );
};

export default LogoBanner;
