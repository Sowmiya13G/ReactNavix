import {put, takeLatest} from 'redux-saga/effects';
import * as ActionTypes from '../actionTypes';
import axios from 'axios';

function* fetchProducts() {
  try {
    const response = yield call(axios.get, 'https://fakestoreapi.com/products');
    console.log('response: ', response);
    yield put({type: ActionTypes.fetchProductsSuccess, payload: response.data});
  } catch (error) {
    yield put({type: ActionTypes.fetchProductsFailure, error});
  }
}

function* increaseQuantitySaga(action) {
  try {
    yield put(ActionTypes.increaseQuantity(action.payload));
  } catch (error) {
    console.log('ERROR:', error);
  }
}

function* decreaseQuantitySaga(action) {
  try {
    yield put(ActionTypes.decreaseQuantity(action.payload));
  } catch (error) {
    console.log('ERROR:', error);
  }
}
function* productsSaga() {
  yield takeLatest(ActionTypes.fetchProducts, fetchProducts);
  yield takeLatest(ActionTypes.increaseQuantity, increaseQuantitySaga);
  yield takeLatest(ActionTypes.decreaseQuantity, decreaseQuantitySaga);
}

export default productsSaga;
