import React, { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import IdeaBanner from '../UI/IdeaBanner/IdeaBanner';
import idea from "../.././assets/InnovativeIdeas-Icons/PNG/Icon (21).png";
import leaderboard from "../.././assets/InnovativeIdeas-Icons/PNG/user-leaderboard.png";
import IdeaPage from './IdeaPage';
import './AdminDashboard.scss';
import UserLeaderboard from './UserLeaderboard';
import SearchInput from '../FormElements/SearchInput';

export default function IdeaDashboard() {
      const [activeTab, setActiveTab] = useState(0)


      const onBtnClick = (value) => {
            setActiveTab(value);
      }
      return (
            <Container>
                  <div>
                        <div className='idea-dashboard'>
                              <div className='search-input'>
                                    <SearchInput />
                              </div>
                              <div className='dasboard-tabs'>
                                    <Button variant="outline" id='ideas' className={activeTab === 0 ? 'active' : ""} onClick={() => onBtnClick(0)}>
                                          <img src={idea} alt='idea' id="img1"/> Ideas</Button>
                                    <Button variant="outline" id='leaderboard' className={activeTab === 1 ? 'active' : ""} onClick={() => onBtnClick(1)}>
                                          <img src={leaderboard} alt='leaderIcon' id="img2"/> Leaderboard</Button>
                              </div>
                              <div>
                                    {activeTab === 0 && (
                                          <IdeaPage isAdmin={true} />
                                    )}
                                    {activeTab === 1 && (
                                          <UserLeaderboard />
                                    )}
                              </div>
                        </div>
                  </div>
            </Container>
      )
}
