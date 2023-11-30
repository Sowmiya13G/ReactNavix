import {put, takeLatest, all} from 'redux-saga/effects';
import * as ActionTypes from '../actionTypes';

import axios from 'axios';

function* fetchProducts() {
  try {
    const response = yield axios.get('https://fakestoreapi.com/products');

    yield put({type: ActionTypes.fetchProductsSuccess, payload: response.data});
  } catch (error) {
    yield put({type: ActionTypes.fetchProductsFailure, error});
  }
}

function* rootSaga() {
  yield all([takeLatest(ActionTypes.fetchProductsSuccess, fetchProducts)]);
}

export default rootSaga;
