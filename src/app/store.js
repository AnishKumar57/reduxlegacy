// Store is being created to hold all the state.


// import create store
import {createStore} from 'redux';
import allReducers from '../reducers';

// import redux dev tool extensions for dev tool for chrome
// it provide us many utilities as a react developer

import { composeWithDevTools } from 'redux-devtools-extension';

// createStore function to create the store
const store = createStore(allReducers, composeWithDevTools());


export default store;