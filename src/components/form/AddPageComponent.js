import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import AddPageForm from './AddPageForm';
import AddPageFromReview from './AddPageFromReview';

class AddPageComponent extends Component {
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return <AddPageFromReview onCancel ={() => this.setState({ showFormReview: false })}/>;
        }
        return <AddPageForm onFormSubmit={() => this.setState({ showFormReview: true })} />;
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
    form: 'AddPageForm'
})(AddPageComponent);
