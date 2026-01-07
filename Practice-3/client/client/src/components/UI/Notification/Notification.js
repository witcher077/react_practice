import React, { useState, useEffect,useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircle } from "@fortawesome/free-regular-svg-icons";
import classes from "./Notification.module.scss";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router";
import NotificationDetails from "../../pages/NotificationDetails";
import { GetNotifications } from "../../../services/Notification-services";
import AuthContext from "../../../store/auth-context";

const Notification = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    GetNotifications(authCtx.token).then((data) =>
      data?.data?.map((item) => {
        if (item.isRead === false) {
          setNotify(true);
        }
      })
    );
  }, []);

  const handleClick = () => {
    navigate("/notification");
    setToggle(true);
  };

  return (
    <>
      <div className={classes.alignRignt}>
        {!toggle && (
          <button
            type="button"
            className={`btn  ${classes.NotifyStyle}`}
            onClick={handleClick}
          >
            Notification
            <span className={`badge badge-light bell ${classes.bellDot}`}>
              <FontAwesomeIcon
                icon={faBell}
                className={classes.bell}
                data-fa-transform="rotate-100"
              />
              {notify && <span className={classes.dots}></span>}
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default Notification;
