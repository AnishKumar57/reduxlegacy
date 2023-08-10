// All Actions

import { combineReducers } from "redux";
import countReducer from "./counter";
import loggedReducer from "./isLogged";

const allReducers = combineReducers({
    counter: countReducer,
    isLogged: loggedReducer
});

export default allReducers;