import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import BackpanelNav from '../components/BackpanelNav';
import EditPageComponent from '../components/form/EditForm/EditPageComponent';

const EditPages = () => ({

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
                    </Container>
                </main>

            </div>
        )
    }
})

export default EditPages;
