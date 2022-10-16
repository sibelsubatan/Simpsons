import { createAction, nanoid } from '@reduxjs/toolkit';
import {
  Simpson,
} from './types';

export const getSimpsonsListRequest = createAction('ACTION/GET_SIMPSONS_LIST_REQUEST');
export const getSimpsonsListSuccess = createAction<Simpson>('ACTION/GET_SIMPSONS_LIST_SUCCESS');
export const getSimpsonsListFailed = createAction('ACTION/GET_SIMPSONS_LIST_FAILED');
export const addSimpson = createAction('ACTION/ADD_SIMPSON', (simpson) => ({
  payload: {
    ...simpson,
    id: nanoid(),
  },
}));
export const deleteSimpson = createAction('ACTION/DELETE_SIMPSON', (id) => ({payload: id}));
export const upSimpson = createAction('ACTION/UP_SIMPSON', (id) => ({payload: id}));
export const downSimpson = createAction('ACTION/DOWN_SIMPSON', (id) => ({payload: id}));
