/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateMission } from '../../Redux/Mission/missionSlice';
import './Profile.css';

const Profile = (props) => {
  const { missions } = props;
  const dispatch = useDispatch();

  const handleMission = (event, id) => {
    dispatch(updateMission(id));
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
        {/* rockets */}
      </div>
    </>
  );
};

export default Profile;
