import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import BackpanelNav from '../components/BackpanelNav';

import { fetchPages } from '../actions';
import PagesTableContainer from '../components/pages/PagesTableContainer';
import ErrorModal from '../components/modals/ErrorModal';


class Pages extends Component {

    componentDidMount() {
        const { fetchPages } = this.props;
        fetchPages();
    }

    render() {
        return (
            <div className={'root-container'}>
                <CssBaseline />
                <BackpanelNav title={'Pages'}/>

                <main className={'main-content'}>
                    <div className={'bar-spacer'} />
                    <Container maxWidth={'lg'} className={'main-container'}>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
                                <Paper className={'paper collections-table-container'}>
                                    <PagesTableContainer />
                                </Paper>
                            </Grid>
                        </Grid>

                    </Container>

                    <Link to={'/add'}>
                        <Fab className={'add-icon'} color={'primary'} aria-label={'add'}>
                            <AddIcon />
                        </Fab>
                    </Link>
                </main>

                <ErrorModal />

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPages: () => dispatch(fetchPages())
})

export default connect(null, mapDispatchToProps)(Pages);
