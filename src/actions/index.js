import axios from 'axios';
import {
    EDIT_PAGE_START,
    EDIT_PAGE_SUCCESS,
    EDIT_PAGE_FAILURE,
    FETCH_PAGES_FAILURE,
    FETCH_PAGES_START,
    FETCH_PAGES_SUCCESS,
    SET_EDIT_PAGE,
    TOGGLE_DASHBOARD_DRAWER,
    TOGGLE_ERROR_MODAL
} from './types';

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
export const createPage = (values) => async dispatch => {
    try {
        const res = await axios.post('https://pagesmanagement.azurewebsites.net/api/ResponsivePages', values);
        return res.status;
    } catch (e) {
        dispatch(toggleErrorModal());
    }
};

// Delete page
export const deletePage = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`https://pagesmanagement.azurewebsites.net/api/ResponsivePages/${id}`);
        if (res.status === 200) {
            const pages = await axios.get('https://pagesmanagement.azurewebsites.net/api/ResponsivePages');
            dispatch(fetchPages(pages.data));
        }
    } catch (e) {
        dispatch(toggleErrorModal());
    }
};

// Set Edit Page
export const setEditPage = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`https://pagesmanagement.azurewebsites.net/api/ResponsivePages/${id}`);
        dispatch({ type: SET_EDIT_PAGE, payload: res.data})
    } catch (e) {

    }
}

// Edit Page
export const editPageStart = () => ({
    type: EDIT_PAGE_START
});

export const editPageSuccess = (page) => ({
    type: EDIT_PAGE_SUCCESS, payload: page
});

export const editPageFailure = (errorMessage) => ({
    type: EDIT_PAGE_FAILURE, payload: errorMessage
});

export const editPage = (data, id) => async (dispatch) => {
    dispatch(editPageStart());
    try {
        const res = await axios.put(`https://pagesmanagement.azurewebsites.net/api/ResponsivePages/${id}`, data);
        if (res.status === 200) {
            dispatch(editPageSuccess(res.data));
            return res.status;
        }
    } catch (e) {
        dispatch(toggleErrorModal());
    }
}

export const toggleErrorModal = () => ({
    type: TOGGLE_ERROR_MODAL
});
