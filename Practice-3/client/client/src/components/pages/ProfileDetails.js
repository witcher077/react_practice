import React, { useState, useEffect, useContext, useRef } from "react";
import { Col, Container, Row, Alert,Button } from "react-bootstrap";
import "./ProfileDetails.scss";
import profileImg from "../../assets/userProfile.png";
import eye from "../../assets/eye.png";
import prize from "../../assets/InnovativeIdeas-Icons/PNG/prize-nobg.png";
import TextInput from "../FormElements/TextInput";
import AuthContext from "../../store/auth-context";
import StatusCard from "../UI/StatusCard/StatusCard";
import pointout from "../../assets/InnovativeIdeas-Icons/PNG/pointout.png";
import comments from "../../assets/InnovativeIdeas-Icons/PNG/comments.png";
import IdeaCard from "../UI/IdeaCard/IdeaCard";
import arrowLeft from "../../assets/arrowLeft.png"
import History from "../UI/History/History";
import { getUserHistory } from "../../services/History-service";
import star from "../../assets/InnovativeIdeas-Icons/PNG/star.png";
import user from "../../assets/InnovativeIdeas-Icons/PNG/user.png";
import quoteIcon from "../../assets/InnovativeIdeas-Icons/PNG/quoteIcon.png";
import workspace from "../../assets/InnovativeIdeas-Icons/PNG/black-suitcase.png";

import { useNavigate } from "react-router";
import {
  GetProfileDetails,
  GetMyIdeas,
  GetMyNominatedIdeas,
  FollowUnfollowUser,
  AllocatePoints,
} from "../../services/Profile-Service";
import { useLocation } from "react-router-dom";
import ModalBox from "../UI/ModalBox/ModalBox";

