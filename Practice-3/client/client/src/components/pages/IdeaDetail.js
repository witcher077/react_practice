import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { Col, Container, Row, Alert } from "react-bootstrap";
import UserIdeaSidebar from "../UI/UserIdeaSidebar/UserIdeaSidebar";
import Comments from "../UI/Comments/Comments";
import "./IdeaDetail.scss";
import profileImg from "../../assets/userProfile.png";
import editIcon from "../../assets/InnovativeIdeas-Icons/PNG/edit.png";
import TextInput from "../FormElements/TextInput";
import SearchDropDown from "../FormElements/SearchDropdown";
import TextArea from "../FormElements/Textarea";
import { useLocation } from "react-router-dom";
import {
  GetIdeaDetails,
  EditIdeaDetails,
  ApproveIdeaDetail,
  GetIdeaLikes,
  GetIdeaInterested,
} from "../../services/IdeaDetails-Service";
import {
  crateRole,
  postNominateUser,
  postNotifyUser,
} from "../../services/IdeaDashboard-service";
import AuthContext from "../../store/auth-context";
import arrowLeft from "../../assets/arrowLeft.png";
import { getHistory } from "../../services/History-service";
import History from "../UI/History/History";
import AdminApproveIdea from "./AdminApproveIdea";
import CloseIdea from "./CloseIdea";
import {
  GetCategories,
  GetSkills,
  GetTags,
  UploadAttachments,
} from "../../services/Idea-Services";
import CreatableSelectDropdown from "../FormElements/CreatableSelectDropdown";
import { approveIdeaDetail } from "../../services/ApproveIdea-service";
import { LikeIdea, ShowInterestIdea } from "../../services/IdeaDetails-Service";
import likeWhite from "../../assets/InnovativeIdeas-Icons/PNG/thumbsUpWhite.png";
import likeYellow from "../../assets/InnovativeIdeas-Icons/PNG/thumbsUpYellow.png";
import isInterested from "../../assets/InnovativeIdeas-Icons/PNG/isInterested.png";
import hands from "../../assets/hands.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Roles from "../Roles/Roles";
import RoleCard from "../RoleCard/RoleCard";
import ModalBox from "../UI/ModalBox/ModalBox";
import { FollowUnfollowUser } from "../../services/Profile-Service";
import { API_URL } from "../../config/config";
import { io } from "socket.io-client";

