import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import cancel from "../../assets/InnovativeIdeas-Icons/SVG/cancel.svg";
import {
      deleteRole,
      nominateUserRole,
      unAssignRole,
} from "../../services/IdeaDashboard-service";
import AuthContext from "../../store/auth-context";
import ModalBox from "../UI/ModalBox/ModalBox";
import "./RoleCard.scss";

export default function RoleCard(props) {
      const { role } = props;
      const [modalShow, setModalShow] = useState(false);
      const [modalInfo, setModalInfo] = useState({
            header: "",
            subHeader: "",
            type: "",
      });
      const authCtx = useContext(AuthContext);
      const navigate = useNavigate();

      const nominateRole = async () => {
            const inputObj = {
                  ideaId: role?.ideaId,
                  roleId: role?._id,
            };
            nominateUserRole(authCtx.token, inputObj)
                  .then(() => {
                        props?.refresh();
                  })
                  .catch((error) => {
                        console.error("Error:", error);
                  });
      };

      const onConfirm = () => {
            if (modalInfo.type === "unassign") {
                  unassignNominee();
            } else if (modalInfo.type === "delete") {
                  onDeleteRole();
            }
      };
      const handleUnAssginNominee = () => {
            setModalInfo({
                  header: `Are you sure you want to remove ${role?.appliedBy?.name} from the ${role?.name}?`,
                  subHeader: `${role?.appliedBy?.name} will be notified on this change and the idea will move back "Open for Nomination" state. Do you wish to proceed?`,
                  type: "unassign",
            });
            setModalShow(true);
      };

      const unassignNominee = async () => {
            const inputObj = {
                  ideaId: role?.ideaId,
                  roleId: role?._id,
            };
            await unAssignRole(authCtx.token, inputObj)
                  .then(() => {
                        props?.refresh();
                        setModalShow(false);
                  })
                  .catch((error) => {
                        console.error("Error:", error);
                        setModalShow(false);
                  });
      };

      const handleDeleteRole = () => {
            setModalInfo({
                  header: `Are you sure you want to delete the ${role?.name}?`,
                  subHeader: `${role?.appliedBy?.name
                        ? role?.appliedBy?.name +
                        " will be notified on this change."
                        : ""
                        } Do you wish to proceed?`,
                  type: "delete",
            });
            setModalShow(true);
      };

      const onDeleteRole = async () => {
            await deleteRole(authCtx.token, role?._id)
                  .then(() => {
                        props?.refresh();
                        setModalShow(false);
                  })
                  .catch((error) => {
                        console.error("Error:", error);
                        setModalShow(false);
                  });
      };

      return (
            <div className="role-card">
                  {modalShow && (
                        <ModalBox
                              show={modalShow}
                              isfooter={
                                    <>
                                          <Button variant="warning" onClick={onConfirm}>
                                                Yes
                                          </Button>
                                          <Button
                                                variant="warning"
                                                onClick={() => {
                                                      setModalShow(false);
                                                }}
                                          >
                                                No
                                          </Button>
                                    </>
                              }
                              isheader={modalInfo.header}
                              isconfirmation={modalInfo.subHeader}
                              cancel={true}
                              showmodal={() => {
                                    setModalShow(false);
                              }}
                        />
                  )}
                  {!role?.open && (
                        <div className="profile-circle" title="">
                              <div
                                    className="mb-3 rounded-circle profileBg"
                                    onClick={() => {
                                          navigate("/profileDetail", {
                                                state: { email: role?.appliedBy?.email },
                                          });
                                    }}
                              >
                                    {role?.appliedBy?.name?.charAt(0)?.toUpperCase()}
                              </div>
                              {((authCtx?.type === "admin" && props?.isEdit) ||
                                    (authCtx?.type === "user" &&
                                          authCtx?.email?.toLowerCase() ===
                                          role?.appliedBy?.email?.toLowerCase())) && (
                                          <img
                                                src={cancel}
                                                alt="delete"
                                                className="remove-nominee"
                                                onClick={handleUnAssginNominee}
                                          />
                                    )}
                        </div>
                  )}
                  {props?.cancel && authCtx.type === "admin" && (
                        <img
                              src={cancel}
                              alt="delete"
                              className="remove-role"
                              onClick={handleDeleteRole}
                        />
                  )}
                  <h6 className="mt-3">{role?.name}</h6>
                  <div className="skill-list">
                        {role?.skills &&
                              role?.skills.length > 0 &&
                              role?.skills.map((item, i) => {
                                    return <span key={i}>{item}</span>;
                              })}
                  </div>
                  {role?.open && !props?.isEdit && props?.status !== "complete" && props?.status !== "reject" &&(
                        <button
                              type="button"
                              className="btn btn-warning"
                              onClick={nominateRole}
                        >
                              Nominate
                        </button>
                  )}
            </div>
      );
}
