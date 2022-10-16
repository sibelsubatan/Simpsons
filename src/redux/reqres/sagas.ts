import {isEmpty} from 'lodash';
import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects';
import {
  getSimpsonsListFailed,
  getSimpsonsListRequest,
  getSimpsonsListSuccess,

} from './actions';
import * as SimpsonsAPI from './apiCall';
import {Simpson} from './types';

function* getSimpsonsListSaga() {
  try {
    const response: Simpson = yield call(SimpsonsAPI.getSimpsons);

    if (!isEmpty(response)) {
      yield put(getSimpsonsListSuccess(response));
    } else {
      yield put(getSimpsonsListFailed());
    }
  } catch (err) {
    yield put(getSimpsonsListFailed());
  }
}


function* simpsonsSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(getSimpsonsListRequest.type, getSimpsonsListSaga);
}

export default simpsonsSaga;
