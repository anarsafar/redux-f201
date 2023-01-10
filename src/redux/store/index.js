import { combineReducers, createStore } from "redux";
import counterReducer from "../reducers/counter.reducer";

const reducers = combineReducers({
  count: counterReducer,
});

const store = createStore(reducers);

export default store;
