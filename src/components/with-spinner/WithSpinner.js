import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './WithSpinner_SC';

const WithSpinner = (WrappedComponent) => {
    return ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
};

export default WithSpinner
