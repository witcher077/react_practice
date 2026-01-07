import React from "react";
import { Button, Card, Container, Row, col, Col } from "react-bootstrap";
import dummyImage from "../../assets/avatar1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.scss";
import "./Card.scss";
import {
    faComment,
    faHandPointRight,
    faEye,
    faHouse
} from "@fortawesome/free-solid-svg-icons";

const EditIdea = (props) => {
    return (
        <>
            <Container className="mt-3">
                <Row className="d-flex flex-row">
                    <Col>
                        <h3>Title Name</h3>
                    </Col>
                    <Col className="float-md-end float-md-end float-sm-none">
                        <FontAwesomeIcon icon={faEye} />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div>
                            <h5>Category</h5>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div>
                            <p>
                                Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div>
                            <h5>Location</h5>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div>
                            <h5>Description</h5>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div>
                            <h5>Benifits</h5>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div>
                            <h5>Solution</h5>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div>
                            <h5>Effort</h5>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div>
                            <h5>Skills needed</h5>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div>
                            <h5>Team</h5>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="text-center mb-3 mr-0">
                    <a class="btn btn-warning" role="button" href="/submitIdea"><h5>Nominate</h5></a>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default EditIdea;
