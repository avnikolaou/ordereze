import { combineReducers } from 'redux';
import backPanelReducer from './backPanelReducer';

export default combineReducers({
    backPanel: backPanelReducer
});
