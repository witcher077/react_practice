import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import IdeaBanner from "../UI/IdeaBanner/IdeaBanner";
import arrowLeft from "../../assets/arrowLeft.png";
import "./SearchResults.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { searchDetails } from "../../services/Search-service";
import AuthContext from "../../store/auth-context";
import IdeaCard from "../IdeaCard/IdeaCard";
import avatar from "../../assets/avatar1.jpg";
import Table from "react-bootstrap/Table";

export default function SearchResults() {
  const authCtx = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState({ type: "", text: "" });
  const [searchResponse, setSearchResponse] = useState({
    users: [],
    ideas: [],
  });

  useEffect(() => {
    if (location.state) {
      const { type, text } = location.state;
      setSearchValue({ type, text });
    }
  }, [location]);

  useEffect(() => {
    if (searchValue.text) {
      getSearchResults();
    }
  }, [searchValue]);

  const getSearchResults = async () => {
    await searchDetails(authCtx.token, searchValue).then((res) => {
      if (res) {
        setSearchResponse({
          users: res?.data?.users,
          ideas: res?.data?.ideas,
        });
      }
    });
  };

  const onAllocate = (userInfo) => {
    if (userInfo?.email) {
      navigate("/profileDetail", { state: { email: userInfo?.email } });
    }
  };

  const gotoDetails = (idea) => {
    navigate("/ideaDetail", { state: { id: idea._id } });
  };

  return (
    <>
      <Container>
        <div style={{ marginTop: 20 }}>
          <a href="/adminDashboard" className="goback">
            <img src={arrowLeft} height="20" /> Back to Dashboard
          </a>
        </div>
        <div className="heading46">Search Results</div>
        <div className="sub-header">
          You have searched in{" "}
          <strong>
            <q>{searchValue.text}</q>
          </strong>{" "}
          in &nbsp;
          <span>
            <strong>
              {searchValue.type ? searchValue.type : "Users & Ideas"}
            </strong>
          </span>
        </div>
        {(searchValue.type === "user") && (
          <div className="people-list">
            <Table responsive>
              <tbody>
                {searchResponse.users?.map((user,i) => {
                  return (
                    <tr className='user-info'>
                      <td>
                        <div
                          className="align-items-center d-inline-flex"
                          onClick={() =>
                            navigate("/myProfile", {
                              state: { email: user?.email },
                            })
                          }
                        >
                          {/* <img src={avatar} alt='profile' /> */}
                          <div className="avatar">
                            {user.name?.charAt(0).toUpperCase()}
                          </div>
                          {`${user.name}`}
                        </div>
                      </td>
                      <td className="paddingTop20">{user.submitteddata} Submitted Ideas</td>
                      <td className="paddingTop20">{user.nominated} Nominated</td>
                      <td className="paddingTop20">{user.totalPoints} Points</td>
                      <td><Button variant="warning" size="sm" onClick={() => onAllocate(user)}>Allocate points</Button></td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            {searchResponse.users.length === 0 && (
              <h5 className="no-data">
                <strong>
                  <q>{searchValue.text}</q>
                </strong>{" "}
                User not found
              </h5>
            )}
          </div>
        )}
        {(searchValue.type === "ideas") && (
          <div className="ideas-list">
            <Row>
              {searchResponse.ideas.length > 0 &&
                searchResponse.ideas.map((idea, index) => {
                  return (
                    <IdeaCard
                      index={index}
                      onCardClick={() => gotoDetails(idea)}
                      value={idea}
                      isAdmin={true}
                    />
                  );
                })}
              {searchResponse.ideas.length === 0 && (
                <h5 className="no-data">
                  <strong>
                    <q>{searchValue.text}</q>
                  </strong>{" "}
                  Ideas not found
                </h5>
              )}
            </Row>
          </div>
        )}
      </Container>
    </>
  );
}
