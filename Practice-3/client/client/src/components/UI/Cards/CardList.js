import React from "react";
import avatar from "../../../assets/avatar4.jpg";
import "./Card.scss";
import Cards from "./Cards";

const CardList = (props) => {
    console.log(props)
    return (
        <li>
            <a href="#">
                <div className="d-flex align-items-center">
                    <img className="media-object" src={avatar} alt="" />
                    <div className="media-body flex-fill">
                        <span className="name">{props.listData.name}</span>
                    </div>
                    <div className="text-warning fs-5 media-points">{props.listData.totalPoints}</div>
                </div>
            </a>
        </li>
    );
};

export default CardList;
