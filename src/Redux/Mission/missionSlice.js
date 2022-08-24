/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HttpService from '../../api/http-service';

export const initialState = {
  rockets: [],
  missions: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await HttpService.getMissions('missions');
  return response;
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissions: {
      reducer(state, action) {
        const missions = {
          id: action.payload.mission_id,
          missionName: action.payload.mission_name,
          description: action.payload.description,
          reserved: false,
        };
        state.missions.push(missions);
      },
    },
    getActiveMissions: {
      reducer(state) {
        return state.missions.filter((mission) => mission.reserved === true);
      },
    },
    updateMission: {
      reducer(state, action) {
        const id = action.payload;
        const mission = state.missions.find((x) => x.id === id);
        mission.reserved = !mission.reserved;
      },
    },
  },
  extraReducers: {
    [fetchMissions.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchMissions.fulfilled]: (state, action) => {
      const container = [];
      state.status = 'succeeded';
      const { data } = action.payload;
      data.forEach((x) => {
        const mission = {};
        mission.id = x.mission_id;
        mission.missionName = x.mission_name;
        mission.description = x.description;
        container.push(mission);
      });
      state.missions = container;
    },
    [fetchMissions.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const getAllMissions = (state) => state.missions.missions;
export const getMissionStatus = (state) => state.missions;
export const getMissionError = (state) => state.missions;

export const { updateMission, getMissions, getActiveMissions } = missionSlice.actions;
export default missionSlice.reducer;
