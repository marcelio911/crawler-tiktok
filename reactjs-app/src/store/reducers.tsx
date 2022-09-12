import { combineReducers } from 'redux';
import AppReducer from '../ducks/App/duck';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const rootPersistConfig = {
  timeout: 0,
  key: 'root',
  storage,
  whitelist: [
    'navigation',
    'AppReducer',
  ],
  blacklist: [],
};
const rootReducer = combineReducers({
  AppReducer,  
});

export type RootState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line import/no-anonymous-default-export
export default { rootReducer, rootPersistConfig };
