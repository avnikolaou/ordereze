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

class PagesTable extends Component {

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
                                    <TableCell>{page.type}</TableCell>
                                    <TableCell><Checkbox checked={page.isActive} disabled={true} /></TableCell>
                                    <TableCell>{`${page.publishedOn.split('T')[0]}  ${(page.publishedOn.split('T')[1]).split('.')[0]}`}</TableCell>
                                    <TableCell>
                                        <Button value={page.id} variant={'contained'} color={'primary'} size={'sm'}>Edit</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button value={page.id} variant={'contained'} color={'secondary'} size={'sm'} >Delete</Button>
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

});

export default connect(mapStateToProps, mapDispatchToProps)(PagesTable);
