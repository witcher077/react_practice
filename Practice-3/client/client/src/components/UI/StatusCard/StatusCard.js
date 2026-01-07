import React,{useState} from "react";
import "./StatusCard.scss";

const StatusCard = (props) => {
  
  return (
    <div className={props.style} onClick={() => { props.onclick()}}>
      {props.values.status}
      <br />
      <div style={{ marginTop: "6px" }}>{props.values.count}</div>
    </div>
  );
};

export default StatusCard;
