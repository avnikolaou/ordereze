import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import EditPageForm from './EditPageForm';
import EditPageFormReview from './EditPageFormReview';

class EditPageComponent extends Component {
    state = { showEditPageFormReview: false };

    renderContent() {
        if (this.state.showEditPageFormReview) {
            return <EditPageFormReview onCancel ={() => this.setState({ showEditPageFormReview: false })}/>;
        }
        return <EditPageForm onEditFormSubmit={() => this.setState({ showEditPageFormReview: true })} />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'EditPageForm'
})(EditPageComponent);
