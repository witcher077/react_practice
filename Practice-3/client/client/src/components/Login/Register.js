import React, { useRef, useContext, useState } from "react";
import { Form, Container, Button, Alert} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from './Register.module.scss';
import { loginService } from "../../services/login-services";
import { API_URL } from "../../config/config";
import { Link } from "react-router-dom";
import LogoBanner from "../UI/LogoBanner/LogoBanner";
import Footer from "../UI/Footer/Footer";
import Modal from 'react-bootstrap/Modal';
import { Checkmark } from 'react-checkmark'

const Register = (props) => {
  const navigate = useNavigate(); 
  const emailRef = useRef();
  const passwordRef = useRef();
  const fnameRef = useRef();
  const lnameRef = useRef();
  const authCtx = useContext(AuthContext);
  const [message, setMessage] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => {
    if(success) {
      setShow(false);
      window.location.reload();
      authCtx.logout();
    } else {
      setShow(false);
    }
   

  };
  const handleShow = () => setShow(false);

  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [fnameError, setfnameError] = useState(false);
  const [lnameError, setlnameError] = useState(false);
  const [success, setSuccess] = useState(false);
  // const [modalOpen, setModalOpen] = useState(true);

  const [generalError, setgeneralError] = useState(false);

  const authcts = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enterdPassword = passwordRef.current.value;
    const enterdFname = fnameRef.current.value;
    const enterdLname = lnameRef.current.value;
    if(!validateFname(enterdFname)&&!validateLname(enterdLname)&&!validateEmail(enteredEmail) && !validatePassword(enterdPassword)) {
  
    fetch(`${API_URL}/user`, {
      method: "POST",
      body: JSON.stringify({
        "firstName": enterdFname,
        "lastName": enterdLname,
        "email": enteredEmail,
        "password": enterdPassword,
        "userType": "user"
    }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json();
        }
      })
      .then((data) => {
        let finalmessage = JSON.stringify(data);
        let parsedMessage = JSON.parse(finalmessage);
        if(parsedMessage?.error) {
          // alert(parsedMessage?.error?.message);\
          setSuccess(false);
          setMessage(parsedMessage?.error?.message);
          setShow(true);
        } else {
          // alert(parsedMessage?.data?.message);
          setSuccess(true);
          setMessage(parsedMessage?.data?.message);
          
          // authcts.login({...data?.data?.result,email:enteredEmail});
          // navigate("/");
          setShow(true);
          // window.location.reload();
          // authCtx.logout();
        }
      })       
      .catch((err) => {
        setgeneralError(true)
        console.log("error");
      });
        
    }
  };

  const validateFname = (enterdFname) => {
    if (!enterdFname) {
      setfnameError(true);
      return true;
    } else {
      setfnameError(false);
      return false;
    }
  };

  const validateLname = (enterdLname) => {
    if (!enterdLname) {
      setlnameError(true);
      return true;
    } else {
      setlnameError(false);
      return false;
    }
  };

  const emailRegex =
  /^$|^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@publicisgroupe.net/;

  function handleChange(event) {
    const email = event.target.value;
    const isValidEmail = emailRegex.test(email);
    // Update state or show validation message based on `isValidEmail`.
    setemailError(!isValidEmail);
  }

  // Function to handle email validation
const validateEmail = (enteredEmail) => {
  if (!enteredEmail || !(enteredEmail.toLowerCase().includes('@publicisgroupe.net'))) {
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
    // <>
    //  <LogoBanner submit={false} />
    // <Container className={`justify-content-between align-items-center ${classes.loginContainer}`}>
      <Form className="rounded p-4" onSubmit={submitHandler}>
        
        <Form.Group className='mb-3' controlId='basicfname'>
            <Form.Label className={`${classes.formLabel}`}>First Name</Form.Label>
            <Form.Control type="text"  placeholder='John' ref={fnameRef} className={`${classes.formcontrol}`}/>
            {fnameError && <Alert variant="danger">Please Enter First Name</Alert>}
        </Form.Group>
        <Form.Group className='mb-3' controlId='basiclname'>
            <Form.Label className={`${classes.formLabel}`}>Last Name</Form.Label>
            <Form.Control type="text"  placeholder='Doe' ref={lnameRef} className={`${classes.formcontrol}`}/>
            {lnameError && <Alert variant="danger">Please Enter Last Name</Alert>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={`${classes.formLabel}`}>Email Address</Form.Label>
          <Form.Control pattern="[^@\s]+@publicisgroupe.net" onChange={(e)=>handleChange(e)}
            type="email"
            placeholder="exampleid@domain.com"
            ref={emailRef}
            className={`${classes.formcontrol}`}
          />
          {emailError && <Alert variant="danger">Please Enter Publicis Email Address</Alert>}
        </Form.Group>
         <Form.Group className='mb-3' controlId='basicPassword'>
            <Form.Label className={`${classes.formLabel}`}>Password</Form.Label>
            <Form.Control type="password"  placeholder='********' minLength={6} ref={passwordRef} className={`${classes.formcontrol}`}/>
            {passwordError && <Alert variant="danger">Please Enter Valid Password</Alert>}
        </Form.Group>
         
        <div className={`${classes.center}`}>
        <Button variant="warning" type="submit" className={`${classes.customBtn}`}>
          Register
        </Button>
        </div>
        {generalError && <Alert variant="danger">Please Enter Valid Email or Password</Alert>}
          <Modal show={show} onHide={handleClose} className="modal-register">
        {/* <Modal.Header>
          <Modal.Title></Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
        {success && <Checkmark size='xxLarge'/>}
          {success && <h1 className="mt-4 text-center" style={{color: '#73AF55'}}>Congratulations</h1>}
          {!success && <>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2" style={{width: '100px',
    display: 'block',
    margin: '40px auto 0'}}>
  <circle className="path circle" fill="none" stroke="#FF3131" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
  <line className="path line" fill="none" stroke="#FF3131" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
  <line className="path line" fill="none" stroke="#FF3131" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
</svg>
          </>}
          {success && <p className="text-center mb-2" style={{color: '#73AF55',textAlign: 'center',
    margin: '20px 0 60px',fontSize: '1.25em'}}>{message}</p>}
          {!success && <p className="text-center mb-2" style={{color: '#FF3131',textAlign: 'center',
    margin: '20px 0 60px',fontSize: '1.25em'}}>{message}</p>}
          
          </Modal.Body>
        <Modal.Footer style={{justifyContent: 'center', borderTop: 'none'}} className="mb-4">
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose} style={{ maxWidth: '300px',
        width: '100%',
        borderRadius: '30px'}}>
           OK
          </Button>
        </Modal.Footer>
      </Modal>
      </Form>



        //   <div className={`${classes.center} ${classes.light}`}>
        //     OR
        //   </div>
        //   <div className={`${classes.center} p-4`}>
        //   <Button variant="warning">
        //   <Link
        //     to="/"
        //     role="button"
        //     className={`${classes.register}`}
        //   >
        //     Login
        //   </Link>
        //   </Button>
        // </div>
    // </Container>
    // <Footer/>
    // </>
  );
};

export default Register;
