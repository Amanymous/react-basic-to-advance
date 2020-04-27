// ye root reducer sari state ko apas ma combine karta ha
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user:userReducer
})