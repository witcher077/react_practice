import React, { useState, useEffect, useContext } from "react";
import { Col } from "react-bootstrap";
import profileImg from "../../../assets/userProfile.png";
import hands from "../../../assets/hands.png";
import comments from "../../../assets/comments.png";
import thumbsUp from "../../../assets/thumbsUp.png";
import isLiked from "../../../assets/InnovativeIdeas-Icons/PNG/isLiked.png";
import isInterested from "../../../assets/InnovativeIdeas-Icons/PNG/isInterested.png";
import nominate from "../../../assets/nominate.png";
import eye from "../../../assets/eye.png";
import moment from "moment";
import AuthContext from "../../../store/auth-context";

import "./UserIdeaSidebar.scss";
import Attachment from "../../FormElements/Attachment";
import { useNavigate } from "react-router";

const UserIdeaSidebar = (props) => {
  const [actions, setActions] = useState([])
  const navigate = useNavigate();
  const [showProfileDetails,setShowProfileDetails] = useState(window.orientation !== null && window.orientation !== undefined ? window.orientation : 2 );
  console.log("window.orientation",showProfileDetails)
  // let isDesktop = window.orientation > 1;
  // isDesktop ? setShowProfileDetails(false) : setShowProfileDetails(true);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    setActions([
      { image: thumbsUp, count: props?.data?.likes?.length, label: "Likes" },
      { image: hands, count: props?.data?.intrested?.length, label: "Interested" },
      { image: nominate, count: props?.data?.nominated?.length, label: "Nominated" },
      { image: comments, count: props?.data?.comments?.length, label: "Comments" },
    ])
  }, []);

  const attachmentInfo = {
    name: "Attachment",
    errorMessage: "",
    label: "",
    supportedFiles: ".pdf,.docx,.ppt,.xlsx",
    multiple: true,
    isSidebar: true,
    limit: 4,
    maxSize: '2MB'
  };

  const ActionView = (props1) => {
    return (
      <div>
        <img src={props1?.image} alt="" className="like-icon" />
        <p className="count-text mrt-5">{props1?.count} {props1?.label}</p>
      </div>
    );
  };

  return (
    <div className="SidebarStyle">
      <div className="text-end mr-16">
        <img src={eye} alt="" className="eye-icon" />
        &nbsp;&nbsp;
        <span className="seen-count">{props?.data?.viewCount}</span>
      </div>
      <div className="text-center">
        <div className="profile-circle"
         onClick={() =>
          navigate("/myProfile", {
            state: { email: props?.data?.email },
          })
        }
        >{props?.data?.firstName?.charAt(0).toUpperCase()}</div>
        <p className="submitter-name">
          {props?.data?.firstName} {props?.data?.lastName}
        </p>
        {showProfileDetails < 1 &&
        <p className="knowMore" onClick={() => setShowProfileDetails(2)}>Show More...</p>
        }
        {showProfileDetails > 1 && <>
        <p className="date">
          Date: {moment(props?.data?.createdOn).format("l")}
        </p>
        <p className="status">{props?.data?.statevalue}</p>
        {/* {actions.map((item) => {
          return(<ActionView image={item.image} count={item.count} label={item.label}/>)
        })} */}
       
        <div onClick={() => {if(props?.data?.status !== 'reject'){ props.modalOpen('like')}  }}>
          {!props?.data?.isLiked && <img src={thumbsUp} alt="" className="like-icon" /> }
          {props?.data?.isLiked && <img src={isLiked} alt="" className="like-icon" />}
          <p className="count-text mrt-5" >{props?.data?.likeCount} Likes</p>
        </div>
        <div onClick={() => { if(props?.data?.status !== 'reject'){props.modalOpen('interest') }}} >
          {!props?.data?.isIntrested && <img src={hands} alt="" className="interest-icon" />}
          {props?.data?.isIntrested && <img src={isInterested} alt="" className="interest-icon" />}
          <p className="count-text mrt-5">{props?.data?.intrestCount} Interested</p>
        </div>
        {/* <div>
          <img src={nominate} alt="" className="like-icon" />
          <p className="count-text mrt-5">{props?.data?.nominated?.length} Nominated</p>
        </div> */}
        <div>
          <img src={comments} alt="" className="like-icon" />
          <p className="count-text mrt-5">{props?.data?.comments?.length} Comments</p>
        </div>
        <div>
          <p className="doc1">Supporting documents</p>
          <p className="doc2">No.of files : Upto {attachmentInfo?.limit}</p>
          <p className="doc2">File Size: Upto {attachmentInfo?.maxSize}</p>
          <p className="doc2">.pdf, .docx, .ppt, .xlsx</p>
        </div>
        <div>
          <Attachment
            name="Attachment"
            InputData={attachmentInfo}
            onChange={props?.handleFileChange}
            uploadedFiles={props?.uploadedFiles}
            onDelete={props?.handleFileDelete}
            cancel={props?.cancel} />
        </div>
        {/* {showProfileDetails < 1 &&  */}
        <p className="knowMore mobile" onClick={() => setShowProfileDetails(0)}>Show Less...</p>
        {/* } */}
        </>
        }
      </div>
    </div>
  );
};

export default UserIdeaSidebar;
