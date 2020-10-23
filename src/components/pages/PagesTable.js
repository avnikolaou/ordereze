import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import Title from '../Title';
import { deletePage } from '../../actions';

class PagesTable extends Component {

    handleDelete = (e) => {
        this.props.deletePage(e.currentTarget.value);
    };

    checkType = (id) => {
        if (id === 0) {
            return 'Menu'
        } else if (id === 1) {
            return 'Events'
        } else {
            return 'Content'
        }
    }

    render() {
        const { pages } = this.props;
        return (
            <div>
                <React.Fragment>
                    <div className={"collections__header"}><Title>Pages</Title></div>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Is Active</TableCell>
                                <TableCell>Published On</TableCell>
                                <TableCell />
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pages.map((page, index) => (
                                <TableRow key={index}>
                                    <TableCell>{page.id}</TableCell>
                                    <TableCell>{page.title}</TableCell>
                                    <TableCell>{page.description}</TableCell>
                                    <TableCell>{this.checkType(page.type)}</TableCell>
                                    <TableCell><Checkbox checked={page.isActive} disabled={true} /></TableCell>
                                    <TableCell>{`${page.publishedOn.split('T')[0]} ${(page.publishedOn.split('T')[1]).split('.')[0]}`}</TableCell>
                                    <TableCell>
                                        <Button value={page.id} variant={'contained'} color={'primary'} size={'small'}>Edit</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button value={page.id} variant={'contained'} color={'secondary'} size={'small'} onClick={this.handleDelete} >Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </React.Fragment>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pages: state.pages.pages
    }
}

const mapDispatchToProps = (dispatch) => ({
    deletePage: (deleteId) => dispatch(deletePage(deleteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PagesTable);
