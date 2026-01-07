import React, { useState, useEffect, useContext, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AuthContext from "../../store/auth-context";
import arrowLeft from "../../assets/arrowLeft.png";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import "./FAQs.scss";
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
  const [activeCard, setActiveCard] = useState(0);

  const [faqs, setFaqs] = useState([
    {
      _id: 1,
      ques: "1. What is Thoughts Foundry?",
      ans: `Thoughts Foundry? It's our innovation launchpad! Here, DIS associates share and submit ideas, opinions, suggestions related to our line of business Imagine it as our brainstorming playground, pumping up enthusiasm to improve DIS engagements and processes for top-notch quality!`,
    },
    {
      _id: 2,
      ques: "2.	What kind of ideas can I share?",
      ans: `Got something brewing in your brain? Whether it's an idea, a suggestion, a tech solution, or a proposal to shake things up, we've got categories for everyone! Dive into CMS, Data, QA, UI, Designs, Requirement Gathering, Architecture, Project Management, or any other area that floats your boat. Let's turn those sparks into something spectacular!`,
    },
    {
      _id: 3,
      ques: "3.	How do I share my ideas?",
      ans: `Ready to rock the idea world? First, hop onto the portal and either log in or register. Then, hit up that shiny 'submit your idea' button on the home page. Fill in all the details about your brainwave and attach any supporting docs if you've got 'em. Click 'submit', and boom! Your idea's officially in the mix!`,
    },
    {
      _id: 4,
      ques: "4.	How are ideas Approved?",
      ans: `You toss out your idea, it starts gaining traction with likes and votes on the portal. Then, our squad at Thoughts Foundry gives it a look-see. If they're onboard, you get to pitch your idea to the big shots at the business and maybe even snag some sponsorship. Keep tabs under the 'Open for nominations' tab to see if your ideas in the spotlight.`,
    },
    {
      _id: 5,
      ques: "5.	How do I know if my idea is approved?",
      ans: `Once your idea takes flight into the Thoughts Foundry universe, our squad of idea wizards will work their magic. If your idea earns its wings, we'll shoot you a celebratory email! And don't worry, you can track its progress in our portal under the 'Open for Nominations' tab.`,
    },
    {
      _id: 6,
      ques: "6.	I would like to be part of implementation of an idea. What should I do?",
      ans: `Ready to dive into the idea action? Hop onto the website like a pro and head to the Ideas page. Click on the 'Open for nominations' tab and scout out the idea you're itching to join. Hit that 'Nominate' button, and bam! You're whisked away to the Idea details page. Find your role, tap 'nominate' again, and voilà! You're officially in the mix for some idea greatness!`,
    },
    {
      _id: 7,
      ques: "7.	Being part of an implementation would be a billable role or over-and-beyond my allocated projects?",
      ans: `If your idea is both a Top Priority and Sponsored, then get ready to shine bright! Being part of the team tackling these ideas means you'll be on internal project payroll, billing for your contributions while making innovation waves. However, if it's a Top Priority but lacks sponsorship, fear not! Your gem of an idea is still prioritized, so dive in and contribute your brilliance. Just remember, you're doing it for the love of innovation, not the billable hours. Let's make magic happen together!`,
    },
    {
      _id: 8,
      ques: "8.	I have a query on the idea listed. How do I connect to clarify? ",
      ans: `Got a puzzler about an idea? Pop a comment on it! Or hit up the idea creator or the Thoughts Foundry squad for a chat. We're here to make idea magic happen!`,
    },
    {
      _id: 9,
      ques: "9.	I would like to be part of an idea but, there are no open roles. What should I do?",
      ans: `So, who knows? Maybe there's a way to squeeze you into the mix! Shoot us a message at thoughts.foundry@epsilon.com`,
    },
    {
      _id: 10,
      ques: "10.	How does rewards and recognition work?",
      ans: `When you toss your brilliant idea into the ring, you're scoring 5 leaderboard points just for playing! If your brainchild gets approved, you'll snag a cool 50 leaderboard points. And if your idea becomes a reality? Well, buckle up because your points will reflect the epicness of your idea's journey to implementation!`
    },
  ]);

  useEffect(() => {
    // getNotifications();
  }, []);

  const getNotifications = () => {
    GetNotifications(authCtx.token)
      .then((data) => {
        // console.log(data);
        // setFaqs(data.data);
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
      <p className="notificationHeading">FAQ's</p>
      {faqs?.length > 0 &&
        faqs?.map((item) => {
          return (
            <Container>
              <Row className="faqDiv">
                <Col
                  xs={9}
                  sm={9}
                  md={10}
                  lg={11}
                  xl={11}
                  xxl={11}
                  className="contentDivNotification"
                  // onClick={() => {
                  //   onReadNotification(item?._id);
                  // }}
                >
                  <div className="ques">
                    <div>{item?.ques}</div>
                    {activeCard !== item?._id && (
                      <div className="signs"
                        onClick={() => {
                          setActiveCard(item?._id);
                        }}
                      >
                        +
                      </div>
                    )}
                    {activeCard === item?._id && (
                      <div
                      className="signs"
                        onClick={() => {
                          setActiveCard(0);
                        }}
                      >
                        -
                      </div>
                    )}
                  </div>
                  {activeCard === item?._id && (
                    <div className="ans">{item?.ans}</div>
                  )}
                </Col>
              </Row>
            </Container>
          );
        })}
    </Container>
  );
};
export default NotificationDetails;
