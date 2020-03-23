import {createStore, combineReducers} from 'redux';
import reducer from './reducer';
import carReducer from './carReducer';

const rootReducer = combineReducers({
    reducer,
    carReducer,
})

export default createStore(rootReducer);
