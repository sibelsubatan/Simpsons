import type { RootState } from '@redux/reducers';
import { createSelector } from '@reduxjs/toolkit';
const simpsonsSelector = (state: RootState) => state.simpsons;

export const simpsonsLoading = createSelector(simpsonsSelector, s => s.loading);
export const simpsonsList = createSelector(simpsonsSelector, s => s.simpsonsList);
export const findSimpsonById = (id: string) => createSelector([simpsonsSelector], (s) => s.simpsonsList.find((simpson) => simpson.id == id));