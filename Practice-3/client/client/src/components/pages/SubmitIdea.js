import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TextInput from "../FormElements/TextInput";
import SearchDropDown from "../FormElements/SearchDropdown";
import CreatableSelectDropdown from "../FormElements/CreatableSelectDropdown";
import TextArea from "../FormElements/Textarea";
import AuthContext from "../../store/auth-context";
import Attachment from "../FormElements/Attachment";
import BulbGif from "../../assets/H90l.gif";
import {
  CreateIdea,
  GetCategories,
  GetSkills,
  GetTags,
  UploadAttachments,
} from "../../services/Idea-Services";
import { validateEmail } from "../../helper/utility";
import IdeaBanner from "../UI/IdeaBanner/IdeaBanner";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { TypeAnimation } from "react-type-animation";

function SubmitIdea() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [availablecategories, setAvailableCategories] = useState([]);
  const [availableSkills, setAvailableSkills] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [isloader, setLoader] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      margin: "10rem",
    },
    root1: {
      display: "none",
    },
  }));

  const classes = useStyles();

  const formElements = [
    {
      name: "firstName",
      errorMessage: "First Name should be required and cannot be blank",
      label: "First Name*",
      required: true,
    },
    {
      name: "lastName",
      errorMessage: "Last Name should be required and cannot be blank",
      label: "Last Name*",
      required: true,
    },
    {
      name: "email",
      errorMessage: "Email should be required and cannot be blank",
      label: "Email*",
      required: true,
    },
    {
      name: "category",
      errorMessage: "Choose minimum one category",
      label: "Where does your idea fit in? *",
      multi: false,
      required: true,
    },
    {
      name: "title",
      errorMessage: "Title is required",
      label: "Let's give a name to your idea *",
      required: true,
    },
    {
      name: "description",
      errorMessage:
        "Problem Statement is required, please provide in few words",
      label: "Tell us more about it*",
      required: true,
      maxLength: 1000,
    },
    {
      name: "possibleSolution",
      errorMessage:
        "Possible solution is required, please provide in few words",
      label: "Any thoughts around ways to achieve it? *",
      required: true,
      maxLength: 1000,
    },
    {
      name: "benefits",
      errorMessage: "Please provide benefits in few words",
      label: "What outcomes do you envision out of this? *",
      required: true,
      maxLength: 1000,
    },
    {
      name: "efforts",
      errorMessage: "Please provide efforts in few words",
      label: "Got a ball park on how long it will take to implement your idea?",
      required: true,
    },
    {
      name: "skillsRequired",
      errorMessage: "Please choose the skills that required",
      label: "List out the roles needed to accomplish this",
      multi: true,
      required: true,
    },
    {
      name: "tags",
      errorMessage: "Please choose the tag",
      label: "Let's add keywords to rightly categorize your idea",
      multi: true,
      required: false,
    },
    {
      name: "Attachment",
      errorMessage: "",
      label: "Attach Supporting Documents",
      supportedFiles: ".pdf,.docx,.ppt,.xlsx",
      multiple: true,
      limit: 4,
      maxSize: "2MB",
    },
  ];
  const formInitials = {
    firstName: localStorage.getItem("fname"),
    lastName: localStorage.getItem("lname"),
    email: localStorage.getItem("email"),
    category: "",
    title: "",
    description: "",
    possibleSolution: "",
    benefits: "",
    efforts: "",
    skillsRequired: [],
    tags: [],
    attachment: [],
  };
  const [formValues, setFormValues] = useState(formInitials);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSelect = (e) => {
    let selectedValue = "";
    if (Array.isArray(e.value)) {
      selectedValue = e.value.map((selectVal) => selectVal.value);
    } else if (typeof e.value === "object") {
      selectedValue = e.value.value;
    }
    setFormValues({ ...formValues, [e.name]: selectedValue });
  };

  const onFileChange = (e) => {
    const files = e.target.files;
    const attachment = [...formValues.attachment];
    for (var i = 0, l = 4; i < l; i++) {
      const sizeInMB = (files[i]?.size / (1024 * 1024)).toFixed(2);
      if (sizeInMB <= 2) {
        attachment.push({ name: files[i].name, file: files[i] });
      }
    }
    setFormValues({ ...formValues, attachment });
  };

  const onFileDelete = (i) => {
    const attachment = [...formValues.attachment];
    attachment.splice(i, 1);
    setFormValues({ ...formValues, attachment });
  };

  useEffect(() => {
    getCategoryList();
    getSkillsList();
    getTagsList();
  }, []);

  const getCategoryList = async () => {
    await GetCategories(authCtx.token)
      .then((response) => {
        if (response.records.length) {
          const categories = response.records.map((category, i) => {
            return { label: category.name, value: category._id };
          });
          setAvailableCategories(categories);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getSkillsList = async () => {
    await GetSkills(authCtx.token)
      .then((response) => {
        if (response.records.length) {
          const skills = response.records.map((skill, i) => {
            return { label: skill.name, value: skill.name };
          });
          setAvailableSkills(skills);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getTagsList = async () => {
    await GetTags(authCtx.token)
      .then((response) => {
        if (response.records.length) {
          const tags = response.records.map((tag, i) => {
            return { label: tag.name, value: tag.name };
          });
          setAvailableTags(tags);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    if (isSubmit) {
      setFormErrors(validateForm(formValues));
    }
  }, [formValues, isSubmit]);

  const submitForm = (e) => {
    e.preventDefault();
    setLoader(true);
    setIsSubmit(true);
    const isvalid =
      Object.keys(validateForm(formValues)).length === 0 ? true : false;
    if (isvalid) {
      if (formValues.attachment.length) {
        let formData = new FormData();
        formValues.attachment.forEach((item) => {
          formData.append("files", item.file, item.name);
        });
        saveAttachments(formData);
        setLoader(false);
      } else {
        submitYourIdea(formValues);
        setLoader(false);
      }
    }
  };

  const saveAttachments = async (files) => {
    await UploadAttachments(authCtx.token, files).then((res) => {
      const formValue = { ...formValues, attachment: res.data };
      setFormValues(formValue);
      submitYourIdea(formValue);
    });
  };

  const submitYourIdea = async (payload) => {
    await CreateIdea(authCtx.token, payload).then((res) => {
      if (res) {
        navigate("/ideaPage");
      }
    });
  };

  const validateForm = (formData) => {
    const errors = {};
    if (formData.firstName.trim() === "") {
      errors.firstName = "First Name is Required";
    }
    if (formData.lastName.trim() === "") {
      errors.lastName = "Last Name is Required";
    }
    if (formData.email === "") {
      errors.email = "Email is Required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Enter valid Email";
    }
    if (formData.category.trim() === "") {
      errors.category = "Choose at least one category";
    }
    if (formData.title.trim() === "") {
      errors.title = "Title is required";
    }
    if (formData.description.trim() === "") {
      errors.description = "Problem Statement is required";
    }
    if (formData.possibleSolution.trim() === "") {
      errors.possibleSolution = "Possible solution is required";
    }
    if (formData.benefits.trim() === "") {
      errors.benefits = "Benefits is required";
    }
    // if (formData.efforts.trim() === "") {
    //   errors.efforts = "Effort is required";
    // }
    // if (formData.skillsRequired?.length === 0) {
    //   errors.skillsRequired = "Skill is required";
    // }
    // if (formData.tags?.length === 0) {
    //     errors.tags = "Tags is required";
    // }
    return errors;
  };

  const [counter, setCounter] = useState(0);

  return (
    <Container>
      {!isloader && (
        <form onSubmit={submitForm} noValidate className="submit-idea">
          <div className="py-4">
            <Row className="py-2">
              <Col className="live-typing">
                <Row>
                <Col xs={3} sm={3} md={1} lg={1} xl={1} xxl={1}>
                <img src={BulbGif} style={{height:80,width:"auto",marginTop: "-12px",marginLeft: "-20px"}}/>
                </Col>
                <Col xs={9} sm={9} md={10} lg={10} xl={10} xxl={10}>
                <TypeAnimation
                  sequence={[
                    "Submit your ideas on how Gen AI can be leveraged to enhance different aspects of project delivery and help you accomplish tasks with speed and precision!"
                  ]}
                  wrapper="h2"
                  speed={50}
                  cursor={false}
                  repeat={5}
                  style={{color:"#fff",lineHeight:"30px"}}
                />
                </Col>
                </Row>
                {/* <TypeAnimation
                  sequence={[
                    5000,
                    "Share your ideas on how Gen AI can assists your daily tasks in your role to help accomplish better efficiency and faster turn around"
                  ]}
                  wrapper="span"
                  speed={50}
                  cursor={false}
                  repeat={5}
                  style={{color:"#000"}}
                /> */}
              </Col>
            </Row>
            <Row className="py-2" style={{display:"none"}}>
              <Col>
                <TextInput
                  name="firstName"
                  error={formErrors.firstName}
                  InputData={formElements[0]}
                  // onChange={onChange}
                  value={localStorage.getItem("fname")}
                  disabled={true}
                />
              </Col>
              <Col>
                <TextInput
                  name="lastName"
                  error={formErrors.lastName}
                  InputData={formElements[1]}
                  // onChange={onChange}
                  value={localStorage.getItem("lname")}
                  disabled={true}
                />
              </Col>
            </Row>
            <Row className="py-2">
              <Col style={{display:"none"}}>
                <TextInput
                  name="email"
                  error={formErrors.email}
                  InputData={formElements[2]}
                  // onChange={onChange}
                  value={localStorage.getItem("email")}
                  disabled={true}                 
                />
              </Col>
            </Row>
            <Row className="py-2">
              <Col>
                <TextInput
                  name="title"
                  error={formErrors.title}
                  InputData={formElements[4]}
                  onChange={onChange}
                />
              </Col>
            </Row>
            <Row className="py-2">
              <Col>
                <TextArea
                  name="description"
                  error={formErrors.description}
                  InputData={formElements[5]}
                  onChange={onChange}
                  value={formValues.description}
                />
              </Col>
            </Row>
            <Row className="py-2">
              <Col>
                <TextArea
                  name="possibleSolution"
                  error={formErrors.possibleSolution}
                  InputData={formElements[6]}
                  onChange={onChange}
                  value={formValues.possibleSolution}
                />
              </Col>
            </Row>
            <Row className="py-2">
              <Col>
                <TextArea
                  name="benefits"
                  error={formErrors.benefits}
                  InputData={formElements[7]}
                  onChange={onChange}
                  value={formValues.benefits}
                />
              </Col>
            </Row>
            <Row className="py-2">
            <Col>
                <SearchDropDown
                  name="category"
                  error={formErrors.category}
                  InputData={formElements[3]}
                  DataList={availablecategories}
                  onChange={onSelect}
                />
              </Col>
              <Col>
                <CreatableSelectDropdown
                  name="tags"
                  error={formErrors.tags}
                  InputData={formElements[10]}
                  dataList={availableTags}
                  onChange={onSelect}
                />
              </Col>
            </Row>
            <Row className="py-2">
            <Col>
                <TextInput
                  name="efforts"
                  error={formErrors.efforts}
                  InputData={formElements[8]}
                  onChange={onChange}
                />
              </Col>
              <Col>
                <CreatableSelectDropdown
                  name="skillsRequired"
                  error={formErrors.skillsRequired}
                  InputData={formElements[9]}
                  dataList={availableSkills}
                  onChange={onSelect}
                />
              </Col>
            </Row>
            <Row className="py-2">
              <Col>
                <Attachment
                  name="Attachment"
                  InputData={formElements[11]}
                  onChange={onFileChange}
                  uploadedFiles={formValues.attachment}
                  onDelete={onFileDelete}
                  cancel={true}
                />
              </Col>
            </Row>
            <Row className="py-2">
              <Col>
                <button type="submit" className="btn btn-warning">
                  Submit
                </button>
                &nbsp;&nbsp;
                <button
                  type="reset"
                  className="btn btn-warning"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
                &nbsp;&nbsp;
              </Col>
            </Row>
          </div>
        </form>
      )}
      {isloader && (
        <div className={isloader ? classes.root : classes.root1}>
          <CircularProgress />
        </div>
      )}
    </Container>
  );
}

export default SubmitIdea;
