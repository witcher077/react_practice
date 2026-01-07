import React, { useState, useEffect, useContext, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AuthContext from "../../store/auth-context";
import arrowLeft from "../../assets/arrowLeft.png";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import "./NotificationDetails.scss";
import profileImg from "../../assets/userProfile.png";
import {
  GetNotifications,
  ReadNotification,
} from "../../services/Notification-services";
import moment from "moment";

const NotificationDetails = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = () => {
    GetNotifications(authCtx.token)
      .then((data) => {
        console.log(data);
        setNotifications(data.data);
      })
      .catch((error) => console.log(error));
  };

  const onReadNotification = (Id) => {
    let inputObj = {
      id: Id,
      isRead: true,
    };
    ReadNotification(authCtx.token, inputObj)
      .then((data) => {})
      .catch((error) => console.log(error));
  };

  const gotoDetails = (item) => {
    if (item?.notificationType === "idea") {
      navigate("/ideaDetail", {
        state: { id: item?.path },
      });
    } else {
      navigate("/profileDetail", {
        state: { email: item?.path },
      });
    }
  };

  return (
      <Container
        style={{
          marginTop: 30,
        }}
      >
        {authCtx.type == "admin" && (
          <div>
            <a href="/adminDashboard" className="goback">
              <img src={arrowLeft} height="20" /> Back to Dashboard
            </a>
          </div>
        )}
        <p className="notificationHeading">Notifications</p>
        {notifications?.length > 0 &&
          notifications?.map((item) => {
            return (
              <Container>
                {!item?.isRead && (
                  <Row className="notificationDiv1">
                    <Col
                      xs={3} sm={3} md={2} lg={1} xl={1} xxl={1}
                      onClick={() =>
                        navigate("/myProfile", {
                          state: { email: item?.sender },
                        })
                      }
                    >
                      <div className="notificationprofile-circle">
                        {item?.sender?.charAt(0).toUpperCase()}
                      </div>
                    </Col>
                    <Col
                      xs={9} sm={9} md={10} lg={11} xl={11} xxl={11}
                      className="contentDivNotification"
                      onClick={() => {
                        onReadNotification(item?._id);
                        gotoDetails(item);
                      }}
                    >
                      <p className="line1">{item?.title}</p>
                      <p className="line2">{item?.description}</p>
                      <p className="line3">
                        {moment(item?.createdOn).calendar()}
                      </p>
                    </Col>
                  </Row>
                )}
                {item?.isRead && (
                  <Row className="notificationDiv2">
                    <Col
                      className="col-sm-1"
                      onClick={() =>
                        navigate("/myProfile", {
                          state: { email: item?.sender },
                        })
                      }
                    >
                      <div className="notificationprofile-circle">
                        {item?.sender?.charAt(0).toUpperCase()}
                      </div>
                    </Col>
                    <Col
                      className="contentDivNotification"
                      onClick={() => {
                        gotoDetails(item);
                      }}
                    >
                      <p className="line1">{item?.title}</p>
                      <p className="line2">{item?.description}</p>
                      <p className="line3">
                        {moment(item?.createdOn).calendar()}
                      </p>
                    </Col>
                  </Row>
                )}
              </Container>
            );
          })}
          {notifications?.length <= 0 && 
          <h3 className="noNotification">No Notification Available!</h3>
          }
      </Container>
  );
};
export default NotificationDetails;
