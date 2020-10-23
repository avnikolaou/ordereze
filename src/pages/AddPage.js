import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'

import BackpanelNav from '../components/BackpanelNav';
import Copyright from '../components/Copyright';

class AddPage extends Component {

    handleClick = () => {

    };

    render() {

        return (
            <div className={'root-container'}>
                <CssBaseline />
                <BackpanelNav title={'Add Page'}/>

                <main className={'main-content'}>
                    <div className={'bar-spacer'} />
                    <Container maxWidth="lg" className={'main-container'}>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
                                <Paper className={"paper collections-table-container"}>
                                    <div className={''}><h4>Add Brand</h4></div>

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

export default connect()(AddPage);
