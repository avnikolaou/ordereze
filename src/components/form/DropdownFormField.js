import React from 'react';

export default ({ input, label, meta: { touched, error }, children }) => (
    <div className={'form-group'}>
        <label>{label}</label>
        <div>
            <select {...input}>
                {children}
            </select>
        </div>
        {touched && error && <span className={'text-danger'}>{error}</span>}
    </div>
)
