import axios from 'axios';
import { FETCH_PAGES_FAILURE, FETCH_PAGES_START, FETCH_PAGES_SUCCESS, TOGGLE_DASHBOARD_DRAWER } from './types';

export const toggleDashboardDrawer = () => ({
    type: TOGGLE_DASHBOARD_DRAWER
});


// Fetch pages
export const fetchPagesStart = () => ({
    type: FETCH_PAGES_START
});

export const fetchPagesSuccess = (pages) => ({
    type: FETCH_PAGES_SUCCESS, payload: pages
});

export const fetchPagesFailure = (errorMessage) => ({
    type: FETCH_PAGES_FAILURE, payload: errorMessage
});

export const fetchPages = () => async (dispatch) => {
    dispatch(fetchPagesStart());
    try {
        const pages = await axios.get('https://pagesmanagement.azurewebsites.net/api/ResponsivePages');
        dispatch(fetchPagesSuccess(pages.data));
    } catch (e) {
        dispatch(fetchPagesFailure(e));
    }
}

// Create page
export const createPage = (values, history) => async dispatch => {
    try {
        await axios.post('https://pagesmanagement.azurewebsites.net/api/ResponsivePages', values);
    } catch (e) {
        console.log(e);
    }
};
