import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import investmentEquityReducer from './reducer/equity';
import articleReducer from './reducer/article';


const config = {
	key: 'root',
	storage,
	whitelist: [
		"investmentEquity",
		"article"
	],
};

const rootReducer = combineReducers({
	investmentEquity: investmentEquityReducer,
	article: articleReducer
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;