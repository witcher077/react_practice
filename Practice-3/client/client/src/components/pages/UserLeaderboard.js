import React, { useContext, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import UserCard from '../UserCard/UserCard';
import AuthContext from "../../store/auth-context";
import { getUserLeaderboard } from '../../services/IdeaDashboard-service';
import { useNavigate } from 'react-router-dom';
import sortIcon from "../../assets/InnovativeIdeas-Icons/PNG/Icon (17).png";
import Select from 'react-select';
import './UserLeaderboard.scss';


export default function UserLeaderboard() {
      const authCtx = useContext(AuthContext);
      const navigate = useNavigate();
      const sortData = [
            {
                  label: "Name (A-Z)",
                  value: "name-AZ",
            },
            {
                  label: "Name (Z-A)",
                  value: "name-ZA",
            },
            {
                  label: "Points Ascending",
                  value: "points-asc",
            },
            {
                  label: "Points Descending",
                  value: "points-desc",
            }
      ];

      const [visibleLimit, setVisibleLimit] = useState(8);
      const [leaderboardList, setLeaderboardList] = useState([]);
      const [allUserData, setAllUserData] = useState([]);
      const [pagination, setPagination] = useState({
            skip: 1,
            limit: 20,
            sortBy: 'totalPoints',
            order: 'desc'
      })
      const [sort, setShowSort] = useState(false);

      useEffect(() => {
            retrieveUserDashboard();
      }, [pagination])

      const retrieveUserDashboard = async () => {
            await getUserLeaderboard(authCtx.token, pagination).then(res => {
                  if (res?.data?.length) {
                        setAllUserData(res.data);
                        setLeaderboardList(res.data);
                  }
            })
      }

      const onSortSelect = (sortType) => {
            switch (sortType) {
                  case "name-AZ":
                        setPagination({
                              ...pagination,
                              sortBy: "name",
                              order: "asc"
                        })
                        break;
                  case "name-ZA":
                        setPagination({
                              ...pagination,
                              sortBy: "name",
                              order: "desc"
                        })
                        break;
                  case "points-asc":
                        setPagination({
                              ...pagination,
                              sortBy: "totalPoints",
                              order: "asc"
                        })
                        break;
                  case "points-desc":
                        setPagination({
                              ...pagination,
                              sortBy: "totalPoints",
                              order: "desc"
                        })
                        break;

                  default:
                        break;
            }
      };

      const hanldlePointsAllocate = (userInfo) => {
            if (userInfo?.email) {
                  navigate('/profileDetail', { state: { email: userInfo?.email } })
            }
      }

      const handleShowMoreUsers = () => {
            if (visibleLimit >= allUserData.length) {
                  setTimeout(() => {
                        setPagination({
                              ...pagination,
                              skip: (allUserData.length % 20) + 1
                        })
                  }, 1000);
            }
            setVisibleLimit((prevValue) => {
                  return prevValue + 8;
            });
      };

      return (
            <Row>
                  <div className="d-flex justify-content-end">
                        {sort && <div className="sortDivision">
                              <Select name="SortBy" options={sortData} isMulti={false} onChange={opt => { onSortSelect(opt.value) }} placeholder="Sort By" />
                        </div>}
                        <img className="sortIconImg" src={sortIcon} onClick={() => setShowSort(!sort)} />
                  </div>
                  {
                        leaderboardList?.length && leaderboardList.slice(0, visibleLimit).map((user, i) => {
                              return (
                                    <Col md={3} key={i}>
                                          <UserCard userInfo={user} onAllocate={hanldlePointsAllocate} />
                                    </Col>
                              )
                        })
                  }
                  <div className="loadMore fw-bold text-center">
                        <a href="#!" onClick={handleShowMoreUsers}>
                              {visibleLimit >= 4 && visibleLimit < leaderboardList.length ? "Load More..." : " "}
                        </a>
                  </div>
            </Row>
      )
}
