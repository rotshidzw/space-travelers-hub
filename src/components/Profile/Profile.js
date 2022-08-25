/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateMission } from '../../Redux/Mission/missionSlice';
import { updateRocket } from '../../Redux/Rocket/rocketSlice';
import './Profile.css';

const Profile = (props) => {
  const { rockets, missions } = props;
  const dispatch = useDispatch();

  const handleMission = (event, id) => {
    dispatch(updateMission(id));
  };

  const handleReserversion = (event, id) => {
    dispatch(updateRocket(id));
  };

  const readMore = (event, url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="profile-content">
        <div className="missions">
          <h1>Missions</h1>
          <div className="mission-list">
            <ul className="user-missions">
              {missions.length !== 0 ? (
                missions.map((x) => (
                  <li key={x.id}>
                    <p className="mission-name">{x.missionName}</p>
                    <div className="action-btns">
                      <button
                        onClick={(event) => handleMission(event, x.id)}
                        type="button"
                        className="leave-mission-btn"
                      >
                        Leave Mission
                      </button>
                      <button
                        onClick={(event) => readMore(event, x.url)}
                        type="button"
                        className="read-more-btn"
                      >
                        Read More
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <p>No Mission Joined</p>
              )}
            </ul>
          </div>
        </div>
        <div className="rockets">
          <h1 className="heading">Rockets</h1>
          <div className="rocket-list">
            <ul className="user-rockets">
              {rockets.length !== 0 ? (
                rockets.map((x) => (
                  <li key={x.id}>
                    <p className="rocket-name">{x.rocketName}</p>
                    <div className="action-btns">
                      <button onClick={(event) => handleReserversion(event, x.id)} type="button" className="cancel-rocket-btn">
                        Cancel Reservation
                      </button>
                      <button onClick={(event) => readMore(event, x.url)} type="button" className="read-more-btn">
                        Read More
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <p>No Rocket Reserved</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