const ProfileDetails = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const form = useRef(null);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setuserData] = useState({});
  const [myIdeas, setMyIdeas] = useState([]);
  const [myNominatedIdeas, setMyNominatedIdeas] = useState([]);
  const [show, setShow] = useState(false);

  const [myIdeasStatus, setMyIdeasStatus] = useState([]);

  const [submittedIdeasStatus, setSubmittedIdeasStatus] = useState([]);

  const [visible, setVisible] = useState(15);
  const [historyData, setHistoryData] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [pageNo,setPageNo]=useState(1);
  const [totalRecords,setTotalRecords]=useState(0);

  useEffect(() => {
    setSelectedTab(0);
    getUserDetails();
    getMyIdeas("all");
    getMyNominatedIdeas("inProgress");
  }, [location]);

  const getUserDetails = () => {
    GetProfileDetails(authCtx.token, location.state.email)
      .then((data) => {
        setuserData(data);
      })
      .catch((error) => console.log(error));
  };

  const getMyIdeas = (type) => {
    let inputObj1 = {
      email: location.state.email,
      status: type,
    };
    GetMyIdeas(authCtx.token, inputObj1)
      .then((data) => {
        setMyIdeasStatusList(type, data)
        setMyIdeas(data.userIdeaList.data);
      })
      .catch((error) => console.log(error));
  };

  const setMyIdeasStatusList = (val, data) => {
    switch (val) {
      case "all":
        setMyIdeasStatus([
          { status: "All", count: data.count.alldata, value: "all", style: "statusCardActive" },
          { status: "Submitted", count: data.count.submitteddata, value: "submitted", style: "statusCard", },
          { status: "Inprogress", count: data.count.inprogressdata, value: "inProgress", style: "statusCard", },
          { status: "Completed", count: data.count.completedata, value: "complete", style: "statusCard", },
        ]);
        break;
      case "submitted":
        setMyIdeasStatus([
          { status: "All", count: data.count.alldata, value: "all", style: "statusCard" },
          { status: "Submitted", count: data.count.submitteddata, value: "submitted", style: "statusCardActive", },
          { status: "Inprogress", count: data.count.inprogressdata, value: "inProgress", style: "statusCard", },
          { status: "Completed", count: data.count.completedata, value: "complete", style: "statusCard", },
        ]);
        break;
      case "inProgress":
        setMyIdeasStatus([
          { status: "All", count: data.count.alldata, value: "all", style: "statusCard" },
          { status: "Submitted", count: data.count.submitteddata, value: "submitted", style: "statusCard", },
          { status: "Inprogress", count: data.count.inprogressdata, value: "inProgress", style: "statusCardActive", },
          { status: "Completed", count: data.count.completedata, value: "complete", style: "statusCard", },
        ]);
        break;
      case "complete":
        setMyIdeasStatus([
          { status: "All", count: data.count.alldata, value: "all", style: "statusCard" },
          { status: "Submitted", count: data.count.submitteddata, value: "submitted", style: "statusCard", },
          { status: "Inprogress", count: data.count.inprogressdata, value: "inProgress", style: "statusCard", },
          { status: "Completed", count: data.count.completedata, value: "complete", style: "statusCardActive", },
        ]);
        break;
    }
  };

  const getMyNominatedIdeas = (type) => {
    let inputObj1 = {
      email: location.state.email,
      status: type,
    };
    GetMyNominatedIdeas(authCtx.token, inputObj1)
      .then((data) => {
        setSubmittedIdeasStatusList(type, data)
        setMyNominatedIdeas(data.nominatedIdeaList.data);
      })
      .catch((error) => console.log(error));
  };

  const setSubmittedIdeasStatusList = (val, data) => {
    switch (val) {
      case "inProgress":
        setSubmittedIdeasStatus([
          { status: "Inprogress", count: data.count.inprogressdata, value: "inProgress", style: "statusCardActive" },
          { status: "Completed", count: data.count.completedata, value: "complete", style: "statusCard" },
        ]);
        break;
      case "complete":
        setSubmittedIdeasStatus([
          { status: "Inprogress", count: data.count.inprogressdata, value: "inProgress", style: "statusCard" },
          { status: "Completed", count: data.count.completedata, value: "complete", style: "statusCardActive" },
        ]);
        break;
    }
  };

  const followOrUnfollow = (val) => {
    let inputObj1 = {
      email: location.state.email,
      follow: val,
    };
    FollowUnfollowUser(authCtx.token, inputObj1)
      .then((data) => {
        // console.log(data);
        getUserDetails();
        // alert(data.message);
      })
      .catch((error) => console.log(error));
  };

  const [edit, setEdit] = useState(false);
  const formElements = [
    {
      name: "reward_point",
      errorMessage: "Points cannot be blank",
      required: true,
    },
  ];
  const formInitials = { reward_point: 0 };
  const [formValues, setFormValues] = useState(formInitials);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showSubmenu,setShowSubmenu]=useState(false);
  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
    if (formValues.reward_point > 0) {
      setModalShow(true);  
    }
  };
  const allocatePoints=()=>{
    let inputObj1 = [
      {
        email: location.state.email,
        totalPoints: formValues.reward_point,
      },
    ];
    AllocatePoints(authCtx.token, inputObj1)
      .then((data) => {
        getUserDetails();
        form.current.reset();
        let formInitials = { reward_point: 0 };
        setFormValues(formInitials);
        setModalShow(false);
        setShow(true);
      })
      .catch((error) => console.log(error));
  }
  const validateForm = (formData) => {
    const errors = {};
    if (formData.reward_point <= 0) {
      errors.reward_point = "Points are Required";
    }

    return errors;
  };
  const getHistoryDetails = () => {
    getUserHistory(authCtx,location.state.email,1)
      .then((data) => {
        setHistoryData(data.data);
        setTotalRecords(data.totalRecord)
        setPageNo((prevValue) => {
          return prevValue + 1;
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleShowMoreHistory = () => {
    if (visible >= historyData.length) {
      setTimeout(() => {
        getUserHistory(authCtx,location.state.email,pageNo)
          .then((data) => {
            setHistoryData(historyData.concat(data.data));
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }, 1000);
      setPageNo((prevValue) => {
        return prevValue + 1;
      });
    }
    setVisible((prevValue) => {
      return prevValue + 5;
    });
  };

  const onSelectTab = (i) => {
    setSelectedTab(i);
    if (i == 3) {
      setPageNo(1);
      getHistoryDetails();
      setVisible(15);
    }
  };

  const IdeaCardFooter = (props) => {
    return (
      <Row>
        <Col className="col-sm-6">
          <p className="leftContent">
            <img src={pointout} alt="" className="eye-icon1" /> {props?.data?.likes?.length}
          </p>
        </Col>
        <Col className="col-sm-6">
          <p className="rightContent">
            <img src={comments} alt="" className="eye-icon1" /> {props?.data?.comments?.length} Comments
          </p>
        </Col>
      </Row>
    );
  };
  const openSubmenu=()=>{
    setShowSubmenu(!showSubmenu);
    if(!showSubmenu==false){
      onSelectTab(0);
    }
    else{
      onSelectTab(1);
    }
  }
  return (
    <Container style={{marginTop:30}}>
      {authCtx.type == "admin" && (
        <div>
          <a href="/adminDashboard" className="goback">
            <img src={arrowLeft} height="20" />  Back to Dashboard
          </a>
        </div>
      )}
      <Row style={{ marginTop: '2%'}}>
        <Col className="profileTabs" xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
          <Row className="profileTabText"
                style={{
                  backgroundColor: selectedTab === 0 ? "#EFF7FF" : "#FDFDFD",
                  color: selectedTab === 0 ? "#007BFF" : "#000000",
                  borderLeft: selectedTab === 0 ? "5px solid #007BFF" : ""
                }}
                onClick={() => 
                  {onSelectTab(0)
                  setShowSubmenu(false);
                  }
                }>
            <Col className="col-sm-4 imageAlign"
            style={{
              paddingRight: selectedTab === 0 ?"16px": "12px"
            }}
            >
              <img src={star} height="15" />
            </Col>
            <Col className="col-sm-8">
              Profile
            </Col>
          </Row>
          <Row className="profileTabText"
                style={{
                  backgroundColor: (selectedTab === 1 || selectedTab === 2 ) ? "#EFF7FF" : "#FDFDFD",
                  color: (selectedTab === 1 || selectedTab === 2 ) ? "#007BFF" : "#000000",
                  borderLeft: (selectedTab === 1 || selectedTab === 2 ) ? "5px solid #007BFF" : ""
                }}
                onClick={() => openSubmenu()}>
            <Col className="col-sm-4 imageAlign"
            style={{
              paddingRight: selectedTab === 1 ?"16px": "12px"
            }}
            >
              <img src={workspace} height="15" />
            </Col>
            <Col className="col-sm-8">
              Workspace
            </Col>
          </Row>
          {showSubmenu && (
            <>
            <Row className="profileTabText"
                style={{
                  backgroundColor: selectedTab === 1 ? "#FFFFC2" : "#FDFDFD",
                  //color: selectedTab === 1 ? "#ffc107" : "#000000",
                  borderLeft: selectedTab === 1 ? "5px solid #ffc107" : ""
                }}
                onClick={() => onSelectTab(1)}>
            <Col className="col-sm-4 imageAlign">
            </Col>
            <Col className="col-sm-8">
                <div className="submenu">Ideas submitted</div>
            </Col>
          </Row>
          <Row className="profileTabText"
                style={{
                  backgroundColor: selectedTab === 2 ? "#FFFFC2" : "#FDFDFD",
                  // color: selectedTab === 2 ? "#ffc107" : "#000000",
                  borderLeft: selectedTab === 2 ? "5px solid #ffc107" : ""
                }}
                onClick={() => onSelectTab(2)}>
            <Col className="col-sm-4 imageAlign">
            </Col>
            <Col className="col-sm-8">
                <div className="submenu">Nominated Ideas</div>
            </Col>
          </Row>
            </>
          )}
          {( location?.state?.email === authCtx.email || authCtx.type == "admin") &&
          <Row className="profileTabText"
                style={{
                  backgroundColor: selectedTab === 3 ? "#EFF7FF" : "#FDFDFD",
                  color: selectedTab === 3 ? "#007BFF" : "#000000",
                  borderLeft: selectedTab === 3 ? "5px solid #007BFF" : ""
                }}
                onClick={() => 
                  {onSelectTab(3)
                    setShowSubmenu(false);
                  }
                }>
            <Col className="col-sm-4 imageAlign">
              <img src={user} height="15" width="17" />
            </Col>
            <Col className="col-sm-8">
              Activity
            </Col>
          </Row>
          }
        </Col>
        <Col xs={12} sm={12} md={12} lg={9} xl={9} xxl={9}>
          {selectedTab === 0 && (
            <>
              {
                modalShow && (
                  <ModalBox
                    show={modalShow}
                    isfooter={
                          <>
                                <Button variant="warning" onClick={() => allocatePoints()}>Yes</Button>
                                <Button variant="warning" onClick={() => setModalShow(false)}>No</Button>
                          </>}
                    isalertdescription="Do you confirm?"
                    isconfirmation={formValues.reward_point+" point's will be allocated"}
                  />
                )
                }
              <Row className="paddingRow">
                <Col className="rewardView" xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <div className="prizeDiv">
                    <img src={prize} alt="" className="prize" />
                    <p className="rewardsText">&nbsp; Your total rewards &nbsp;</p>
                    <p className="rewardsPoints">&nbsp; {userData?.totalPoints}</p>
                  </div>
                </Col>
              </Row>
              <Row className="profileRow paddingRow">
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <Row className="profileView"> 
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3} style={{display:'flex',justifyContent:'center'}}>
                      <div className="myprofile-circle" >{userData?.name?.charAt(0).toUpperCase()}</div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={9} xl={9} xxl={9} style={{marginTop:'16px'}}>
                      <Row>
                        <Col className="label1" xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>First Name</Col>
                        <Col className="value1" xs={11} sm={11} md={8} lg={8} xl={8} xxl={8}>{userData?.firstName}</Col>
                      </Row>
                      <Row>
                        <Col className="label1" xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>Last Name</Col>
                        <Col className="value1" xs={11} sm={11} md={8} lg={8} xl={8} xxl={8}>{userData?.lastName}</Col>
                      </Row>
                      <Row>
                        <Col className="label1" xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>Email ID</Col>
                        <Col className="value1" xs={11} sm={11} md={8} lg={8} xl={8} xxl={8}>{userData?.email}</Col>
                      </Row>
                    </Col>
                    
                    <Col md={4} lg={3} xl={3} xxl={3}></Col>
                    <Col xs={12} sm={12} md={8} lg={9} xl={9} xxl={9}>
                      {authCtx.type == "user" && authCtx.email?.toLowerCase() !== userData?.email?.toLowerCase() &&
                        <Row>
                          <Col className="padding10" xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                            {!userData?.following && (
                              <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() => followOrUnfollow(true)}
                              >
                                Follow
                              </button>
                            )}
                            {userData?.following && (
                              <button
                                type="submit"
                                className="btn btn-warning"
                                onClick={() => followOrUnfollow(false)}
                              >
                                Following
                              </button>
                            )}
                          </Col>
                        </Row>}
                    </Col>
                  </Row>
                </Col>
                
              </Row>
              {authCtx.type == "admin" && location?.state?.email !== authCtx.email && (
                <>
                <Row className="allocatePoints">
                  <Col className="inputLabelText" xs={5} sm={5} md={6} lg={6} xl={5} xxl={5}>Allocate Points :</Col>
                  <Col xs={7} sm={7} md={6} lg={6} xl={7} xxl={7}>
                    <form ref={form} onSubmit={submitForm} noValidate>
                      <Row>
                        <Col className="inputLabel" xs={7} sm={7} md={8} lg={7} xl={8} xxl={8}>
                          <TextInput
                            name="reward_point"
                            error={formErrors.reward_point}
                            InputData={formElements[0]}
                            onChange={onChange}
                            type="number"
                          />
                        </Col>
                        <Col xs={5} sm={5} md={4} lg={2} xl={3} xxl={3}>
                          <button type="submit" className="btn btn-warning submitBtn">
                            Submit
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </Col>
                </Row>
                <Row>
                  <Alert show={show} variant="success" dismissible onClose={() => setShow(false)}>
                    <p className="pointsSuccess">Points has been added</p> 
                  </Alert>
                </Row>
                </>
              )}
              <Row className="quoteSection paddingRow">
                <Col xs={12} sm={12} md={6} lg={8} xl={8} xxl={8}>
                  <div className="quoteSection">
                    <p className="profileQuote">{"“"}Creativity is thinking up new things. Innovation is doing new things.{"“"}</p>
                    <p className="profileQuoteAuthor">{"-"} Theodore Levitt</p>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                  <div>
                    <img src={quoteIcon} alt=""/>
                  </div>
                </Col>
              </Row>
            </>
          )}
          {selectedTab === 1 && (
            <>
              <div>
                <Row style={{ marginBottom: 50}}>
                  {myIdeasStatus?.map((item) => {
                    return (
                      <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3} style={{marginTop:10 }}>
                        <StatusCard
                          values={item}
                          onclick={() => getMyIdeas(item.value)}
                          style={item.style}
                        />
                      </Col>
                    );
                  })}
                </Row>
                <Row>
                  {myIdeas?.map((item, index) => {
                    return (
                      <Col className="marginTop60" xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <IdeaCard
                          item={item}
                          profileImg={profileImg}
                          eye={eye}
                          onclick={() => navigate("/ideaDetail", {
                            state: { id: item._id },
                          })}
                        >
                          <IdeaCardFooter data={item}/>
                        </IdeaCard>
                      </Col>
                    );
                  })}
                </Row>
              </div>
              </>
          )}
          {selectedTab === 2 && (
                <>
                <Row>
                  {submittedIdeasStatus?.map((item) => {
                    return (
                      <Col className="col-sm-4">
                        <StatusCard
                          values={item}
                          onclick={() => getMyNominatedIdeas(item.value)}
                          style={item.style}
                        />
                      </Col>
                    );
                  })}
                </Row>
                <Row>
                  {myNominatedIdeas?.map((item, index) => {
                    return (
                      <Col className="marginTop60" xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <IdeaCard
                          item={item}
                          profileImg={profileImg}
                          eye={eye}
                          onclick={() => navigate("/ideaDetail", {
                            state: { id: item._id },
                          })}
                        >
                          <IdeaCardFooter data={item}/>
                        </IdeaCard>
                      </Col>
                    );
                  })}
                </Row>
            </>
          )}
          {selectedTab === 3 && (
            <>
              <History
                historyData={historyData}
                visible={visible}
                handleShowMoreHistory={handleShowMoreHistory}
                totalRecords={totalRecords}
              ></History>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};


export default ProfileDetails;
