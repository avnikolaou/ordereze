import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import 'react-widgets/lib/scss/react-widgets.scss';
import { Field, reduxForm } from 'redux-form';

import FormField from './InputFormField';
import fields from './fields';
import typeOptions from './typeOptions';
import CheckBoxFormField from './CheckBoxFormField';
import DropdownFormField from './DropdownFormField';

class EditPageForm extends Component  {

    render() {

        return (
            <div className={"my-5"}>
                <form onSubmit={this.props.handleSubmit(this.props.onEditFormSubmit)}>

                    <Field key={'title'} component={FormField} text={'text'} label={'Title'} name={'title'} />

                    <Field key={'description'} component={FormField} text={'text'} label={'Description'} name={'description'}/>

                    <Field key={'isActive'} component={CheckBoxFormField} label={'Is the page active?'} name={'isActive'} />

                    <Field key={'type'} component={DropdownFormField} label={'Type (Choose one...)'} name={'type'}>
                        <option></option>
                        { typeOptions.map((option,index) => <option key={`option-${index}`} value={option.value}>{option.option}</option>) }
                    </Field>


                    <div className={'form-group'}>
                        <button className={'btn btn-info float-right'} type={'submit'}>Preview</button>
                        <Link to={'/'} className={'btn btn-danger float-right mx-2'}>Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};

    _.each(fields, ({ name, errorMessage }) => {
        if (!values[name]) {
            errors[name] = errorMessage;
        }
    });

    return errors;
}

function mapStateToProps(state) {
    return {
        initialValues: state.pages.editPage
    };
}

const mapDispatchToProps = (dispatch) => ({

});

EditPageForm = reduxForm({
    validate,
    form: 'EditPageForm',
})(EditPageForm)

export default EditPageForm = connect(mapStateToProps, mapDispatchToProps)(EditPageForm)
