import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import dummyImage from "../../../assets/avatar1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.scss";
import "../Cards/Card.scss";
import {
    faComment,
    faHandPointRight,
    faEye,
    faHouse
} from "@fortawesome/free-solid-svg-icons";

const SideBar = (props) => {
    return (
        <>
            <Container className="mt-3">
                    <span className="alignContainer">
                        <FontAwesomeIcon icon={faEye}/> 123
                    </span>
                <Row className="justify-content-md-center">
                    {/* <div className="profile"> */}
                        <img
                            src={dummyImage}
                            className="mb-3 rounded-circle profile"
                        />
                    {/* </div> */}
                    </Row>
                    <Row className="text-center">
                    <div >
                        <div>
                            <h5>Submitter Name</h5>
                            {/* <br /> */}
                            <p>Date: 20/21/2021</p>
                            {/* <br /> */}
                            <p> In Progress</p>
                        </div>
                    <div>
                        <ul className="list-unstyled">
                            <li>
                                <FontAwesomeIcon icon={faHouse} />
                                <div>20 Likes</div>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHouse} />
                                <div>4 Intrested</div>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHouse} />
                                <div>3 Nominated</div>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHouse} />
                                <div> 16 Comments</div>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div>

                    </div>
                </Row>
            </Container>
        </>
    );
};

export default SideBar;
