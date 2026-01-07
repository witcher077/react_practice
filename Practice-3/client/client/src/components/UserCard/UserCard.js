import React from 'react'
import { Button, Card, Image } from 'react-bootstrap';
import UserImg from "../../assets/avatar1.jpg";
import './UserCard.scss';
import { useNavigate } from "react-router";


export default function UserCard(props) {
  const navigate = useNavigate();

      const { name, totalPoints,email } = props?.userInfo;
      return (
            <Card className='user-card'>
                  <Card.Body>
                        <div className='img-section'
                         onClick={() =>
                              navigate("/myProfile", {
                                state: { email:email },
                              })
                            }>
                           {name?.charAt(0).toUpperCase()}
                        </div>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>{totalPoints}</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                        <Button variant="warning" size="sm" onClick={() => props?.onAllocate(props?.userInfo)}>Allocate points</Button>
                  </Card.Footer>
            </Card>
      )
}
