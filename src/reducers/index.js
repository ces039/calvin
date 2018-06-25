import { combineReducers } from 'redux';
import PhotoReducer from './reducer_photo';

const rootReducer = combineReducers({
  photo: PhotoReducer
});

export default rootReducer;
