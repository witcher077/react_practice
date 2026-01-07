import React, { useState, useEffect, useContext } from "react";
import "./LogoBannerInnerPage.scss";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router";
import AuthContext from "../../../store/auth-context";
import ThoughtFoundrylogo from "../../../assets/ThoughtFoundrylogo.png";
import bulbs from "../../../assets/bulbs.png";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const LogoBannerInnerPage = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  useEffect(() => {}, []);

  return (
    <div className="HeaderBanner">
      <Container>
        <Row className="mb3">
          <Col className="bannerImg1">
            <img src={ThoughtFoundrylogo} className="ThoughtFoundrylogo1" />
          </Col>
          <Col className="bannerImg2">
            <img src={bulbs} className="bulbs1" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogoBannerInnerPage;
