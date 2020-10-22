import { combineReducers } from 'redux';
import backPanelReducer from './backPanelReducer';
import pagesReducer from './pagesReducer';

export default combineReducers({
    backPanel: backPanelReducer,
    pages: pagesReducer
});
