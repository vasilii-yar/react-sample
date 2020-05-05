import React from 'react';
import {MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";

export default class CardDeleteDialog extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }

    toggle() {
        this.props.toggle();
    }

    deleteCard() {
        this.props.deleteCard();
        this.props.toggle();
    }

    render() {
        return (
            <MDBContainer>
                <MDBModal isOpen={this.props.isOpen} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle} className="text-danger">Delete Card?</MDBModalHeader>
                    <MDBModalBody>
                        <span className="h4 text-warning">Do you really want to do this?</span>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick={this.deleteCard}>Delete</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}