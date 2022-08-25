/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HttpService from '../../api/http-service';

export const initialState = {
  rockets: [],
  missions: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await HttpService.getRockets('rockets');
    return response;
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setRockets: {
      reducer(state, action) {
        const rockets = {
          id: action.payload.id,
          rocket_name: action.payload.rocket_name,
          description: action.payload.description,
          flickr_images: action.payload.flickr_images[0],
          url: action.payload.wikipedia,
          reserved: false,
        };
        state.rockets.push(rockets);
      },
    },
    getActiveRockets: {
      reducer(state) {
        return state.rockets.filter(
          (rocket) => rocket.reserved === true,
        );
      },
    },
    getRockets: {
      reducer(state, action) {
        state.rockets = action.payload;
      },
    },
    updateRocket: {
      reducer(state, action) {
        const id = action.payload;
        const rocket = state.rockets.find((x) => x.id === id);
        rocket.reserved = !rocket.reserved;
      },
    },
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchRockets.fulfilled]: (state, action) => {
      const container = [];
      state.status = 'succeeded';
      const { data } = action.payload;
      data.forEach((x) => {
        const rocket = {};
        rocket.id = x.id;
        rocket.rocketName = x.rocket_name;
        rocket.description = x.description;
        rocket.flickrImages = x.flickr_images;
        rocket.url = x.wikipedia;
        rocket.reserved = false;
        container.push(rocket);
      });
      state.rockets = container;
    },
    [fetchRockets.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const getAllRockets = (state) => state.rockets.rockets;
export const getRocketStatus = (state) => state.rockets;
export const getRocketError = (state) => state.rockets;

export const {
  setRockets, getRockets, updateRocket, getActiveRockets,
} = rocketSlice.actions;
export default rocketSlice.reducer;
