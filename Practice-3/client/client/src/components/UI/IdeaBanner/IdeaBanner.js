import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./IdeaBanner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import {
  faLightbulb,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
import innovationIdeaImg from "../../../assets/InnovativeIdeas-Icons/PNG/Icon (28).png";
import { getData } from "../../../services/IdeaBanner-services";
import AuthContext from "../../../store/auth-context";
import bulb from "../../../assets/InnovativeIdeas-Icons/PNG/bulb.png";
import nominate from "../../../assets/InnovativeIdeas-Icons/PNG/Nomination.png"
import starBadge from "../../../assets/InnovativeIdeas-Icons/PNG/starBadge.png";
import checkMark from "../../../assets/InnovativeIdeas-Icons/PNG/checkMark.png";


const IdeaBanner = () => {
  const [count, setCount] = useState({});
  const [counter, setCounter] = useState("0");
  const authCtx = useContext(AuthContext);

  const ideasCounter = (maximum) => {
    let start = 0;
    let alldata = maximum.toString();
    const end = parseInt(alldata.substring(0, 3))
    if (start === end) return;
    let incrementTime = (2 / end) * 1000;
    let timer = setInterval(() => {
      start += 1
      setCounter(String(start) + alldata.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }

  useEffect(() => {
    getData(authCtx.token)
      .then((data) => {
        ideasCounter(data.alldata)
        setCount(data)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className={classes.innovationLayout}>
      <Row className="justify-content-md-start text-center">
        <Col sm={12} md={12} lg={5} xl={5} xxl={5} className={classes.ideasCountNum}>
          <div className={classes.ideasCountText}>
            <h1 className={classes.innovativeIdeasCount}>#{counter}</h1>
            <h1 className={classes.ideasText}>&nbsp;ideas</h1>
          </div>
          <p className={classes.countMessage}>and counting !!!</p>
        </Col>
        <Col sm={12} md={12} lg={7} xl={7} xxl={7} className={classes.ideaCountList}>
          <div className={classes.ideaCount}>
          <a href="/ideaPage?status=submitted">
            <img
              src={bulb}
              className={classes.innovationIdeaStatusImg}
            />
          </a>
            <p className={classes.innovationIdeaStatus}>Submitted</p>
            <p className={classes.innovationIdeaCount}>{count.submitteddata}</p>
          </div>
          <div className={classes.ideaCount}>
            <a href="/ideaPage?status=openForNomination">
            <img
              src={nominate}
              className={classes.innovationIdeaStatusImg}
            />
            </a>
            <p className={classes.innovationIdeaStatus}>In Nomination</p>
            <p className={classes.innovationIdeaCount}>{count.openForNominationdata}</p>
          </div>
          <div className={classes.ideaCount}>
          <a href="/ideaPage?status=inProgress">
            <img
              src={starBadge}
              className={classes.innovationIdeaStatusImg}
            />
            </a>
            <p className={classes.innovationIdeaStatus}>In Progress</p>
            <p className={classes.innovationIdeaCount}>
              {count.inprogressdata}
            </p>
          </div>
          <div className={classes.ideaCount}>
          <a href="/ideaPage?status=complete">
            <img
              src={checkMark}
              className={classes.innovationIdeaStatusImg}
            />
            </a>
            <p className={classes.innovationIdeaStatus}>Completed</p>
            <p className={classes.innovationIdeaCount}>{count.completedata}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IdeaBanner;
