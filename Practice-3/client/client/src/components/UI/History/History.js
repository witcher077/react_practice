import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./History.scss";
import {
    faCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import moment from 'moment'
import Cards from "../Cards/Cards";

const History = (props) => {

    return (
        <>
            <Container className="mt-3">
                {props.historyData.length > 0 && props.historyData.slice(0, props.visible).map((e, index) => {
                    return (
                        <Row key={index}>
                            <Col md={12}>
                                <div className="historyDetail">
                                    <div className="dateIcon">
                                        <FontAwesomeIcon icon={faCircleCheck}/>
                                        <span className="dateHistory">
                                            {e.createdOn && moment(e.createdOn).format('ll')===moment().format('ll') ? "Today": moment(e.createdOn).format('ll')}
                                        </span>
                                    </div>
                                    <div className="historyBorder">
                                        <div className="historyDescription">
                                            <Cards children={e.description}></Cards>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    );
                    })}
                
                <Row>
                <div className="loadMore fw-bold text-center">
                {props.historyData.length > 15 && props.visible<=props.totalRecords ? 
                <button className="loadMoreButton" onClick={props.handleShowMoreHistory}>
                    Load More...
                </button> : " "}
                </div>
                </Row>
            </Container>
        </>
    );
};

export default History;
