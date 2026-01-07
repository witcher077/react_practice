import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Layout.module.scss";
import Footer from "./Footer/Footer";
import Login from "../Login/Login";
import Header from "../UI/Header/Header";
import IdeaBanner from "../UI/IdeaBanner/IdeaBanner";
import NotificationDetails from "../pages/NotificationDetails";
import Notification from "./Notification/Notification";
import LogoBanner from "../UI/LogoBanner/LogoBanner";
import LogoBannerInnerPage from "../UI/LogoBannerInnerPage/LogoBannerInnerPage";
const Layout = (props) => {
  const location = useLocation();
  const bannerHiddenList = ['/ideaDashboard', '/ideaDetail'];
  const [isShowBanner, setIsShowBanner] = useState(true);
  useEffect(() => {
    if (bannerHiddenList.includes(location.pathname)) {
      setIsShowBanner(false);
    } else {
      setIsShowBanner(true);
    }
  }, [location])

  return (
      <>
      <Header />
      {location.pathname === '/submitIdea' && <LogoBanner submit={true}/>}
      {location.pathname !== '/submitIdea' && <LogoBannerInnerPage submit={true} />}
      {/* <div 
      style={{minHeight:'600px'}}
      > */}
        {location.pathname !== '/notification' && <Notification />}
        {props.children}
      {/* </div> */}
      <Footer />
      </>
  );
};

export default Layout;
