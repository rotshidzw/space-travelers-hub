import React from 'react';
import { useDispatch } from 'react-redux';
import { updateRocket } from '../../Redux/Rocket/rocketSlice';
import './Rockets.css';

const Rockets = (rocket) => {
  const dispatch = useDispatch();

  const {
    rocket: {
      id, rocketName, description, flickrImages, reserved,
    },
  } = rocket;

  const handleReservation = () => {
    dispatch(updateRocket(id));
  };

  return (
    <div className="rocket-section">
      <div className="rocket-content">
        <div className="col-1">
          <div className="rocket-image">
            <img src={flickrImages[0]} alt="spacex logo" />
          </div>
        </div>
        <div className="col-2">
          <div className="rocket-info">
            <h2 className="rocket-title">{rocketName}</h2>
            <div className="rocket-desc">
              <p>
                <span className={reserved ? 'badge' : 'badge-hide'}>
                  Reserved
                </span>
                {description}
              </p>
            </div>
          </div>
          {!reserved ? (
            <button
              onClick={handleReservation}
              type="button"
              className="reserve-btn"
            >
              RESERVE ROCKET
            </button>
          ) : (
            <button
              onClick={handleReservation}
              type="button"
              className="cancel-btn"
            >
              CANCEL RESERVATION
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rockets;
