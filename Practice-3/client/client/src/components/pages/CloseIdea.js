import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import arrowLeft from "../../assets/arrowLeft.png";
import { CloseTheIdea } from '../../services/Idea-Services';
import { GetIdeaDetails } from '../../services/IdeaDetails-Service';
import AuthContext from '../../store/auth-context';
import RadioInput from '../FormElements/RadioInput';
import SearchDropDown from '../FormElements/SearchDropdown';
import TextArea from '../FormElements/Textarea';
import UserIdeaSidebar from '../UI/UserIdeaSidebar/UserIdeaSidebar';
import './CloseIdea.scss';
import ModalBox from '../UI/ModalBox/ModalBox';
import TextInput from "../FormElements/TextInput";


export default function CloseIdea() {
      const [modalShow, setModalShow] = useState(false);
      const availableStatus = [
            { label: "Submitted", value: "submitted" },
            { label: "Approved", value: "approved" },
            { label: "Open For Nomination", value: "openForNomination" },
            { label: "InProgress", value: "inProgress" },
            { label: "OnHold", value: "onHold" },
            { label: "Complete", value: "complete" },
            { label: "Reject", value: "reject" },
      ];
      const formElements = [
            {
                  name: "status",
                  errorMessage: "Status is required",
                  label: "Status*",
                  required: true,
            },
            {
                  name: "codeUploadToRepo",
                  errorMessage: "Status is required",
                  label: "Code uploaded to repo* :",
                  required: true,
                  type: 'radio',
                  options: [{ value: true, label: "Yes" }, { value: false, label: "No" }]
            },
            {
                  name: "demo",
                  errorMessage: "Demo is required",
                  label: "Demo* :",
                  required: true,
                  type: 'radio',
                  options: [{ value: true, label: "Yes" }, { value: false, label: "No" }]
            },
            {
                  name: "technicalDocumentation",
                  errorMessage: "Demo is required",
                  label: "Technical Documentation* :",
                  required: true,
                  type: 'radio',
                  options: [{ value: true, label: "Yes" }, { value: false, label: "No" }]
            },
            {
                  name: "adminComment",
                  errorMessage: "",
                  label: "Comments*",
                  required: true,
                  maxLength: 1000,
            },
            {
                  name: "codeUrl",
                  errorMessage: "",
                  label: "Code Repo URL*",
                  required: true,
                  maxLength: 1000,
            },
            {
                  name: "documentUrl",
                  errorMessage: "",
                  label: "Technical Document URL*",
                  required: true,
                  maxLength: 1000,
            },
      ]

      const formInitials = {
            status: "complete",
            codeUploadToRepo: null,
            demo: null,
            technicalDocumentation: null,
            adminComment: "",
            codeUrl:"",
            documentUrl:""
      };
      const authCtx = useContext(AuthContext);
      const location = useLocation();
      const navigate = useNavigate();
      const [formValues, setFormValues] = useState(formInitials);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
      const [isDisableSave, setIsDisableSave] = useState(false);

      useEffect(() => {
            if (isSubmit) {
                  setFormErrors(validateForm(formValues));
                  const isValidSave = Object.keys(formValues).some(item => formValues[item] === 'false');
                  setIsDisableSave(isValidSave);
            }
      }, [formValues, isSubmit]);

      const onChange = (e) => {
            console.log(formValues.codeUploadToRepo)
            setFormValues({ ...formValues, [e.target.name]: e.target.value });
      }

      const onCancel = () => {
            navigate('/ideaPage')
      }

      const onSave = (e) => {
            e.preventDefault();
            setIsSubmit(true);
            const isvalid = Object.keys(validateForm(formValues)).length === 0 ? true : false;
            if (isvalid) {
                  setModalShow(true);
            }
      }

      const closeIdeas = async () => {
            await CloseTheIdea(authCtx.token, location.state.id, formValues).then(res => {
                  console.log('res', res);
                  navigate('/ideaPage')
            }).catch(err => {
                  console.log('err', err);
            })
      }

      const validateForm = (formData) => {
            const errors = {};
            if (formData.status === "") {
                  errors.status = "Status is Required";
            }
            if (!formData.codeUploadToRepo) {
                  errors.codeUploadToRepo = "Code Upload to Repo is Required";
            }
            if (formData.codeUploadToRepo && !formData.codeUrl ) {
                  errors.codeUrl = "Code Repo URL is Required";
            }
            if (!formData.demo) {
                  errors.demo = "Demo is Required";
            }
            if (!formData.technicalDocumentation) {
                  errors.technicalDocumentation = "Technical Documentation is Required";
            }
            if (formData.technicalDocumentation && !formData.documentUrl ) {
                  errors.documentUrl = "Technical Documentation URL is Required";
            }
            if (formData.adminComment === "") {
                  errors.adminComment = "Comments is Required";
            }
            return errors;
      }

      return (
            <div className="close-idea">
                  <form onSubmit={onSave} noValidate>
                        <Row className="py-2">
                              <Col >
                                    <RadioInput
                                          name="codeUploadtoRepo"
                                          error={formErrors.codeUploadToRepo}
                                          InputData={formElements[1]}
                                          onChange={onChange}
                                    />
                              </Col>
                        </Row>
                        {formValues.codeUploadToRepo === "true" &&<TextInput
                                name="codeUrl"
                                error={formErrors.codeUrl}
                                InputData={formElements[5]}
                                onChange={onChange}
                                type="url"
                        />}
                        <Row className="py-2">
                              <Col >
                                    <RadioInput
                                          name="demo"
                                          error={formErrors.demo}
                                          InputData={formElements[2]}
                                          onChange={onChange}
                                    />
                              </Col>
                        </Row>
                        <Row className="py-2">
                              <Col>
                                    <RadioInput
                                          name="technicalDocumentation"
                                          error={formErrors.technicalDocumentation}
                                          InputData={formElements[3]}
                                          onChange={onChange}
                                    />
                              </Col>
                        </Row>
                        {formValues.technicalDocumentation === "true" &&<TextInput
                                name="documentUrl"
                                error={formErrors.documentUrl}
                                InputData={formElements[6]}
                                onChange={onChange}
                                type="url"
                        />}
                        <Row className="py-2">
                              <Col>
                                    <TextArea
                                          name="adminComment"
                                          error={formErrors.adminComment}
                                          InputData={formElements[4]}
                                          onChange={onChange}
                                          value={formValues.adminComment}
                                          rows={5}
                                    />
                              </Col>
                        </Row>
                        <Row className='py-2 text-center'>
                              <Col>
                                    <button type="submit" className="btn btn-warning" disabled={isDisableSave}>
                                          Save
                                    </button>
                                    &nbsp;&nbsp;
                                    <button type="button" className="btn btn-warning" onClick={onCancel}>
                                          Cancel
                                    </button>
                                    &nbsp;&nbsp;
                              </Col>
                        </Row>
                  </form>
                  {
                        modalShow && (
                              <ModalBox
                                    show={modalShow}
                                    isfooter={
                                          <>
                                                <Button variant="warning" onClick={() => closeIdeas(formValues)}>Yes</Button>
                                                <Button variant="warning" onClick={() => setModalShow(false)}>No</Button>
                                          </>}
                                    isalertdescription="Post this change, we will not be able to make any changes to the idea. Do you wish to proceed?"
                                    isconfirmation="Idea will be marked as complete."
                              />
                        )
                  }
            </div>

      )
}
