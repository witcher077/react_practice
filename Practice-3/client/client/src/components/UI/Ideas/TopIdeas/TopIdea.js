import React, { useEffect, useContext, useState } from "react";
import { TopIdeas } from "../../../../services/Idea-Services";
import AuthContext from "../../../../store/auth-context";
import { useNavigate } from "react-router";
import "./TopIdea.scss";
import { Col, NavItem, Row ,Container} from "react-bootstrap";
import IdeaCard from "../../../UI/IdeaCard/IdeaCard";
import pointout from "../../../../assets/InnovativeIdeas-Icons/PNG/pointout.png";
import comments from "../../../../assets/InnovativeIdeas-Icons/PNG/comments.png";
import profileImg from "../../../../assets/userProfile.png";
import eye from "../../../../assets/eye.png";

const TopIdea = () => {
  const authCtx = useContext(AuthContext);
  const [topIdeaList, setTopIdeaList] = useState([]);
  const [topLeaderList, setTopLeaderlist] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    TopIdeas(authCtx.token)
      .then((data) => {
        setTopIdeaList(data.topIdeasList);
        setTopLeaderlist(data.topLeaderlist);
        console.log(data.topIdeasList);
      })
      .catch((error) => console.log(error));
  },[]);

  const IdeaCardFooter = (props) => {
    return (
      <Row>
        <Col className="col-sm-6">
          <p className="leftContent">
            <img src={pointout} alt="" className="eye-icon1" />{" "}
            {props?.ideaData?.likes?.length}
          </p>
        </Col>
        <Col className="col-sm-6">
          <p className="rightContent">
            <img src={comments} alt="" className="eye-icon1" />{" "}
            {props?.ideaData?.comments.length} Comments
          </p>
        </Col>
      </Row>
    );
  };

  return (
    <Container>
      <Row className="marginBottom20px">
        <Col xs={12} sm={12} md={12} lg={8} xl={9} xxl={9}>
          <h1 className="TopIdeasHeading">Top Ideas</h1>
          <Row>
            {topIdeaList?.map((item, index) => {
              return (
                <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} className="marginTop60">
                  <IdeaCard
                    item={item}
                    profileImg={profileImg}
                    eye={eye}
                    onclick={() =>
                      navigate("/ideaDetail", {
                        state: { id: item?._id },
                      })
                    }
                  >
                    <IdeaCardFooter ideaData={item} />
                  </IdeaCard>
                </Col>
              );
            })}
          </Row>
          {topIdeaList?.length > 0 && <div className="viewmore1">
            <a href="/ideaPage">View More</a> 
          </div>}
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} xl={3} xxl={3}>
          <div className="leaderBoardDiv1 marginTop90">
            <p className="leaderBoardHeading">Leaderboard</p>
            <div className="leaderBoardListDiv">
              <div className="listDiv">
                {topLeaderList?.splice(0, 5).map((item) => {
                  return (
                    <Row className="leaderRow">
                      {/* <Col className="col-sm-2 col-xs-1">
                        <div className="leader-profile">{item?.name?.charAt(0).toUpperCase()}</div>
                      </Col> */}
                      <Col xs={9} sm={9} md={9} lg={9} xl={9} xxl={9} className="leaderName"><div style={{display:"flex",flexDirection:"row"}}><div className="leader-profile">{item?.name?.charAt(0).toUpperCase()}</div><div className="top-profile-name">{item?.name}</div></div></Col>
                      <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3} className="leaderPoints">{item?.totalPoints} pts</Col>
                    </Row>
                  );
                })}
              </div>
              {topLeaderList?.length > 0 && <div className="viewmore2">
                <a href="/leadboard">View More</a> 
              </div>}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TopIdea;
