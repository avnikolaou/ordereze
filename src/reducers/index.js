import { combineReducers } from 'redux';
import backPanelReducer from './backPanelReducer';
import pagesReducer from './pagesReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    backPanel: backPanelReducer,
    pages: pagesReducer,
    form: reduxForm
});
