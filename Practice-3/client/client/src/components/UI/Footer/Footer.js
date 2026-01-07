import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import classes from "./Footer.module.scss";
import epsilonLogo from "../../../assets/epsilon.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img src={epsilonLogo} alt="" className={classes.footerLogo} />
      <div className={classes.footerDiv}>
        <Container>
          <Row>
            <Col className={classes.footerText1}>
              Copyright &copy; Epsilon 2024. <br className={classes.displayMobile} />All rights reserved.
            </Col>
            <Col className={classes.footerText2}>
              Write to us @{" "}
              <a
                href="mailto:Thoughts.Foundry@epsilon.com"
                className={classes.footerEmail}
              >
                Thoughts.Foundry@epsilon.com
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
