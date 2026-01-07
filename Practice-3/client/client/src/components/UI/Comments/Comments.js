import React, { useContext, useState, useEffect } from "react";
import "./Comments.scss";
import { Col, Container, Row } from "react-bootstrap";
import profileImg from "../../../assets/userProfile.png";
import likeWhite from "../../../assets/InnovativeIdeas-Icons/PNG/thumbsUpWhite.png";
import likeYellow from "../../../assets/InnovativeIdeas-Icons/PNG/thumbsUpYellow.png";
import send from "../../../assets/InnovativeIdeas-Icons/PNG/send.png";
import reply from "../../../assets/InnovativeIdeas-Icons/PNG/reply.png";
import AuthContext from "../../../store/auth-context";
import {
  AddComments,
  LikeComments,
} from "../../../services/IdeaDetails-Service";
import moment from "moment";
import { useNavigate } from "react-router";

const Comments = (props) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const sendComment = (type, input, commentId) => {
    let inputObj = {};
    if (type === "comment") {
      inputObj = { comment: input };
    } else {
      inputObj = {
        comment: input,
        replyTo: commentId,
      };
    }
    AddComments(authCtx.token, props.id, inputObj)
      .then((data) => {
        setActiveCommentReply(-1);
        props.reloadEvent();
      })
      .catch((error) => console.log(error));
  };

  const CommentInput = (props) => {
    const [input, setInput] = useState("");
    return (
      <Row className="commentInputDiv">
        <Col xs={10} sm={10} md={10} lg={11} xl={11} xxl={11}>
          <input
            value={input}
            onInput={(e) => setInput(e.target.value)}
            className="commentInput"
            type="text"
            id="commentInput"
            name="comment"
          />
        </Col>
        <Col
          xs={2}
          sm={2}
          md={2}
          lg={1}
          xl={1}
          xxl={1}
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
          <img
            src={send}
            height="20"
            width="30"
            onClick={() => sendComment(props?.type, input, props?.id)}
            style={{ cursor: "pointer" }}
          />
        </Col>
      </Row>
    );
  };

  const [activeCommentReply, setActiveCommentReply] = useState(-1);

  const onCommentLike = (id, status) => {
    let inputObj = { like: status };

    LikeComments(authCtx.token, id, inputObj)
      .then((data) => {
        console.log(data);
        props.reloadEvent();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <CommentInput type={"comment"} id={""} />
      <div>
        {props?.commentList?.map((item, index) => {
          return (
            <>
              <Row className="commentRow">
                <Col xs={2} sm={2} md={2} lg={1} xl={1} xxl={1}>
                  <div
                    className="profile-icon"
                    onClick={() =>
                      navigate("/myProfile", {
                        state: { email: item?.email },
                      })
                    }
                  >
                    {item?.userName?.charAt(0).toUpperCase()}
                  </div>
                </Col>
                <Col
                  className="commentDiv"
                  xs={8}
                  sm={8}
                  md={8}
                  lg={11}
                  xl={11}
                  xxl={11}
                >
                  <p className="username">{item?.userName}</p>
                  <p className="des">{item?.comment}</p>
                </Col>
                <Col xs={2} sm={2} md={2} lg={1} xl={1} xxl={1}></Col>
                <Col
                  className="commentSubDiv"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={11}
                  xl={11}
                  xxl={11}
                >
                  <img
                        id="reply"
                        src={reply}
                        height="30"
                        width="30"
                        onClick={() => {
                          setActiveCommentReply(index);
                        }}
                      /> 
                  <span style={{fontSize:25,letterSpacing: 10}}>|</span>
                  <span style={{fontSize:16}}>{item?.likes ? item?.likes?.length : "0"}</span>
                  {!item?.isLiked && (
                          <img
                          className="thumbsUp"
                            src={likeWhite}
                            alt=""
                            height="25"
                            width="25"
                            onClick={() => {
                              onCommentLike(item?._id, true);
                            }}
                          />
                        )}
                        {item?.isLiked && (
                          <img
                          className="thumbsUp"
                            src={likeYellow}
                            alt=""
                            height="25"
                            width="25"
                            onClick={() => {
                              onCommentLike(item?._id, false);
                            }}
                          />
                        )}
                        <span>{moment(item?.createdOn).calendar()}</span>
                  {/* <Row>
                    <Col xs={2} sm={2} md={2} lg={1} xl={1} xxl={1}>
                      <img
                        id="reply"
                        src={reply}
                        height="30"
                        width="30"
                        onClick={() => {
                          setActiveCommentReply(index);
                        }}
                      />
                    </Col>
                    <Col
                      xs={1}
                      sm={1}
                      md={1}
                      lg={1}
                      xl={1}
                      xxl={1}
                      style={{ textAlign: "center", paddingTop: 14 }}
                    >
                      |
                    </Col>
                    <Col
                      xs={3}
                      sm={3}
                      md={3}
                      lg={2}
                      xl={2}
                      xxl={2}
                    >
                      <Row>
                      <Col  style={{ textAlign: "right", paddingTop: 15,paddingRight:5 }}>
                        {item?.likes ? item?.likes?.length : "0"}
                        </Col>
                        <Col style={{ textAlign: "left", paddingTop: 10,paddingLeft:0}}>
                        {!item?.isLiked && (
                          <img
                            src={likeWhite}
                            alt=""
                            height="25"
                            width="25"
                            onClick={() => {
                              onCommentLike(item?._id, true);
                            }}
                          />
                        )}
                        {item?.isLiked && (
                          <img
                            src={likeYellow}
                            alt=""
                            height="25"
                            width="25"
                            onClick={() => {
                              onCommentLike(item?._id, false);
                            }}
                          />
                        )}
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={6} sm={6} md={7} lg={8} xl={8} xxl={8} style={{paddingTop: 15 }}>
                      {moment(item?.createdOn).calendar()}
                    </Col>
                  </Row> */}
                </Col>
              </Row>
              {activeCommentReply === index && (
                <div className="replyCommentInput">
                  <CommentInput type={"reply"} id={item?._id} />
                </div>
              )}
              <div className="replyCommentInput">
                {item?.replies?.map((subItem) => {
                  return (
                    <Row className="commentRow">
                      <Col
                        className="commentDiv"
                        xs={8}
                        sm={8}
                        md={8}
                        lg={11}
                        xl={11}
                        xxl={11}
                      >
                        <p className="username1">{subItem?.userName}</p>
                        <p className="des1">{subItem?.comment}</p>
                      </Col>
                      <Col xs={2} sm={2} md={2} lg={1} xl={1} xxl={1}>
                        <div
                          className="profile-icon"
                          onClick={() =>
                            navigate("/myProfile", {
                              state: { email: subItem?.email },
                            })
                          }
                        >
                          {subItem?.userName?.charAt(0).toUpperCase()}
                        </div>
                      </Col>
                    </Row>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
