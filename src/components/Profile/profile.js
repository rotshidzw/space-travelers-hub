import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllMissions,
  getMissionStatus,
  getActiveMissions,
} from '../../Redux/Mission/missionSlice';
import {
  getAllRockets,
  getRocketStatus,
  getActiveRockets,
} from '../../Redux/Rocket/rocketSlice';
import './Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector(getAllMissions);
  const rockets = useSelector(getAllRockets).filter((x) => x.reserved === true);
  const missionStatus = useSelector(getMissionStatus);
  const rocketStatus = useSelector(getRocketStatus);

  console.log('missions', missions);
  console.log('rockets', rockets);

  useEffect(() => {
    if (missionStatus === 'idle') {
      dispatch(getActiveMissions());
    }
    if (rocketStatus === 'idle') {
      dispatch(getActiveRockets());
    }
  }, [missionStatus, rocketStatus, dispatch]);

  return (
    <div className="profile-content">
      <div className="missions">
        <h1>Missions</h1>
        <div className="mission-list">
          <ul className="user-missions">
            {rockets.map((x) => (
              <li key={x.id}>
                <p className="mission-name">{x.rocketName}</p>
                <div className="action-btns">
                  <button type="button" className="leave-mission-btn">
                    Leave Mission
                  </button>
                  <button type="button" className="read-more-btn">
                    Read More
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rockets">
        <h1 className="heading">Rockets</h1>
        <div className="rocket-list">
          <ul className="user-rockets">
            <li>
              <p className="rocket-name">Falcon 1</p>
              <div className="action-btns">
                <button type="button" className="cancel-rocket-btn">
                  Cancel Reservation
                </button>
                <button type="button" className="read-more-btn">
                  Read More
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
