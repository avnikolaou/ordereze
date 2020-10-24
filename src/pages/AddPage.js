import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import BackpanelNav from '../components/BackpanelNav';
import AddPageComponent from '../components/form/AddForm/AddPageComponent';

const AddPage = () => ({

    render() {

        return (
            <div className={'root-container'}>
                <CssBaseline />
                <BackpanelNav title={'Add Page'}/>

                <main className={'main-content'}>
                    <div className={'bar-spacer'} />
                    <Container maxWidth="lg" className={'main-container'}>

                        <Grid container spacing={0}>
                            <Grid item xs={12} md={3}>

                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Paper className={"paper collections-table-container"}>
                                    <div className={"collections__header"}><h4>Add Page</h4></div>
                                    <AddPageComponent />
                                </Paper>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={3}>

                        </Grid>

                    </Container>
                </main>

            </div>
        )
    }
})

export default AddPage;
