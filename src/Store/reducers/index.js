import { combineReducers } from 'redux';
import mapdata from './map_reducer';
//import user from './user_reducer';

const rootReducer = combineReducers({
    mapdata
});

export default rootReducer;