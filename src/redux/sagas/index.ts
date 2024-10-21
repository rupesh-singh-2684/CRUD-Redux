import { takeLatest, put, call } from 'redux-saga/effects';
import { CREATE_DATA_REQUEST, createDataSuccess, DELETE_DATA_REQUEST, deleteDataSuccess, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, UPDATE_DATA_REQUEST, updateDataSuccess } from '../action';
import data from '../../api';
import { act } from 'react';
import { resolver } from '../../../metro.config';

// // Simulate API calls
// // const fetchDataFromAPI = () => {
// //   return new Promise((resolve) =>
// //     setTimeout(() => resolve([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]), 1000)
// //   );
// // };

// const updateDataAPI = (item:any) => {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(item), 1000)
//   );
// };


// const updateItemInArray = (array:any, updatedItem:any) =>
//   array.map((item:any) => (item.id === updatedItem.id ? updatedItem : item));

const createdUser = (item:any) =>{
const user = {...item, id: Date.now()}
data.push(user)
}

const deleteUser = (data:any,payload:any) =>{
  console.log('id........',data)
   const user = data.filter(data=>data.id !== payload.item.id)
 return(user)
}

function* fetchDataSaga() {
  try {
    console.log('hello',data)
   yield put({type:'FETCH_DATA_SUCCESS',payload:data});

  } catch (error) {
  }
}

function* createDataSaga(action:any) {
  try {
    console.log("payload..." , action.payload)
    const createdItem = yield call( createdUser, action.payload);
    yield put(createDataSuccess(createdItem));
  } catch (error) {
   
  }
}


// function* updateDataSaga(action:any) {
//   try {
//     const updatedItem = yield call(updateDataAPI, action.payload);
//     yield put(updateDataSuccess(updatedItem));
//   } catch (error) {
   
//   }
// }


function* deleteDataSaga(action:any) {
  try {
    console.log("payload..." , action.payload)
    const deleteItem = yield call( deleteUser ,data, action.payload);
    yield put(deleteDataSuccess(deleteItem));
  } catch (error) {
   
  }
}

function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}

// function* watchUpdateData() {
//   yield takeLatest(UPDATE_DATA_REQUEST, updateDataSaga);
// }
function* watchCreatedData() {
  yield takeLatest(CREATE_DATA_REQUEST, createDataSaga);
}
function* watchDeleteData() {
  yield takeLatest(DELETE_DATA_REQUEST, deleteDataSaga);
}


export default {
  watchFetchData,
  // watchUpdateData,
  watchCreatedData,
  watchDeleteData,
};