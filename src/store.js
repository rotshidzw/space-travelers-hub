import { configureStore } from '@reduxjs/toolkit';
import RocketSlice from './Redux/Rocket/rocketSlice';

export default configureStore({
  reducer: {
    rockets: RocketSlice,

  },
//   middleware: customisedMiddleware,
});
