import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import investmentEquityReducer from './reducer/equity';


const config = {
	key: 'root',
	storage,
	whitelist: [
		"investmentEquity"
	],
};

const rootReducer = combineReducers({
	investmentEquity: investmentEquityReducer,
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;