import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import "./Header.scss";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../../assets/user.png";
import { Animated } from "react-animated-css";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { faBell, faCircle } from "@fortawesome/free-regular-svg-icons";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const [url, setUrl] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, [scroll]);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const navigate = useNavigate();
  const Test = () => {
    return (
      <div className="d-inline-flex align-items-center">
        <div className="avatar">
          {authCtx.username?.charAt(0).toUpperCase()}
        </div>
        {/* <span className="ml-2 d-none d-lg-block">
          <span className="user_name">{authCtx?.username}</span>
        </span> */}
      </div>
    );
  };
  return (
    <header className="header">
      <Navbar
        expand="lg"
        fixed="top"
        // variant=""
        className={scroll ? "bg-black" : "bg-black"}
      >
        <Container>
          <Navbar.Brand>
            <div className="WelcomeMsg">
              <FontAwesomeIcon
                icon={faHouse}
                onClick={() => {
                  navigate("/");
                }}
                className="defaultScreen"
              />{" "}
              Welcome <span className="desktop">{authCtx?.username}</span><span className="mobile">{authCtx?.username?.substring(0,8)}</span>!
            </div>
          </Navbar.Brand>
          <Link
                to="/notification"
                role="button"
              >
          <FontAwesomeIcon
                icon={faBell}
                className="header-bell"
                data-fa-transform="rotate-100"
          />
          </Link>
          <NavDropdown title={<Test />} id="basic-nav-dropdown" className="mobile">
              <Animated
                animationIn="flipInX"
                animationOut="flipOutX"
                isVisible={true}
              >
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/myProfile", {
                      state: { email: authCtx.email },
                    })
                  }
                >
                  My page
                </NavDropdown.Item>
                {authCtx.type === "admin" ?(<NavDropdown.Item
                  onClick={() =>
                    navigate("/tracker", {
                      state: { email: authCtx.email },
                    })
                  }
                >
                  User History
                </NavDropdown.Item>):(<></>)}
                <NavDropdown.Item href="/" onClick={authCtx.logout}>
                  Logout
                </NavDropdown.Item>
              </Animated>
            </NavDropdown>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={url === "/" ? "activeNav" : ""}>
                {/* <FontAwesomeIcon icon={faHouse} /> */}
                Home
              </Nav.Link>
              <Nav.Link
                href="/ideaPage"
                className={url === "/ideaPage" ? "activeNav" : ""}
              >
                {/* <FontAwesomeIcon icon={faLightbulb} /> */}
                Ideas
              </Nav.Link>
              {/* <Nav.Link
              href="/submitIdea"
              className={url === "/submitIdea" ? "activeNav" : ""}
            >
              Submit Idea
            </Nav.Link> */}
              <Nav.Link
                href="/faqs"
                className={url === "/faqs" ? "activeNav" : ""}
              >
                {/* <FontAwesomeIcon icon={faLightbulb} /> */}
                FAQ's
              </Nav.Link>
              {authCtx.type === "admin" ? (
                <Nav.Link
                  href="/adminDashboard"
                  className={url == "/adminDashboard" ? "activeNav" : ""}
                >
                  Admin
                </Nav.Link>
              ) : (
                ""
              )}
              <Link
                to="/submitIdea"
                className="btn btn-warning submitIdeaBtn"
                role="button"
              >
                Submit Your Idea
              </Link>
            </Nav>
            {/* <Button
            variant="warning"
            size="sm"
            onClick={() => navigate("/submitIdea")}
          >
            Submit your idea
          </Button> */}
            <NavDropdown title={<Test />} id="basic-nav-dropdown" className="desktop">
              <Animated
                animationIn="flipInX"
                animationOut="flipOutX"
                isVisible={true}
              >
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/myProfile", {
                      state: { email: authCtx.email },
                    })
                  }
                >
                  My page
                </NavDropdown.Item>
                {authCtx.type === "admin" ?(<NavDropdown.Item
                  onClick={() =>
                    navigate("/tracker", {
                      state: { email: authCtx.email },
                    })
                  }
                >
                  User History
                </NavDropdown.Item>):(<></>)}
                <NavDropdown.Item href="/" onClick={authCtx.logout}>
                  Logout
                </NavDropdown.Item>
              </Animated>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
