import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import BackpanelNav from '../components/BackpanelNav';
import Copyright from '../components/Copyright';


class Dashboard extends Component {

    render() {
        return (
            <div className={'root-container'}>
                <CssBaseline />
                <BackpanelNav title={'Dashboard'}/>

                <main className={'main-content'}>
                    <div className={'bar-spacer'} />
                    <Container maxWidth="lg" className={'main-container'}>

                        <Box pt={4}>
                            <Copyright />
                        </Box>
                    </Container>
                </main>

            </div>
        )
    }
};

export default Dashboard;
