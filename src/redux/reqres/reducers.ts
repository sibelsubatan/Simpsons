import { createReducer } from '@reduxjs/toolkit';
import {
  addSimpson,
  deleteSimpson,
  downSimpson,
  getSimpsonsListFailed,
  getSimpsonsListRequest,
  getSimpsonsListSuccess,
  upSimpson,
} from './actions';
import { Simpson } from './types';

export interface SimpsonsState {
  loading: boolean;
  simpsonsList: Simpson[];
}

const initialState: SimpsonsState = {
  loading: false,
  simpsonsList: [],
};

export const simpsonsReducer = createReducer(initialState, {
  [getSimpsonsListRequest.type]: state => {
    state.loading = true;
  },
  [getSimpsonsListSuccess.type]: (state, action) => {
    state.loading = false;
    if (state.simpsonsList.length === 0) {
      state.simpsonsList = action.payload;
    }
  },
  [getSimpsonsListFailed.type]: state => {
    state.loading = false;
  },
  [addSimpson.type]: (state, action) => {
    state.simpsonsList.push(action.payload);
  },
  [deleteSimpson.type]: (state, action) => {
    state.simpsonsList = state.simpsonsList.filter(simpson => simpson.id !== action.payload);
  },
  [upSimpson.type]: (state, action) => {
    const index = state.simpsonsList.findIndex(simpson => simpson.id === action.payload);
    if (index > 0) {
      const temp = state.simpsonsList[index];
      state.simpsonsList[index] = state.simpsonsList[index - 1];
      state.simpsonsList[index - 1] = temp;
    }
  },
  [downSimpson.type]: (state, action) => {
    const index = state.simpsonsList.findIndex(simpson => simpson.id === action.payload);
    if (index < state.simpsonsList.length - 1) {
      const temp = state.simpsonsList[index];
      state.simpsonsList[index] = state.simpsonsList[index + 1];
      state.simpsonsList[index + 1] = temp;
    }
  },
});
