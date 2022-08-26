import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rockets from '../../components/Rockets/Rockets';
import {
  getRocketStatus,
  fetchRockets,
  getAllRockets,
} from '../../Redux/Rocket/rocketSlice';
import './RocketsPage.css';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getRocketStatus);
  const rockets = useSelector(getAllRockets);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  return (
    <div className="rockets-content">
      {
        rockets.map((x) => (
          <Rockets key={x.id} rocket={x} />
        ))
      }
    </div>
  );
};

export default RocketsPage;
