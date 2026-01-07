import React, { useRef, useContext, useState } from "react";
import { Form, Container, Button, Alert} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from './ForgotPassword.module.scss';
import { loginService } from "../../services/login-services";
import { API_URL } from "../../config/config";
import { Link } from "react-router-dom";
import LogoBannerInnerPage from "../UI/LogoBannerInnerPage/LogoBannerInnerPage";
import Footer from "../UI/Footer/Footer";

const ForgotPassword = (props) => {
  const navigate = useNavigate(); 
  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [generalError, setgeneralError] = useState(false);

  const authcts = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enterdPassword = passwordRef.current.value;
    if(!validateEmail(enteredEmail) || !validatePassword(enterdPassword)) {
  
    fetch(`${API_URL}/auth/forgotPassword`, {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail, password: enterdPassword}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else console.log("error");
      })
      .then((data) => {
        alert("Password reset successful!")
        authcts.login({...data.data,email:enteredEmail})
        navigate("/")
      })       
      .catch((err) => {
        // setgeneralError(true)
        // alert("Password reset successful!")
        // authcts.login({...data.data,email:enteredEmail})
        navigate("/")
        console.log("error");
      });
        
    }
  };


  // Function to handle email validation
const validateEmail = (enteredEmail) => {
  if (!enteredEmail) {
    setemailError(true);
    return true;
  } else {
    setemailError(false);
    return false;
  }
};

// Function to handle password validation
const validatePassword = (enteredPassword) => {
  if (!enteredPassword) {
    setpasswordError(true);
    return true
  } else {
    setpasswordError(false);
    return false
  }
};

// Call the validation functions where needed

  return (
    <>
    <LogoBannerInnerPage submit={false} />
   <Container className={`justify-content-between align-items-center ${classes.loginContainer}`}>
    <div className={`${classes.loginContainer}`}>
      <Container
        className={`justify-content-between align-items-center ${classes.light}`}
      >
      <Form className="rounded p-4" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={`${classes.formLabel}`}>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="exampleid@domain.com"
            ref={emailRef}
            className={`${classes.formcontrol}`}
          />
          {emailError && <Alert variant="danger">Please Enter Valid Email Address</Alert>}
        </Form.Group>
         <Form.Group className='mb-3' controlId='basicPassword'>
            <Form.Label className={`${classes.formLabel}`}>Enter New Password</Form.Label>
            <Form.Control type="password"  placeholder='********' ref={passwordRef} className={`${classes.formcontrol}`}/>
            {passwordError && <Alert variant="danger">Please Enter Valid Password</Alert>}
        </Form.Group> 
        <div className={`${classes.center}`}>
        <Button type="submit" className={`${classes.customBtn}`}>
          Submit
        </Button>
        </div>
        {generalError && <Alert variant="danger">Please Enter Valid Email or Password</Alert>}
      </Form>
      </Container>
    </div>
    </Container>
     <Footer/>
     </>
  );
};

export default ForgotPassword;
