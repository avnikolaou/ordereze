import React from 'react';

export default ({ input, label, meta: { touched, error } }) => (
    <div className={'form-group'}>
        <label className={'preview-label'}>{label}</label>
        <div>
            <input type={'checkbox'} checked={input.value} {...input}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)
