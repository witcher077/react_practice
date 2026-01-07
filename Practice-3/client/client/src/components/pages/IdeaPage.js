import "./IdeaPage.scss";
import React, { useState, useEffect, useContext,useRef} from "react";
import { Container, Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import {
  getIdeasDashBoard,
  postNominateUser,
  postNotifyUser,
  getIdeasSorted
} from "../../services/IdeaDashboard-service";
import icon17 from "../../assets/InnovativeIdeas-Icons/PNG/Icon (17).png";
import Select from "react-select";
import AuthContext from "../../store/auth-context";
import IdeaBanner from "../UI/IdeaBanner/IdeaBanner";
import IdeaCard from "../IdeaCard/IdeaCard";
import { getData } from "../../services/IdeaBanner-services";

let users = [];
const button_Data = [
  {
    name: "All Ideas",
    value: "all",
  },
  {
    name: "Submitted",
    value: "submitted",
  },
  {
    name: "Open for Nomination",
    value: "openForNomination",
  },
  {
    name: "Ideas In Action",
    value: "inProgress",
  },
  // {
  //   name: "On Hold",
  //   value: "onHold",
  // },
  {
    name: "Successful Ideas",
    value: "complete",
  },
  {
    name: "Free Spirit Ideas",
    value: "reject",
  },
];

const sortData = [
  {
    label: "Submitted By (A-Z)",
    value: "submitted-AZ",
  },
  {
    label: "Submitted By (Z-A)",
    value: "submitted-ZA",
  },
];

const IdeaPage = (props) => {
  const navigate = useNavigate();
  const FooterData = () => {
    return (
      <div className="d-flex justify-content-between">
        <a href="#">
          <FontAwesomeIcon icon={faHandPointRight} />
          <span>5</span>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faComment} /> <span>8</span>
        </a>
        <a href="#" className="badge bg-warning text-light">
          <span>Notify</span>
        </a>
      </div>
    );
  };

  const [userCategoryList, setUserCategoryList] = useState([]);
  const [allUserData, setUserData] = useState([]);
  const [activeButton, setActiveButton] = useState();
  const [visible, setVisible] = useState(8);
  const [submittedIdeaCount, setSubmittedIdeaCount] = useState([]);
  const [sort, setShowSort] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const authCtx = useContext(AuthContext);
  const selectInputRef = useRef();
  const [sortSelected,setSortSelected]=useState(false);
  const [sortOrder,setSortOrder]=useState(0);

  const userStatusFilter = (type) => {
    if (type !== activeButton) {
      navigate("?status="+type);
      getIdeasDashBoard(authCtx.token, 1, type).then((data) => {
        setUserData(data.records);
        setUserCategoryList(data.records);
        setTotalRecords(data.totalRecord);
        setPageNo(2);
        setVisible(8);
      });
    }
    setActiveButton(type);
    if(selectInputRef.current){
      selectInputRef.current.select.clearValue();
    }
    setSortSelected(false);
    setShowSort(false)
  };



  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const type = queryParameters.get("status");
    button_Data.forEach(element => {
      if(element.value === type) { 
        setActiveButton(element.value);
        userStatusFilter(element.value);
      } 
    });
    if(type==null){
      setActiveButton(button_Data[2].value)
    }
  })

  const handleShowMoreUsers = () => {
    if (visible >= allUserData.length) {
      if(sortSelected){
        setTimeout(() => {
          getIdeasSorted(authCtx.token, pageNo, activeButton,sortOrder).then((data) => {
            setUserData(allUserData.concat(data.records));
            setUserCategoryList(allUserData.concat(data.records));
          });
        }, 1000);
        setPageNo((prevValue) => {
          return prevValue + 1;
        });
      }
    else{
        setTimeout(() => {
          getIdeasDashBoard(authCtx.token, pageNo, activeButton).then((data) => {
            setUserData(allUserData.concat(data.records));
            setUserCategoryList(allUserData.concat(data.records));
          });
        }, 1000);
        setPageNo((prevValue) => {
          return prevValue + 1;
        });
    }
  } else{
    setVisible((prevValue) => {
      return prevValue + 8;
    });
  }
  };

  const gotoDetails = (e) => { };

  const sortUsers = (data) => {
    if(data){
      let order=0;
      setSortSelected(true);
      if (data.value === "submitted-AZ") {
        order=1;
      } else {
        order=-1;
      }
      getIdeasSorted(authCtx.token, 1, activeButton,order).then((data) => {
        setUserData(data.records);
        setUserCategoryList(data.records);
        setTotalRecords(data.totalRecord);
        setPageNo(2);
        setVisible(8);
        setSortOrder(order);
      });
    }
  };


  useEffect(() => {
    setActiveButton(props?.isAdmin ? button_Data[1].value : activeButton);
    fetchRecords(props?.isAdmin ? button_Data[1].value : activeButton);
  }, [props?.isAdmin]);

  const fetchRecords = (type) => {
    getIdeasDashBoard(authCtx.token, 1, type).then((data) => {
      setUserData(data.records);
      setUserCategoryList(data.records);
      setPageNo(2);
      setTotalRecords(data.totalRecord);
    });
    getData(authCtx.token)
      .then((data) => setSubmittedIdeaCount(data.submitteddata))
      .catch((error) => console.log(error));
      navigate('?status=openForNomination');
  };

  const notifyUser = (id) => {
    let updatedUserData = [...allUserData];
    postNotifyUser(authCtx.token, id)
      .then(() => {
        let status = "";
        allUserData.map((e, index) => {
          if (e._id === id) {
            updatedUserData[index].isNotify = true;
            status = updatedUserData[index].status;
          }
        });
        setUserData(updatedUserData);
        userStatusFilter(status);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const nominateUser = (id) => {
    let updatedUserData = [...allUserData];
    postNominateUser(authCtx.token, id)
      .then(() => {
        allUserData.map((e, index) => {
          if (e._id === id) {
            updatedUserData[index].isNominated = true;
          }
        });
        setUserData(updatedUserData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container className="idea-page-container">
      <div className={props.isAdmin ? "" : "idea-page-container"}>
        <Row style={{minHeight: '12rem'}}>
          <Col lg={10} xl={10} xxl={10}>
          <Row
            className="btn-group filterOptions bg-white ideasFilterOptions"
            role="group"
          >
            {button_Data.map((item,i) => {
              const className =
                activeButton === item.value ? "selected_tab" : "";
              const submittedClass = "btn-submitted";
              return (
                <>
              {i == 0 &&<Col lg={1} xl={1} xxl={1}
                className={`btn ${className}`}
                key={item.value}
                >
                <button
                className={`btn ${className} ${item.name === "Submitted" ? submittedClass : ""
              }`}
                  data-user-submitted={`${submittedIdeaCount}`}
                  name={item.name}
                  value={item.value}
                  key={item.value}
                  onClick={() => userStatusFilter(item.value)}
                >
                  {item.name}
                </button>
                </Col>}
                {i == 2 &&<Col lg={3} xl={3} xxl={3}
                className={`btn ${className}`}
                key={item.value}
                >
                <button
                className={`btn ${className} ${item.name === "Submitted" ? submittedClass : ""
              }`}
                  data-user-submitted={`${submittedIdeaCount}`}
                  name={item.name}
                  value={item.value}
                  key={item.value}
                  onClick={() => userStatusFilter(item.value)}
                >
                  {item.name}
                </button>
                </Col>}
                {i != 0 && i != 2  &&<Col lg={2} xl={2} xxl={2}
                className={`btn ${className}`}
                key={item.value}
                >
                <button
                className={`btn ${className} ${item.name === "Submitted" ? submittedClass : ""
              }`}
                  data-user-submitted={`${submittedIdeaCount}`}
                  name={item.name}
                  value={item.value}
                  key={item.value}
                  onClick={() => userStatusFilter(item.value)}
                >
                  {item.name}
                </button>
                </Col>}
                </>
              );
            })}
          </Row>
          </Col>
          <Col lg={2} xl={2} xxl={2}>
            <Row style={{display:'flex',justifyContent:'flex-end'}}>
            <img
              className="sortIconImg"
              src={icon17}
              onClick={() => setShowSort(!sort)}
            />
            </Row>
            <Row>
             {sort && (
              <div className="sortDivision">
                <Select
                  ref={selectInputRef}
                  name="SortBy"
                  options={sortData}
                  isMulti={false}
                  onChange={(opt) => {
                    sortUsers(opt);
                  }}
                  placeholder="Sort By"
                  isSearchable={false}
                />
              </div>
            )}
            </Row>
          </Col>
          {/* <Col lg={10} xl={10} xxl={10}></Col>
          <Col lg={2} xl={2} xxl={2}> */}
         
          {/* </Col> */}
        </Row>

        <Row>
          {userCategoryList.length > 0 &&
            userCategoryList.slice(0, visible).map((e, index) => {
              return (
                <IdeaCard
                  key={index}
                  index={index}
                  onCardClick={() => {
                    navigate("/ideaDetail", {
                      state: { id: e._id },
                    });
                  }}
                  value={e}
                  nominate={() => {
                    navigate("/ideaDetail", {
                      state: { id: e._id },
                    });
                  }}
                  notify={notifyUser}
                  isAdmin={props.isAdmin}
                />
              );
            })}
        </Row>
        <div className="loadMore fw-bold text-center">
          <a href="#!" onClick={handleShowMoreUsers}>
            {userCategoryList.length > 8 && visible <= totalRecords
              ? "Load More..."
              : " "}
          </a>
        </div>
        {userCategoryList.length <= 0 &&
          <h3 className="noIdea">Looks like we forgot to bring content to the party. We'll fill it with magic soon!</h3>
        }
      </div>
    </Container>
  );
};

export default IdeaPage;
