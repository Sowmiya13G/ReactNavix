import {call, put, takeLatest} from 'redux-saga/effects';
import {
  signupSuccess,
  signupFailure,
  loginSuccess,
  loginFailure,
} from '../actions/authActions';
import * as ActionTypes from '../actionTypes';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@react-native-firebase/auth';

function* signupUserSaga(action) {
  try {
    const {email, password} = action.payload;
    yield call(createUserWithEmailAndPassword, auth, email, password);
    yield put(signupSuccess());
  } catch (error) {
    yield put(signupFailure(error.message));
  }
}

function* loginUserSaga(action) {
  try {
    const {email, password} = action.payload;
    const userCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* authSagas() {
  yield takeLatest(ActionTypes.signupRequest, signupUserSaga);
  yield takeLatest(ActionTypes.loginRequest, loginUserSaga);
}

export default authSagas;
