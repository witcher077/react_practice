import React from 'react'
import { Col, Row } from 'react-bootstrap';
import TextInput from '../FormElements/TextInput';
import plus from '../../assets/InnovativeIdeas-Icons/PNG/plus.png'
import minus from '../../assets/InnovativeIdeas-Icons/PNG/minus.png'
import './Roles.scss';
import CreatableSelectDropdown from '../FormElements/CreatableSelectDropdown';

export default function Roles(props) {
      const rolesFormElements = [
            {
                  name: "name",
                  errorMessage: "Please choose the roles that required",
                  label: "Role Title*",
                  placeholder: "Add Role here...",
                  required: true,
            },
            {
                  name: "skills",
                  errorMessage: "Please choose the skills that required",
                  label: "Skills Required*",
                  placeholder: "Add Skills here...",
                  required: true,
            },
      ]
      return (
            <Row className='roles-row'>
                  {
                        props?.rolesList
                        && props.rolesList.length > 0
                        && props.rolesList?.map((item, i) => {
                              return (
                                    <>
                                          <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                                                <TextInput
                                                      name="name"
                                                      InputData={rolesFormElements[0]}
                                                      onChange={(e) => props?.edit ? props.onRoleChange(e, i) : props?.onChange("name", i, e)}
                                                      value={item.name}
                                                      hideLabel={false}
                                                />
                                          </Col>
                                          <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
                                                <CreatableSelectDropdown
                                                      name="skills"
                                                      InputData={rolesFormElements[1]}
                                                      onChange={(e) => props?.edit ? props.onSkillChange(e, i) : props?.onChange("skills", i, e)}
                                                      value={props.skillsValue}
                                                      dataList={props?.availableSkills}
                                                />
                                          </Col>
                                          <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2} className="roles-action">
                                                <img src={plus} alt='add' onClick={props?.add} />
                                                <img src={minus} alt='remove' className={i === 0 ? 'disable-action' : ''} onClick={props?.remove} />
                                          </Col>
                                    </>
                              )
                        })
                  }

            </Row>
      )
}
