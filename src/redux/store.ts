import { applyMiddleware, createStore } from "redux";
import Reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export default store;