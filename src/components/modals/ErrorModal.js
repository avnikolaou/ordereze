import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap'
import { toggleErrorModal} from '../../actions';

class DeleteBrandModal extends Component {

    // handleDelete = () => {
    //     this.props.deleteBrand(this.props.deleteId);
    // }

    // handleDelete = () => {
    //     this.props.deleteBrand(this.props.deleteId);
    // }

    render() {
        const { showErrorModal, toggleErrorModal } = this.props
        return (
            <Modal show={showErrorModal} onHide={toggleErrorModal} centered size={'md'}>
                <Modal.Header closeButton>
                    <Modal.Title>Oooops, something went wrong!</Modal.Title>
                </Modal.Header>
                <Modal.Body>It was not you, it was us! Please try again!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={toggleErrorModal} size={'sm'}>OK</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return { showErrorModal:  state.modal.showErrorModal };
}

const mapDispatchToProps = (dispatch) => ({
    toggleErrorModal: () => dispatch(toggleErrorModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBrandModal);