const IdeaDetail = (props) => {
  const [allocateModalShow, setAllocateModalShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [ideaDetails, setIdeaDetails] = useState({});
  const [skillsReq, setSkillsReq] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [edit, setEdit] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [selectedTab, setSelectedTab] = useState(0);

  const [visible, setVisible] = useState(15);
  const [historyData, setHistoryData] = useState([]);

  const [availablecategories, setAvailableCategories] = useState([]);
  const [availableSkills, setAvailableSkills] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    value: "",
    label: "",
  });
  const [availabletypes, setAvailableTypes] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);
  const [availableRoles, setAvailableRoles] = useState([]);

  const [newStatus, setNewStatus] = useState("approve");
  const [newComplexity, setNewComplexity] = useState("simple");
  const [adminComments, setAdminComments] = useState("");
  const [isCloseIdea, setIsCloseIdea] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [rolesList, setRolesList] = useState([{ name: "", skills: [] }]);
  const [rolesFormValues, setRolesFormValues] = useState([
    { name: "", skills: [] },
  ]);
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [count, setCount] = useState([]);
  const [isAdminClickSave, setIsAdminClickSave] = useState(false);
  const [isValidRoles, setIsValidRoles] = useState(false);
  const [isValidToAdd, setIsValidToAdd] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalType, setModalType] = useState("");
  const [initialValues, setInitialValues] = useState({});
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleClose = () => {
    setShow(false);
    setModalContent([]);
  };
  const handleShow = (type) => {
    setShow(true);
    setModalType(type);
    if (type == "like") {
      getLikes();
    } else {
      getInterest();
    }
  };

  const getLikes = async () => {
    await GetIdeaLikes(authCtx.token, location.state.id)
      .then((resp) => {
        if (resp) {
          setModalContent(resp.data);
          setCount(resp.count);
        }
      })
      .catch((error) => console.log(error));
  };

  const getInterest = async () => {
    await GetIdeaInterested(authCtx.token, location.state.id)
      .then((resp) => {
        setModalContent(resp?.data);
        setCount(resp.count);
      })
      .catch((error) => console.log(error));
  };

  const availableStatus = [
    { label: "Open For Nomination", value: "openForNomination" },
    { label: "InProgress", value: "inProgress" },
    { label: "Complete", value: "complete" },
    { label: "Reject", value: "reject" },
  ];

  const formElements = [
    {
      name: "category",
      errorMessage: "Choose minimum one category",
      label: "Where does your idea fit in*",
      multi: false,
      required: true,
    },
    {
      name: "title",
      errorMessage: "Please provide title in few words",
      label: "Let's give a name to your idea*",
      required: true,
    },
    {
      name: "description",
      errorMessage: "Problem Statement is required, please provide in few words",
      label: "Any thoughts around ways to achieve it?*",
      required: true,
      maxLength: 1000,
    },
    {
      name: "possibleSolution",
      errorMessage:
        "Possible solution is required, please provide in few words",
      label: "What outcomes do you envision out of this?*",
      required: true,
      maxLength: 1000,
    },
    {
      name: "benefits",
      errorMessage: "Please provide benefits in few words",
      label: "What outcomes do you envision out of this?*",
      required: true,
      maxLength: 1000,
    },
    {
      name: "efforts",
      errorMessage: "Please provide efforts in few words",
      label: "Got a ball park on how long it will take to implement your idea?(in hrs)",
      required: true,
    },
    {
      name: "skillsRequired",
      errorMessage: "Please choose the skills that required",
      label: "Let's add keywords to rightly categorize your idea      ",
      multi: true,
      required: true,
    },
    {
      name: "status",
      errorMessage: "Status is required",
      label: "Status*",
      required: false,
    },
    {
      name: "tags",
      errorMessage: "Please choose the tags that required",
      label: "Let's add keywords to rightly categorize your idea",
      multi: true,
      required: true,
    }
  ];

  useEffect(() => {
    getCategoryList();
    getSkillsList();
    getTagsList();
    getIdeaDetails();
    connectSocket();
  }, []);

  const connectSocket = () => {
    console.log("connecting to socket");

    const socket = io(`${API_URL}/socket`);

    socket.on(`getData${location.state.id}`, (resp) => {
      console.log("resp", resp);

      if (resp.msg) {
        getIdeaDetails();
      }

      // setIdeaDetails(resp?.records?.data);
      //getIdeaDetails()
      // setAvailableRoles(resp?.roles);

      // setIdeas(resp.records);
    });

    socket.on(`getLikeData${location.state.id}`, (resp) => {
      console.log("resp", resp);

      if (resp.msg) {
        getIdeaDetails();
      }
    });
  };

  useEffect(() => {
    setIsCloseIdea(formValues.status === "complete" ? true : false);
    if (formValues.category) {
      const selectCategory = availablecategories.find(
        (cat) => cat.value === formValues.category
      );
      setSelectedCategory(selectCategory);
    }
  }, [formValues, availablecategories]);

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

  const getIdeaDetails = () => {
    GetIdeaDetails(authCtx.token, location.state.id)
      .then((resp) => {
        setIdeaDetails(resp?.data);
        setAvailableRoles(resp?.roles);
        let rolesValues = [];
        let skills = [];
        let tags = [];
        let products = [];

        // for (let i = 0; i < resp?.roles?.length; i++) {
        //   rolesValues.push({
        //     name: resp?.roles[i]?.name,
        //     skills: resp?.roles[i]?.skills,
        //   });
        // }
        // setRolesFormValues(rolesValues);
        for (let i = 0; i < resp?.data?.skillsRequired?.length; i++) {
          skills.push({
            label: resp?.data?.skillsRequired[i],
            value: resp?.data?.skillsRequired[i],
          });
        }
        setSkillsReq(skills);
        for (let i = 0; i < resp?.data?.tags?.length; i++) {
          tags.push({
            label: resp?.data?.tags[i],
            value: resp?.data?.tags[i],
          });
        }
        setSelectedTags(tags);
        for (let i = 0; i < resp?.data?.ProductAlignment?.length; i++) {
          products.push({
            label: resp?.data?.ProductAlignment[i],
            value: resp?.data?.ProductAlignment[i],
          });
        }
        let formInitials = {
          category: resp?.data?.category,
          title: resp?.data?.title,
          description: resp?.data?.description,
          possibleSolution: resp?.data?.possibleSolution,
          benefits: resp?.data?.benefits,
          efforts: resp?.data?.efforts,
          skillsRequired: resp?.data?.skillsRequired,
          status: resp?.data?.status,
          attachment: resp?.data?.attachment,
          formType:resp?.data?.formType,
          ProductAlignment:resp?.data?.ProductAlignment
        };
        setFormValues(formInitials);
        setInitialValues(formInitials);
      })
      .catch((error) => console.log(error));
  };

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const onSelect = (e) => {
    setFormValues({ ...formValues, [e.name]: e.value?.value });
    validateForm(formValues);
  };
  const onSelectMultiple = (e) => {
    let selectedValues = [];
    e.value.map((item) => {
      selectedValues.push(item.value);
    });
    setFormValues({ ...formValues, [e.name]: selectedValues });
    validateForm(formValues);
  };

  const rolesOnChange = (type, i, e) => {
    const rolesRows = [...rolesList];
    if (type === "name") {
      rolesRows[i][type] = e.target.value;
    } else if (type === "skills") {
      const selectedSkills = e.value.map((selectVal) => selectVal.value);
      rolesRows[i][type] = selectedSkills;
    }
    setRolesList(rolesRows);
  };

  const handleRoleChange = (e, i) => {
    const rolesFormValue = [...rolesFormValues];
    const rolesRows = [...rolesList];
    rolesFormValue[i].name = e.target.value;
    setRolesFormValues(rolesFormValue);
    rolesRows[i].name = e.target.value;
  };
  const handleSkillChange = (e, i) => {
    const rolesFormValue = [...rolesFormValues];
    const selectedSkills = e?.value?.map((selectVal) => selectVal?.value);
    rolesFormValue[i].skills = selectedSkills;
    setRolesFormValues(rolesFormValue);
  };

  const onAddRole = () => {
    const rolesRows = [...rolesList];
    const rolesFormValue = [...rolesFormValues];
    rolesRows.push({ name: "", skills: [] });
    rolesFormValue.push({ name: "", skills: [] });
    setRolesList(rolesRows);
    setRolesFormValues(rolesFormValue);
  };

  const onRemoveRole = (i) => {
    const rolesRows = [...rolesList];
    const rolesFormValue = [...rolesFormValues];
    rolesRows.splice(i, 1);
    rolesFormValue.splice(i, 1);
    setRolesList(rolesRows);
    setRolesFormValues(rolesFormValue);
  };

  useEffect(() => {
    if (isSubmit) {
      setFormErrors(validateForm(formValues));
    }
  }, [formValues, isSubmit]);

  useEffect(() => {
    if (newStatus === "approve") {
      const isvalid = rolesList.every(
        (item) => item.name && item.skills.length > 0
      );
      setIsValidRoles(isvalid);
    } else {
      setIsValidRoles(true);
    }
  }, [rolesList, adminComments, isAdminClickSave, newStatus]);

  const submitForm = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const isvalid =
      Object.keys(validateForm(formValues)).length === 0 ? true : false;
    const files = formValues?.attachment?.filter((file) => file?.name);
    if (isvalid) {
      if (files.length) {
        let formData = new FormData();
        files.forEach((item) => {
          formData.append("files", item.file, item.name);
        });
        saveAttachments(formData);
      } else {
        editIdea(formValues);
      }
    }
  };

  const likeIdea = (status) => {
    let inputObj = { like: status };
    LikeIdea(authCtx.token, location.state.id, inputObj)
      .then((data) => {
        getIdeaDetails();
      })
      .catch((error) => console.log(error));
  };
  const showInterest = (status) => {
    let inputObj = { interested: status };
    ShowInterestIdea(authCtx.token, location.state.id, inputObj)
      .then((data) => {
        getIdeaDetails();
      })
      .catch((error) => console.log(error));
  };

  const validateForm = (formData) => {
    const errors = {};
    if (formData.category.length === 0) {
      errors.category = "Choose at least one category";
    }
    if (formData.title === "") {
      errors.title = "Title is Required";
    }
    if (formData.description === "") {
      errors.description = "Problem Statement is required";
    }
    if (formData.possibleSolution === "") {
      errors.possible_solution = "Possible solution is required";
    }
    if (formData.benefits === "") {
      errors.benefits = "Benefits is required";
    }
    if (formData.efforts === "") {
      errors.effort = "Effort is required";
    }
    if (formData.skillsRequired.length === 0) {
      errors.skillsRequired = "Choose at least one skill";
    }
    // if (formData.tags?.length === 0) {
    //   errors.tags = "Tags is required";
    // }
    if (authCtx.type === "admin" && formData.status === "") {
      errors.status = "Status is required";
    }
    return errors;
  };

  const onSelectTab = (i) => {
    setSelectedTab(i);
    if (i == 1) {
      setPageNo(1);
      getHistoryDetails();
      setVisible(15);
    }
  };

  const saveAttachments = async (files) => {
    await UploadAttachments(authCtx.token, files).then((res) => {
      const formValue = {
        ...formValues,
        attachment: [...ideaDetails?.attachment, ...res.data],
      };
      setFormValues(formValue);
      editIdea(formValue);
    });
  };

  const editIdea = async (inputValue) => {
    const payload = { ...inputValue };
    if (authCtx.type !== "admin") {
      delete payload.status;
    }
    if (Object.keys(formErrors).length === 0) {
      let inputObj = {
        ...payload,
        complexity: newComplexity,
      };
      await EditIdeaDetails(authCtx.token, location.state.id, inputObj)
        .then((data) => {
          if (data) {
            getIdeaDetails();
            getSkillsList();
            getTagsList();
            setEdit(false);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const getHistoryDetails = () => {
    getHistory(authCtx, location.state.id, 1)
      .then((data) => {
        setHistoryData(data.records);
        setTotalRecords(data.totalRecord);
        setPageNo((prevValue) => {
          return prevValue + 1;
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleShowMoreHistory = () => {
    if (visible >= historyData.length) {
      setTimeout(() => {
        getHistory(authCtx, props.ideaId, pageNo)
          .then((data) => {
            setHistoryData(historyData.concat(data.records));
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }, 1000);
      setPageNo((prevValue) => {
        return prevValue + 1;
      });
    }
    setVisible((prevValue) => {
      return prevValue + 5;
    });
  };

  const onAdminAction = () => {
    setIsAdminClickSave(true);
    let inputObj = {
      complexity: newComplexity,
      action: newStatus,
      adminComment: adminComments,
      roles: newStatus === "reject" ? [] : rolesList,
    };
    if (isValidRoles && adminComments) {
      approveIdeaDetail(authCtx.token, location.state.id, inputObj)
        .then((data) => {
          getIdeaDetails();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const notifyUser = (id) => {
    postNotifyUser(authCtx.token, id)
      .then(() => {
        getIdeaDetails();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const nominateUser = (id) => {
    postNominateUser(authCtx.token, id)
      .then(() => {
        getIdeaDetails();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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

  const onCancelEdit = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setEdit(false);
    setFormValues(initialValues);
  };

  const openRoles = () => {
    // if (availableRoles && availableRoles.length) {
    //   let selectedRoles = [];
    //   availableRoles.forEach((item) => {
    //     selectedRoles.push({ name: item.name, skills: item.skills });
    //   })
    //   setRolesList(selectedRoles);
    // }
    setModalShow(true);
  };

  useEffect(() => {
    if (rolesFormValues.length) {
      const isvalid = rolesFormValues?.every(
        (item) => item.name && item.skills.length > 0
      );
      setIsValidToAdd(isvalid);
    }
  }, [rolesFormValues]);

  const updateRoles = async () => {
    if (isValidToAdd) {
      await crateRole(authCtx.token, rolesFormValues, ideaDetails._id)
        .then((res) => {
          getIdeaDetails();
          setModalShow(false);
          setRolesFormValues([{ name: "", skills: [] }]);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  const cancelUpdateRoles = () => {
    setModalShow(false);
    setRolesFormValues([{ name: "", skills: [] }]);
  };

  const followOrUnfollow = async (item) => {
    let inputObj = {
      email: item?.email,
      follow: !item?.following,
    };
    await FollowUnfollowUser(authCtx.token, inputObj)
      .then((data) => {
        if (data) {
          if (modalType === "like") {
            getLikes();
          } else {
            getInterest();
          }
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container style={{ marginTop: 30 }}>
      {authCtx.type == "admin" && (
        <div>
          <a href="/adminDashboard" className="goback">
            <img src={arrowLeft} height="20" /> Back to Dashboard
          </a>
        </div>
      )}
      {allocateModalShow && (
        <ModalBox
          cancel="true"
          show={allocateModalShow}
          showmodal={() => setAllocateModalShow(false)}
          isheader="Points Allocation"
          team={ideaDetails?.team}
          authCtx={authCtx}
          showSuccessMsg={setShowSuccessMsg}
        />
      )}
      {modalShow && (
        <ModalBox
          show={modalShow}
          isfooter={
            <>
              <Button
                variant="warning"
                disabled={isValidToAdd ? false : true}
                onClick={updateRoles}
              >
                Save
              </Button>
              <Button variant="warning" onClick={cancelUpdateRoles}>
                Cancel
              </Button>
            </>
          }
          isconfirmation="Add Role"
          size="xl"
          isAddRole={true}
          cancel={true}
          showmodal={() => {
            setModalShow(false);
          }}
          rolesList={rolesFormValues}
          onRoleChange={handleRoleChange}
          onSkillChange={handleSkillChange}
          add={onAddRole}
          remove={onRemoveRole}
          availableSkills={availableSkills}
          availableRoles={availableRoles}
          skillsValue={skillsReq}
        />
      )}
      <Modal
        show={show}
        onHide={handleClose}
        style={{ position: "fixed", top: "30%" }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-heading">
            <img
              src={modalType === "like" ? likeYellow : isInterested}
              height="30"
              style={{ marginTop: -12, marginRight: 10 }}
            />
            <span>{count}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="likeNominateModal">
          {modalContent.length === 0 ? (
            <p className="text-center">
              Easy Tiger, idea is in the process getting recognized!
            </p>
          ) : (
            modalContent.map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: 60,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      className="modal-profile"
                      onClick={() =>
                        navigate("/myProfile", {
                          state: { email: item?.email },
                        })
                      }
                    >
                      {item?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="modal_name">{item?.name}</div>
                  </div>
                  {authCtx.email !== item?.email && (
                    <div>
                      <div
                        className="followBtn"
                        id={item?.following ? "following" : "follow"}
                        onClick={() => {
                          followOrUnfollow(item);
                        }}
                      >
                        {item?.following ? "Following" : "Follow"}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </Modal.Body>
      </Modal>
      <Row style={{ marginTop: 40 }}>
        <Col
          xs={12}
          sm={12}
          md={4}
          lg={3}
          xl={3}
          xxl={3}
          style={{ marginBottom: 20 }}
        >
          <UserIdeaSidebar
            cancel={edit}
            data={ideaDetails}
            reloadEvent={getIdeaDetails}
            uploadedFiles={formValues?.attachment}
            handleFileChange={onFileChange}
            handleFileDelete={onFileDelete}
            modalOpen={handleShow}
            modalClose={handleClose}
          ></UserIdeaSidebar>
        </Col>
        <Col xs={12} sm={12} md={8} lg={9} xl={9} xxl={9}>
          {authCtx.type === "admin" && (
            <Row className="tabContainer">
              <Col
                className="tabText"
                style={{
                  backgroundColor: selectedTab === 0 ? "#46B7E9" : "white",
                  color: selectedTab === 0 ? "#ffffff" : "#000000",
                }}
                onClick={() => onSelectTab(0)}
              >
                Idea Details
              </Col>
              <Col
                className="tabText"
                style={{
                  backgroundColor: selectedTab === 1 ? "#46B7E9" : "white",
                  color: selectedTab === 1 ? "#ffffff" : "#000000",
                }}
                onClick={() => onSelectTab(1)}
              >
                History
              </Col>
            </Row>
          )}
          {selectedTab === 0 && (
            <>
              {!edit && (
                <div>
                  <div className="ideaDetail">
                    <p className="name">{ideaDetails?.title}</p>
                    {((authCtx.type === "admin" &&
                      ideaDetails?.status !== "complete" &&
                      ideaDetails?.status !== "reject") ||
                      (authCtx.type === "user" &&
                        ideaDetails?.status === "submitted" &&
                        authCtx.email === ideaDetails?.email)) && (
                      <div
                        className="text-end"
                        onClick={() => {
                          setEdit(true);
                          setNewStatus(ideaDetails?.action);
                          setNewComplexity(ideaDetails?.complexity);
                        }}
                      >
                        <img src={editIcon} alt="" className="editIcon" />
                      </div>
                    )}
                    <Row className="ans">
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <b>Where does your idea fit in:</b>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        {selectedCategory?.label}
                      </Col>
                    </Row>
                    <Row className="ans">
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="text-justify">
                        <b>Tell us more about it:</b>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        {ideaDetails?.description}
                      </Col>
                    </Row>
                    <Row className="ans">
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <b>Any thoughts around ways to achieve it:</b>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        {ideaDetails?.possibleSolution}
                      </Col>
                    </Row>
                    <Row className="ans">
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <b>What outcomes do you envision out of this:</b>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="text-justify">
                        {ideaDetails?.benefits}
                      </Col>
                    </Row>
                    <Row className="ans">
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <b>Got a ball park on how long it will take to implement your idea (in hrs):</b>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        {ideaDetails?.efforts}
                      </Col>
                    </Row>
                    <Row className="ans">
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <b>List out the roles needed to accomplish this:</b>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        {ideaDetails?.skillsRequired?.join(", ")}
                      </Col>
                    </Row>
                    <Row className="ans">
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <b>Let's add keywords to rightly categorize your idea:</b>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        {ideaDetails?.tags?.join(", ")}
                      </Col>
                    </Row>
                    {authCtx.type === "admin" &&
                      ideaDetails?.status !== "submitted" && (
                        <Row className="ans">
                          <Col xs={12} sm={6} md={6} lg={2} xl={2} xxl={2}>
                            <b>Complexity:</b>
                          </Col>
                          <Col xs={12} sm={6} md={6} lg={10} xl={10} xxl={10}>
                            {ideaDetails?.complexity}
                          </Col>
                        </Row>
                      )}
                    {((authCtx.type === "admin" &&
                      ideaDetails?.status !== "submitted") ||
                      ideaDetails?.status === "complete") && (
                      <Row className="ans">
                        <Col xs={12} sm={6} md={6} lg={2} xl={2} xxl={2}>
                          <b>Admin Comments:</b>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={10} xl={10} xxl={10}>
                          {ideaDetails?.adminComment}
                        </Col>
                      </Row>
                    )}
                    {ideaDetails?.status === "complete" && (
                      <>
                        <Row className="ans">
                          <Col xs={12} sm={6} md={6} lg={2} xl={2} xxl={2}>
                            <b>Repo URL:</b>
                          </Col>
                          {ideaDetails?.codeUrl && (
                            <Col xs={12} sm={6} md={6} lg={10} xl={10} xxl={10}>
                              {ideaDetails?.codeUrl}
                            </Col>
                          )}
                          {!ideaDetails?.codeUrl && (
                            <Col
                              xs={12}
                              sm={6}
                              md={6}
                              lg={10}
                              xl={10}
                              xxl={10}
                              style={{ color: "red" }}
                            >
                              Not Available
                            </Col>
                          )}
                        </Row>
                        <Row className="ans">
                          <Col xs={12} sm={6} md={6} lg={2} xl={2} xxl={2}>
                            <b>Technical Document URL:</b>
                          </Col>
                          {ideaDetails?.documentUrl && (
                            <Col xs={12} sm={6} md={6} lg={10} xl={10} xxl={10}>
                              {ideaDetails?.documentUrl}
                            </Col>
                          )}
                          {!ideaDetails?.documentUrl && (
                            <Col
                              xs={12}
                              sm={6}
                              md={6}
                              lg={10}
                              xl={10}
                              xxl={10}
                              style={{ color: "red" }}
                            >
                              Not Available
                            </Col>
                          )}
                        </Row>
                      </>
                    )}
                    <Row className="ans">
                      {authCtx.type === "admin" &&
                      ideaDetails?.status === "submitted" ? (
                        <>
                          <Col
                            xs={12}
                            sm={6}
                            md={6}
                            lg={2}
                            xl={2}
                            xxl={2}
                            style={{ marginTop: 20 }}
                          >
                            <b>Team:</b>
                          </Col>
                          <Col xs={12} sm={6} md={6} lg={10} xl={10} xxl={10}>
                            <Row>
                              {ideaDetails?.team?.map((item) => {
                                return (
                                  <div
                                    className="profile1-circle"
                                    title={item?.name}
                                    onClick={() =>
                                      navigate("/myProfile", {
                                        state: { email: item?.email },
                                      })
                                    }
                                  >
                                    {item?.name?.charAt(0).toUpperCase()}
                                  </div>
                                );
                              })}
                            </Row>
                          </Col>
                        </>
                      ) : (
                        <>
                          <Col
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            xl={12}
                            xxl={12}
                            style={{ marginTop: 20 }}
                          >
                            <b>Roles:</b>
                          </Col>
                          <Col
                            className="mt-5"
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            xl={12}
                            xxl={12}
                          >
                            <Row>
                              {availableRoles?.map((item, i) => {
                                return (
                                  <Col
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={12}
                                    xl={12}
                                    xxl={12}
                                    key={i}
                                  >
                                    <RoleCard
                                      skillsList={availableSkills}
                                      role={item}
                                      refresh={() => getIdeaDetails()}
                                      cancel={false}
                                      isEdit={edit}
                                      status={ideaDetails?.status}
                                    />
                                  </Col>
                                );
                              })}
                            </Row>
                          </Col>
                        </>
                      )}
                    </Row>

                    {authCtx.type === "admin" &&
                      ideaDetails?.status === "submitted" && (
                        <>
                          <Row className="ans">
                            <Col xs={6} sm={6} md={6} lg={2} xl={2} xxl={2}>
                              <b>Complexity*:</b>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={10} xl={10} xxl={10}>
                              <Row
                                onChange={(e) =>
                                  setNewComplexity(e.target.value)
                                }
                              >
                                <Col
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={4}
                                  xl={3}
                                  xxl={3}
                                >
                                  <input
                                    type="radio"
                                    name="complexity"
                                    className="radioBtnInput"
                                    value="simple"
                                    checked={newComplexity === "simple"}
                                  />
                                  <span className="radioBtn">Simple</span>
                                </Col>
                                <Col
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={4}
                                  xl={3}
                                  xxl={3}
                                >
                                  <input
                                    type="radio"
                                    name="complexity"
                                    className="radioBtnInput"
                                    value="medium"
                                    checked={newComplexity === "medium"}
                                  />
                                  <span className="radioBtn">Medium</span>
                                </Col>
                                <Col
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={4}
                                  xl={3}
                                  xxl={3}
                                >
                                  <input
                                    type="radio"
                                    name="complexity"
                                    className="radioBtnInput"
                                    value="complex"
                                    checked={newComplexity === "complex"}
                                  />
                                  <span className="radioBtn">Complex</span>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                          <Row className="ans">
                            <Col xs={6} sm={6} md={6} lg={2} xl={2} xxl={2}>
                              <b>Action*:</b>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={10} xl={10} xxl={10}>
                              <Row
                                onChange={(e) => setNewStatus(e.target.value)}
                              >
                                <Col
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={3}
                                  xl={3}
                                  xxl={3}
                                >
                                  <input
                                    type="radio"
                                    name="status"
                                    className="radioBtnInput"
                                    value="approve"
                                    checked={newStatus === "approve"}
                                  />
                                  <span className="radioBtn">Approve</span>
                                </Col>
                                <Col
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={3}
                                  xl={3}
                                  xxl={3}
                                >
                                  <input
                                    type="radio"
                                    name="status"
                                    className="radioBtnInput"
                                    value="reject"
                                    checked={newStatus === "reject"}
                                  />
                                  <span className="radioBtn">Reject</span>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                          {newStatus === "approve" && (
                            <Row className="ans">
                              <Col
                                xs={12}
                                sm={12}
                                md={12}
                                lg={2}
                                xl={2}
                                xxl={2}
                              >
                                <b>Add Roles*:</b>
                              </Col>
                              <Col
                                xs={12}
                                sm={12}
                                md={12}
                                lg={10}
                                xl={10}
                                xxl={10}
                              >
                                <Roles
                                  rolesList={rolesList}
                                  onChange={rolesOnChange}
                                  add={onAddRole}
                                  remove={onRemoveRole}
                                  availableSkills={availableSkills}
                                  skillsValue={skillsReq}
                                />
                                {newStatus === "approve" &&
                                  isAdminClickSave &&
                                  !isValidRoles && (
                                    <p className="errorMsg">
                                      *Roles and Skills are required
                                    </p>
                                  )}
                              </Col>
                            </Row>
                          )}
                          <Row>
                            <textarea
                              className="commentTextArea"
                              placeholder="Comments*"
                              name="approveComments"
                              rows="4"
                              onChange={(e) => setAdminComments(e.target.value)}
                            ></textarea>
                            {isAdminClickSave && !adminComments && (
                              <p className="errorMsg">*Comments is required</p>
                            )}
                          </Row>
                          <Row>
                            <Col>
                              <div className="d-flex justify-content-center">
                                <button
                                  type="submit"
                                  className="btn btn-warning form-btns"
                                  onClick={() => onAdminAction()}
                                >
                                  Save
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </>
                      )}
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 20,
                      }}
                    >
                      {ideaDetails?.status !== "reject" && (
                        <div>
                          <img
                            src={ideaDetails?.isLiked ? likeYellow : likeWhite}
                            height="50"
                            onClick={() => {
                              likeIdea(ideaDetails?.isLiked ? false : true);
                            }}
                          />
                        </div>
                      )}
                      {authCtx.email?.toLowerCase() !==
                        ideaDetails?.email?.toLowerCase() &&
                        (ideaDetails?.status === "submitted" ||
                          ideaDetails?.status === "inProgress") && (
                          <div
                            style={{
                              fontSize: 50,
                              marginTop: -14,
                              fontWeight: 50,
                              color: "gray",
                            }}
                          >
                            |
                          </div>
                        )}
                      {authCtx.email?.toLowerCase() !==
                        ideaDetails?.email?.toLowerCase() &&
                        (ideaDetails?.status === "submitted" ||
                          ideaDetails?.status === "inProgress") && (
                          <div>
                            <img
                              src={
                                ideaDetails?.isIntrested ? isInterested : hands
                              }
                              height="50"
                              onClick={() => {
                                showInterest(
                                  ideaDetails?.isIntrested ? false : true
                                );
                              }}
                            />
                          </div>
                        )}
                      {authCtx.type === "admin" &&
                        ideaDetails?.status !== "submitted" &&
                        authCtx.email?.toLowerCase() !==
                          ideaDetails?.email?.toLowerCase() &&
                        ideaDetails?.team?.length > 0 && (
                          <div
                            style={{
                              fontSize: 50,
                              marginTop: -14,
                              fontWeight: 50,
                              color: "gray",
                            }}
                          >
                            |
                          </div>
                        )}
                      {authCtx.type === "admin" &&
                        ideaDetails?.status !== "submitted" &&
                        authCtx.email?.toLowerCase() !==
                          ideaDetails?.email?.toLowerCase() &&
                        ideaDetails?.team?.length > 0 && (
                          <div className="d-flex justify-content-end gap-5">
                            <button
                              type="submit"
                              className="btn btn-warning"
                              onClick={() => {
                                setAllocateModalShow(true);
                              }}
                            >
                              Allocate Points
                            </button>
                          </div>
                        )}
                    </div>
                    <Row>
                      <Alert
                        show={showSuccessMsg}
                        variant="success"
                        dismissible
                        onClose={() => setShowSuccessMsg(false)}
                      >
                        <p className="pointsSuccess">Points has been added</p>
                      </Alert>
                    </Row>
                  </div>
                  {ideaDetails?.status !== "reject" && (
                    <Comments
                      id={ideaDetails?._id}
                      commentList={ideaDetails?.comments}
                      reloadEvent={getIdeaDetails}
                    />
                  )}
                </div>
              )}
              {edit && (
                <div className="formBg">
                  <Row>
                    <Col>
                      <p className="edit-heading">
                        {isCloseIdea ? "Close Idea" : "Edit Idea"}
                      </p>
                      <hr />
                    </Col>
                  </Row>
                  {authCtx.type === "admin" &&
                    ideaDetails?.status !== "submitted" && (
                      <Row className="py-2">
                        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                          <SearchDropDown
                            name="status"
                            error={formErrors.status}
                            InputData={formElements[7]}
                            DataList={availableStatus}
                            onChange={onSelect}
                            value={{
                              label: formValues?.status,
                              value: formValues?.status,
                            }}
                          />
                        </Col>
                      </Row>
                    )}
                  {!isCloseIdea && (
                    <form onSubmit={submitForm} noValidate>
                      <Row className="py-2">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                          <SearchDropDown
                            name="category"
                            error={formErrors.category}
                            InputData={formElements[0]}
                            DataList={availablecategories}
                            onChange={onSelect}
                            value={selectedCategory}
                          />
                        </Col>
                      </Row>
                      <Row className="py-2">
                        <Col>
                          <TextInput
                            name="title"
                            error={formErrors.title}
                            InputData={formElements[1]}
                            onChange={onChange}
                            value={formValues?.title}
                          />
                        </Col>
                      </Row>
                      <Row className="py-2">
                        <Col>
                          <TextArea
                            name="description"
                            error={formErrors.description}
                            InputData={formElements[2]}
                            onChange={onChange}
                            value={formValues?.description}
                          />
                        </Col>
                      </Row>
                      <Row className="py-2">
                        <Col>
                          <TextArea
                            name="possibleSolution"
                            error={formErrors.possible_solution}
                            InputData={formElements[3]}
                            onChange={onChange}
                            value={formValues?.possibleSolution}
                          />
                        </Col>
                      </Row>
                      <Row className="py-2">
                        <Col>
                          <TextArea
                            name="benefits"
                            error={formErrors.benefits}
                            InputData={formElements[4]}
                            onChange={onChange}
                            value={formValues?.benefits}
                          />
                        </Col>
                      </Row>
                      <Row className="py-2">
                        <Col>
                          <TextInput
                            name="efforts"
                            error={formErrors.effort}
                            InputData={formElements[5]}
                            onChange={onChange}
                            value={formValues?.efforts}
                          />
                        </Col>
                      </Row>
                      <Row className="py-2">
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                          <CreatableSelectDropdown
                            name="skillsRequired"
                            error={formErrors.skillsRequired}
                            InputData={formElements[6]}
                            onChange={onSelectMultiple}
                            dataList={availableSkills}
                            value={skillsReq}
                          />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                          <CreatableSelectDropdown
                            name="tags"
                            error={formErrors.tags}
                            InputData={formElements[8]}
                            onChange={onSelectMultiple}
                            dataList={availableTags}
                            value={selectedTags}
                          />
                        </Col>
                      </Row>
                      {authCtx.type === "admin" && (
                        <>
                          <Row className="ans">
                            <Col xs={6} sm={6} md={6} lg={2} xl={2} xxl={2}>
                              <b>Complexity*:</b>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={10} xl={10} xxl={10}>
                              <Row
                                onChange={(e) =>
                                  setNewComplexity(e.target.value)
                                }
                              >
                                <Col
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={3}
                                  xl={3}
                                  xxl={3}
                                >
                                  <input
                                    type="radio"
                                    name="complexity"
                                    className="radioBtnInput"
                                    value="simple"
                                    checked={newComplexity === "simple"}
                                  />
                                  <span className="radioBtn">Simple</span>
                                </Col>
                                <Col
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={3}
                                  xl={3}
                                  xxl={3}
                                >
                                  <input
                                    type="radio"
                                    name="complexity"
                                    className="radioBtnInput"
                                    value="medium"
                                    checked={newComplexity === "medium"}
                                  />
                                  <span className="radioBtn">Medium</span>
                                </Col>
                                <Col
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={3}
                                  xl={3}
                                  xxl={3}
                                >
                                  <input
                                    type="radio"
                                    name="complexity"
                                    className="radioBtnInput"
                                    value="complex"
                                    checked={newComplexity === "complex"}
                                  />
                                  <span className="radioBtn">Complex</span>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                          <Row className="ans">
                            <Col
                              xs={6}
                              sm={6}
                              md={6}
                              lg={9}
                              xl={9}
                              xxl={9}
                              className="mb-5"
                            >
                              <b>Roles*:</b>
                            </Col>
                            <Col
                              xs={6}
                              sm={6}
                              md={6}
                              lg={3}
                              xl={3}
                              xxl={3}
                              className="mb-5 d-flex justify-content-end"
                            >
                              <a onClick={openRoles} className="add-role">
                                Add Roles
                              </a>
                            </Col>
                            <Col
                              xs={11}
                              sm={11}
                              md={12}
                              lg={12}
                              xl={12}
                              xxl={12}
                            >
                              <Row>
                                {availableRoles?.map((item, i) => {
                                  return (
                                    <Col
                                      xs={12}
                                      sm={12}
                                      md={6}
                                      lg={4}
                                      xl={3}
                                      xxl={3}
                                      key={i}
                                    >
                                      <RoleCard
                                        skillsList={availableSkills}
                                        role={item}
                                        refresh={() => getIdeaDetails()}
                                        cancel={true}
                                        isEdit={edit}
                                        status={ideaDetails?.status}
                                      />
                                    </Col>
                                  );
                                })}
                              </Row>
                            </Col>
                          </Row>
                        </>
                      )}
                      <Row className="py-2 ">
                        <Col>
                          <div className="d-flex justify-content-center">
                            <button
                              type="submit"
                              className="btn btn-warning form-btns"
                            >
                              Save
                            </button>
                            &nbsp;&nbsp;
                            <button
                              type="reset"
                              className="btn btn-warning form-btns"
                              onClick={onCancelEdit}
                            >
                              Cancel
                            </button>
                            &nbsp;&nbsp;
                          </div>
                        </Col>
                      </Row>
                    </form>
                  )}
                  {isCloseIdea && <CloseIdea />}
                </div>
              )}
            </>
          )}
          {selectedTab === 1 && (
            <>
              <History
                historyData={historyData}
                visible={visible}
                handleShowMoreHistory={handleShowMoreHistory}
                totalRecords={totalRecords}
              ></History>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default IdeaDetail;
