import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const checkType = (id) => {
        if (id === '0') {
            return 'Menu'
        } else if (id === '1') {
            return 'Events'
        } else {
            return 'Content'
        }
    }

    return (
        <div className={'my-5'}>
            <h3 className={'text-center'}>Please confirm your entries</h3>

            <div key={'title'} className={'my-3'}>
                <label className={'text-muted'}>Title</label>
                <div>{formValues.title}</div>
            </div>

            <div key={'description'} className={'my-3'}>
                <label className={'text-muted'}>Description</label>
                <div>{formValues.description}</div>
            </div>

            <div key={'active'} className={'my-3'}>
                <label className={'text-muted'}>Is the Page active?</label>
                <div>{formValues.isActive ? 'Yes' : 'No'}</div>
            </div>

            <div key={'type'} className={'my-3'}>
                <label className={'text-muted'}>Type</label>
                <div>{checkType(formValues.type)}</div>
            </div>

            <button className={'btn btn-info float-right my-3'} onClick={() => submitSurvey(formValues, history)}>Create Page</button>
            <button className={'btn btn-warning float-right mx-2 my-3'} onClick={ onCancel }>Back</button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues:  state.form.AddPageForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
