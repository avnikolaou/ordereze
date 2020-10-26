import { combineReducers } from 'redux';
import backPanelReducer from './backPanelReducer';
import pagesReducer from './pagesReducer';
import errorModalReducer from './errorModalReducer'
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    backPanel: backPanelReducer,
    pages: pagesReducer,
    form: reduxForm,
    modal: errorModalReducer
});
