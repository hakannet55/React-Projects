import { createStore } from 'redux'
import {currencyReducer} from './reducers/currencyReducer.js';

const appStore=createStore(currencyReducer);

export default appStore;