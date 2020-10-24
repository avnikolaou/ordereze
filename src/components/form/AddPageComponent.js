import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import AddPageForm from './AddPageForm';
import AddPageFromReview from './AddPageFromReview';

class AddPageComponent extends Component {
    state = { showAddPageFormReview: false };

    renderContent() {
        if (this.state.showAddPageFormReview) {
            return <AddPageFromReview onCancel ={() => this.setState({ showAddPageFormReview: false })}/>;
        }
        return <AddPageForm onFormSubmit={() => this.setState({ showAddPageFormReview: true })} />;
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
