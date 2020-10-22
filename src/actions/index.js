import axios from 'axios';
import { TOGGLE_DASHBOARD_DRAWER } from './types';

export const toggleDashboardDrawer = () => ({
    type: TOGGLE_DASHBOARD_DRAWER
});
