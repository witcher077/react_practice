import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Col } from 'react-bootstrap';
import CardGrid from '../UI/Cards/CardGrid';
import Cards from '../UI/Cards/Cards';
import { faComment, faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import './IdeaCard.scss'

export default function IdeaCard(props1) {
      const { index, onCardClick, value, profilePic, isAdmin, nominate, notify } = props1;

      const FooterDataV1 = (props) => {

            return (
                  <div className="d-flex justify-content-between card_action">
                        <a href="#" className="no_action">
                              <FontAwesomeIcon icon={faHandPointRight} />
                              <span>&nbsp;&nbsp;{props.userData.likes ? props.userData.likes.length : 0}</span>
                        </a>
                        <a href="#" className="no_action">
                              <FontAwesomeIcon icon={faComment} /> <span>&nbsp;&nbsp;{props.userData.comments.length > 0 ? props.userData.comments.length : 0}</span>
                        </a>
                        {!props.isAdmin && props.userData.status === "submitted" ?
                              ((!props.userData.isNotify) ? <Button variant="warning" size="sm" onClick={() => notify(props.userData._id)}>
                                    Notify
                              </Button> : "") :
                              !props.isAdmin && props.userData.status === "openForNomination" ?
                                    (!props?.userData?.roleFilled ? <Button variant="warning" size="sm" onClick={() => nominate(props.userData._id)}>
                                          Nominate
                                    </Button> : "") : ""}
                  </div>
            );
      };
      return (
            <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} className="idea-tiles-col" key={index}>
                  <Cards styleClassName="idea-card">
                        <CardGrid actionsButton={<FooterDataV1 userData={value} isAdmin={isAdmin} />} userData={value} profilePic={profilePic} onclick={onCardClick} />
                  </Cards>
            </Col>
      )
}
