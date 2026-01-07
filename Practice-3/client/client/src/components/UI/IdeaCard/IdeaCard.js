import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faEye
} from "@fortawesome/free-solid-svg-icons";

import "./IdeaCard.scss";
import { useNavigate } from "react-router";

const IdeaCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="ideaCard">
    <div
      className="ideaProfile-circle"
      onClick={() =>
        navigate("/myProfile", {
          state: { email: props?.item?.email },
        })
      }
    >{props.item?.firstName.charAt(0).toUpperCase()
    }</div>
    <div className="cardContent" onClick={() => props.onclick()}>
      <p className="viewCount1">
        <small>
            <FontAwesomeIcon icon={faEye} />{" "}
            {props.item?.views?.length}
        </small>
      </p>
      <p className="ideaName1">{props.item?.title}</p>
      <p className="des">{props.item?.description}</p>
      <p className="author">- {props.item?.firstName}</p>
      <hr />
      {props.children}
    </div>
  </div>
  );
};

export default IdeaCard;
