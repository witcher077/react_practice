import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import "./LeaderCard.scss";
import { useNavigate } from "react-router";
import { Col, Row, Container } from "react-bootstrap";

export default function LeaderCard(props) {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="leader-cards">
      <div className="leader-card" id={props?.id}>
        <div className="leader-card-header">
          <Row>
            <Col xs={3} sm={3} md={2} lg={3} xl={3} xxl={3}>
              <div
                className="leader-details-profile-circle"
                onClick={() =>
                  navigate("/myProfile", {
                    state: { email: props?.details?.email },
                  })
                }
              >
                {props?.details?.name?.charAt(0).toUpperCase()}
              </div>
            </Col>
            <Col xs={5} sm={5} md={6} lg={5} xl={6} xxl={6}>
              <div
                className={
                  props?.id === "rank1" ? "top1LeaderName" : "top2LeaderName"
                }
              >
                {props?.details?.name}
              </div>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={3} xxl={3}>
              <div
                className={
                  props?.id === "rank1" ? "top2LeaderPoint" : "top2LeaderPoint"
                }
              >
                {props?.details?.totalPoints}
              </div>
            </Col>
          </Row>
          <hr />
          {authCtx.email !== props?.details?.email && (
            <div className="btnWrapper">
              <div
                className={
                  !props?.details?.following ? "followButton" : "followBtn1"
                }
                onClick={props?.followAction}
              >
                {!props?.details?.following ? "Follow" : "Following"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
