import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Container } from "react-bootstrap";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import "./TrackerPage.scss";
import profileImg from "../../assets/userProfile.png";
import ranking from "../../assets/ranking.png";
import IdeaBanner from "../UI/IdeaBanner/IdeaBanner";
import { GetLeaders } from "../../services/LeaderBoard-service";
import { FollowUnfollowUser } from "../../services/Profile-Service";
import LeaderCard from "../LeaderCard/LeaderCard";
import Table from "react-bootstrap/Table";
import { Tabs, Tab } from "react-bootstrap-tabs";

const TrackerPage = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [leaders, setLeaders] = useState([]);
  const [rank, setRank] = useState("");
  const [latestUsers, setLatestUsers] = useState([]);

  useEffect(() => {
    getLeaders();
  }, []);

  const getLeaders = () => {
    GetLeaders(authCtx.token)
      .then((data) => {
        console.log(data);
        setRank(data.rank);
        // Sort leaders by createdOn date in descending order
        const sortedLeaders = data.data.sort((a, b) => {
          const dateA = new Date(a.createdOn || "2024-04-05T15:59:08.570Z");
          const dateB = new Date(b.createdOn || "2024-04-05T15:59:08.570Z");
          return dateB - dateA;
        });
        setLeaders(sortedLeaders);
        const filteredLeaders = sortedLeaders.filter((item) => {
          const registrationDate = new Date(item?.createdOn ? item?.createdOn : "2024-04-05T15:59:08.570Z");
          const fifteenDaysAgo = new Date();
          fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 10);
          return registrationDate >= fifteenDaysAgo;
        });
        setLatestUsers(filteredLeaders);
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formattedDate;
  };

  return (
    <>
      <div className="trackerHeading">User's Tracker</div>
      <div
        style={{
          marginTop: "8%",
          marginBottom: "10%",
          backgroundColor: "#E6F3F8",
          padding: "4%",
        }}
      >
        <Tabs onSelect={(index, label) => console.log(label + " selected")}>
          <Tab label={`No. of Registered Users Within Last 10 Days (${latestUsers?.length})`} style={{margin:"1rem"}}>
            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>DOR</th>
                </tr>
              </thead>
              <tbody>
                {latestUsers?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className="listSubmitted">{item?.name}</td>
                      <td className="listSubmitted">
                        {formatDate(
                          item?.createdOn
                            ? item?.createdOn
                            : "2024-04-05T15:59:08.570Z"
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Tab>
          <Tab label={`No. of Registered Users (${leaders?.length})`} style={{margin:"1rem"}}>
            {" "}
            <Table responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>DOR</th>
                  <th>Ideas Submitted</th>
                  <th>Ideas Participated</th>
                </tr>
              </thead>
              <tbody>
                {leaders?.slice(3)?.map((item, i) => {
                  return (
                    <tr key={i} className="LeaderCards">
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
                      <td className="listSubmitted">{item?.email}</td>
                      <td className="listSubmitted">
                        {formatDate(
                          item?.createdOn
                            ? item?.createdOn
                            : "2024-04-05T15:59:08.570Z"
                        )}
                      </td>
                      <td className="listSubmitted">{item?.submitteddata}</td>
                      <td className="listSubmitted">{item?.nominated}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
export default TrackerPage;
