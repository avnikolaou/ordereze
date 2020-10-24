import React, { Component } from 'react';
import { connect } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import BackpanelNav from '../components/BackpanelNav';
import Copyright from '../components/Copyright';
import EditPageComponent from '../components/form/EditPageComponent';


class EditPages extends Component {

    render() {
        return (
            <div className={'root-container'}>
                <CssBaseline />
                <BackpanelNav title={'Edit Page'}/>

                <main className={'main-content'}>
                    <div className={'bar-spacer'} />
                    <Container maxWidth={'lg'} className={'main-container'}>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
                                <Paper className={'paper collections-table-container'}>
                                    <EditPageComponent />
                                </Paper>
                            </Grid>
                        </Grid>

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

})

export default connect(null, mapDispatchToProps)(EditPages);
