import React, { useState, useEffect, useContext, useRef } from "react";
import { Col, Row, Container } from "react-bootstrap";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import "./LeadBoard.scss";
import profileImg from "../../assets/userProfile.png";
import ranking from "../../assets/ranking.png";
import IdeaBanner from "../UI/IdeaBanner/IdeaBanner";
import { GetLeaders } from "../../services/LeaderBoard-service";
import { FollowUnfollowUser } from "../../services/Profile-Service";
import LeaderCard from "../LeaderCard/LeaderCard";
import Table from "react-bootstrap/Table";

const LeadBoard = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();

  const [leaders, setLeaders] = useState([]);
  const [rank, setRank] = useState("");

  useEffect(() => {
    getLeaders();
  }, []);

  const getLeaders = () => {
    GetLeaders(authCtx.token)
      .then((data) => {
        console.log(data);
        setRank(data.rank);
        setLeaders(data.data);
      })
      .catch((error) => console.log(error));
  };

  const followOrUnfollow = (item) => {
    let inputObj1 = {
      email: item?.email,
      follow: !item?.following,
    };
    FollowUnfollowUser(authCtx.token, inputObj1)
      .then((data) => {
        getLeaders();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <div className="leaderHeading">Leader board</div>
      <div
        style={{
          marginTop: "8%",
          marginBottom: "10%",
          backgroundColor: "#E6F3F8",
          padding: "4%",
        }}
      >
        <div className="ranking-section">
          <img src={ranking} className="ranking-badge" />
          <span className="myRanking">{rank}</span>
        </div>
        <Row>
          <Col
            className="leader-cards"
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            xxl={4}
          >
            <LeaderCard
              details={leaders?.[1]}
              followAction={() => followOrUnfollow(leaders?.[1])}
              id="rank2"
            />
          </Col>
          <Col
            className="leader-cards topOne"
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            xxl={4}
          >
            <LeaderCard
              details={leaders?.[0]}
              followAction={() => followOrUnfollow(leaders?.[0])}
              id="rank1"
            />
          </Col>
          <Col
            className="leader-cards"
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            xxl={4}
          >
            <LeaderCard
              details={leaders?.[2]}
              followAction={() => followOrUnfollow(leaders?.[2])}
              id="rank3"
            />
          </Col>
        </Row>
        {/* </div> */}
        <Table responsive>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Rank</th>
              <th>Points</th>
              <th>Ideas Submitted</th>
              <th>Ideas Participated</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {leaders?.slice(3)?.map((item) => {
          return (
            <tr className="LeaderCards">
              <td>
                <div
                  className="leader-card-profile-circle"
                  onClick={() =>
                    navigate("/myProfile", {
                      state: { email: item?.email },
                    })
                  }
                >
                  {item?.name?.charAt(0).toUpperCase()}
                </div>
              </td>
              <td className="listName">{item?.name}</td>
              <td className="listSubmitted">{item?.ranking}</td>
              <td className="listPoint">{item?.totalPoints}</td>
              <td className="listSubmitted">{item?.submitteddata}</td>
              <td className="listSubmitted">{item?.nominated}</td>
              <td className="listBtn"> {authCtx.email !== item?.email && (
                  <div className="btnWrapper">
                    <div
                      className={
                        !item?.following ? "followButton" : "followBtn1"
                      }
                      onClick={() => {
                        followOrUnfollow(item);
                      }}
                    >
                      {!item?.following ? "Follow" : "Following"}
                    </div>
                  </div>
                )}</td>
            </tr>
            )})}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
export default LeadBoard;
