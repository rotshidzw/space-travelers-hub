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
import Profile from '../../components/Profile/Profile';
import './ProfilePage.css';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const reservedMissions = useSelector(getAllMissions).filter(
    (mission) => mission.reserved === true,
  );
  const reservedRockets = useSelector(getAllRockets).filter(
    (x) => x.reserved === true,
  );
  const missionStatus = useSelector(getMissionStatus);
  const rocketStatus = useSelector(getRocketStatus);

  useEffect(() => {
    if (missionStatus === 'idle' || missionStatus === 'succeeded') {
      dispatch(getActiveMissions());
    }
    if (rocketStatus === 'idle' || rocketStatus === 'succeeded') {
      dispatch(getActiveRockets());
    }
  }, [rocketStatus, dispatch]);
  return (
    <>
      <div className="profile-section">
        <Profile rockets={reservedRockets} missions={reservedMissions} />
      </div>
    </>
  );
};

export default ProfilePage;
