import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { createPage } from '../../../actions';

const PageFormReview = ({ onCancel, formValues, createPage, history }) => {
    const checkType = (id) => {
        if (id === '0') {
            return 'Menu'
        } else if (id === '1') {
            return 'Events'
        } else {
            return 'Content'
        }
    }

    const handleSubmit = async (data) => {

        let date = new Date();

        const dataToSend = {
            ...data,
            "publishedOn": date
        }

        await createPage(dataToSend);
        history.push('/')
    }

    return (
        <div className={'my-5'}>
            <h4 className={'text-center'}>Please confirm your entries</h4>

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

            <button className={'btn btn-info float-right my-3'} onClick={() => handleSubmit(formValues)}>Create Page</button>
            <button className={'btn btn-warning float-right mx-2 my-3'} onClick={ onCancel }>Back</button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues:  state.form.AddPageForm.values };
}

const mapDispatchToProps = (dispatch) => ({
    createPage: (page) => dispatch(createPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageFormReview));
