import {put, takeLatest, all} from 'redux-saga/effects';
import axios from 'axios';

function* fetchProducts() {
  try {
    const response = yield axios.get('https://fakestoreapi.com/products');
    yield put({type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data});
  } catch (error) {
    yield put({type: 'FETCH_PRODUCTS_FAILURE', error});
  }
}

function* rootSaga() {
  yield all([takeLatest('FETCH_PRODUCTS', fetchProducts)]);
}

export default rootSaga;
