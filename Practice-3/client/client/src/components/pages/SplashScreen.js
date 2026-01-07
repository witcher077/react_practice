import React, { useEffect, useState,useRef } from "react";
import Footer from "../UI/Footer/Footer";
import ThoughtFoundrylogo from "../../assets/ThoughtFoundrylogo.png";
import bulbs from "../../assets/bulbs.png";
import { Container, Row, Col } from "react-bootstrap";
import "./SplashScreen.scss";
import ReactPlayer from 'react-player/lazy'

const ErrorPage = () => {
  const [userInteracted, setUserInteracted] = useState(false);
  let videoRef = useRef();

  useEffect(() => {
    if (!userInteracted) {
      setUserInteracted(true); // Set userInteracted to true to allow autoplay
    }
    // videoRef.current.props.muted = false;
  }, [videoRef]);

  const handleInteraction = () => {
    setUserInteracted(true);
  };

  const [videoMute,setVideoMute] = useState(true);

  // setTimeout(() => {
  //   setVideoMute(false)
  // }, 5000);

  return (
    <>
      <div className="splashHeaderBanner">
        <Container>
          <Row className="splashmb3">
            <Col className="splashbannerImg1">
              <img src={ThoughtFoundrylogo} className="splashThoughtFoundrylogo1" alt="Thought Foundry Logo" />
            </Col>
            <Col className="splashbannerImg2">
              <img src={bulbs} className="splashbulbs1" alt="Bulbs" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="video-div" onClick={handleInteraction}>
        <ReactPlayer
          ref={videoRef}
          url='https://thoughtsfoundry.epsilon.com/api/public/TF_Video_4K.mp4'
          controls={true}
          playing={true} // Autoplay is enabled initially only if user hasn't interacted
          muted={true} //muted has to be true to make autoplay work
          className="react-player-style"
        />
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
