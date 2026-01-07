import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import dummyImage from "../../../assets/avatar1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHandPointRight,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";


const CardGrid = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="cardGridImage">
        <div
         onClick={() =>
          navigate("/myProfile", {
            state: { email: props?.userData?.email },
          })
        }
          className="mb-3 rounded-circle profileBg"
        >{props.userData.firstName?.charAt(0).toUpperCase()}</div>
      </div>

      <div className="content" onClick={() => props.onclick()}>
        <div className="display-content">
          <Card.Title className="text-center">
            {props && props.userData ? props.userData.title : "Idea Name"}
          </Card.Title>
          <p className="views">
            <small>
              <FontAwesomeIcon icon={faEye} />&nbsp;&nbsp;{props.userData.views ? props.userData.views.length : 0}
            </small>
          </p>
          <Card.Text className="text-center">
            {props.userData.description}
          </Card.Text>
        </div>
        <Card.Text className="text-end">
          <b>-{props.userData.firstName}</b>
        </Card.Text>

        {props.actionsButton}
      </div>
    </>
  );
};

export default CardGrid;
