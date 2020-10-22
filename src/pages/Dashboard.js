import React, { Component } from 'react';
import { connect } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import BackpanelNav from '../components/BackpanelNav';
import Copyright from '../components/Copyright';

import { fetchPages } from '../actions';


class Dashboard extends Component {

    componentDidMount() {
        const { fetchPages } = this.props;
        fetchPages();
    }

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
}

const mapDispatchToProps = (dispatch) => ({
    fetchPages: () => dispatch(fetchPages())
})

export default connect(null, mapDispatchToProps)(Dashboard);
