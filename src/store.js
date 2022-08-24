import { configureStore } from '@reduxjs/toolkit';
import RocketSlice from './Redux/Rocket/rocketSlice';
import MissionSlice from './Redux/Mission/missionSlice';

export default configureStore({
  reducer: {
    rockets: RocketSlice,
    missions: MissionSlice,

  },
//   middleware: customisedMiddleware,
});
