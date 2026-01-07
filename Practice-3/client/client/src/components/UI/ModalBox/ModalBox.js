import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Roles from '../../Roles/Roles';
import './ModalBox.scss'
import cancel from "../../../assets/InnovativeIdeas-Icons/SVG/cancel.svg";
import TextInput from "../../FormElements/TextInput";
import {
  AllocatePoints
} from "../../../services/Profile-Service";

function ModalBox(props) {
  const form = useRef(null);
  const [teamData, setTeamData] = useState([]);
  const [errorMsg,setErrorMsg]= useState();
  const formElements = [
    {
      name: "reward_point",
      errorMessage: "Points cannot be blank",
      required: true,
      placeholder: "Please enter points to be credited here"
    },
  ];
  const formInitials = { reward_point: 0 };
  const [formValues, setFormValues] = useState(formInitials);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [allocateConfirmation, setAllocateConfirmation] = useState(false);
  const [teamFormData, setTeamFormData] = useState([]);
  const [uniqueTeam,setUniqueTeam]=useState([]);
  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (props?.team) {
      let teamData1 = [...props?.team];
      let filteredArr = teamData1.reduce((person, current) => {
        const x = person.find(item => item.email === current.email);
        if (!x) {
          return person.concat([current]);
        } else {
          return person;
        }
      }, []);

      console.log(filteredArr)
      setTeamData(filteredArr);
      setUniqueTeam([...filteredArr]);
    }
  }, [])

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
      setTeamFormData([...teamData]);
      setTeamData([]);  
      setAllocateConfirmation(true);
    }
  }
  
  const allocatePoints=()=>{
    let teamArr = []
      teamFormData.map((e) => {
        let teammember =
        {
          email: e.email,
          totalPoints: formValues.reward_point,
        }
        teamArr.push(teammember);
      })
      AllocatePoints(props.authCtx.token, teamArr)
        .then((data) => {
          let formInitials = { reward_point: 0 };
          setFormValues(formInitials);
          setTeamData([...uniqueTeam]);
          props.showmodal();
          props.showSuccessMsg(true);
        })
        .catch((error) => console.log(error));
  }

  const allocateInput=()=>{
    setTeamData([...uniqueTeam]);
    setAllocateConfirmation(false);
    setErrorMsg("")
    let formInitials = { reward_point: 0 };
    setFormValues(formInitials);
  }

  const validateForm = (formData) => {
    const errors = {};
    if (formData.reward_point <= 0) {
      errors.reward_point = "Points are Required";
    }
    return errors;
  };
  const removeUser = (i) => {
    if(teamData.length>1){
      let arr = teamData;
      arr.splice(i, 1);
      setTeamData([...arr]);
      setErrorMsg("")
    } else{
      setErrorMsg("We would need atleast one ideator to proceed with points allocation.If you would like to quit the allocation flow, then please close the pop up.")
    }
  }
  return (
    <Modal show={props?.show} size={props?.size ? props?.size : "lg"}
      aria-labelledby="contained-modal-title-vcenter"
      centered className='modalBackdrop'
      backdrop="static"
      keyboard={false}
    >
      <div className='modalBackground'>
        {
          props?.cancel &&
          (<img src={cancel} alt="delete" className="delete-img" onClick={() => {
            setTeamData([...uniqueTeam]);
            props.showmodal()
          }
          } />)
        }
        {props.isheader &&
          <Modal.Header className='headerContent'>
            <Modal.Title id="contained-modal-title-vcenter" className='modalTitle'>
              {props.isheader}
            </Modal.Title>
          </Modal.Header>
        }
        <Modal.Body className="show-grid modalBody">
          <Container>
            {props.isconfirmation &&
              <Row className='confirmationMsg'>
                <Col xs={12} md={12}>
                  {props.isconfirmation}
                </Col>
              </Row>}
            {props.isalertdescription &&
              <Row className='alertDescription'>
                <Col xs={12} md={12}>
                  {props.isalertdescription}
                </Col>
              </Row>}
            {props.isAddRole &&
              <Row className='roles-body'>
                <Col xs={12} md={12}>
                  <Roles {...props} edit={true} />
                </Col>
              </Row>}
            {teamData?.length > 0 &&
              <>
                <Row>
                  <Col xs={12} md={12}>
                    <div>Each member of the idea, will receive the number of the same amount of points as entered in the box below.</div>
                    <div>For ex - If you input 100 in the box, 100 points will be credited to each idea member.</div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} className="teamCol">
                    {teamData?.map((item, i) => {
                      return (
                        <div className='teamDiv' key={item?.name}>
                          <div
                            className="profileCircle"
                            title={item?.name}
                          >
                            {item?.name?.charAt(0).toUpperCase()}
                            <img src={cancel} alt="delete" className="pointsteamclose" onClick={() => removeUser(i)} />
                          </div>
                          <div className='teammember'>{item?.name}</div>
                        </div>
                      );
                    })}
                  </Col>
                </Row>
                {errorMsg && 
                <Row>
                <Col xs={12} md={12}>
                  <div className='emptyErrorMsg'>{errorMsg}</div>
                </Col>
                </Row>}
                <Row>
                  <Col className="inputLabel justify-content-around allocatepointsCol" xs={12} md={12}>
                    <form ref={form} onSubmit={submitForm} noValidate style={{ "width": "100%" }}>
                      <Row>
                        <Col className="col-sm-8">
                          <TextInput
                            name="reward_point"
                            error={formErrors.reward_point}
                            InputData={formElements[0]}
                            onChange={onChange}
                            type="number"
                          />
                        </Col>
                        <Col className="col-sm-4">
                          {" "}
                          <Button variant="warning" type="submit">Allocate Points</Button>
                        </Col>
                      </Row>
                    </form>
                  </Col>
                </Row>
              </>}
              { allocateConfirmation && 
                <>
                  <Row className='confirmationMsg'>
                    <Col xs={12} md={12}>
                      {formValues.reward_point+" point's will be allocated"}
                    </Col>
                  </Row>
                  <Row className="alertDescription">
                    <Col xs={12} md={12}>
                      <div>Do you confirm?</div>
                    </Col>
                  </Row>
                  <Row className='footerButtons'>
                    <Col xs={12} md={12} className='confirmationButtons'>
                      <Button variant="warning" onClick={() => allocatePoints()}>Yes</Button>
                      <Button variant="warning" onClick={() => allocateInput()}>No</Button>
                    </Col>
                  </Row>
                </>
              }
          </Container>
        </Modal.Body>
        {
          props.isfooter &&
          <Modal.Footer className='footerButtons'>
            {props.isfooter}
          </Modal.Footer>
        }
      </div>
    </Modal>
  );
}

export default ModalBox;