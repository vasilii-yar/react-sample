import React from 'react';
import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalFooter,
    MDBModalHeader,
    MDBRow
} from 'mdbreact';

const  INIT_STATE = {
    serialNum: '',
    currencyLogo: '',
    status: '',
    authorization: '',
    phoneNumber: '',
    deadline: '',
    subjectName: '',
    inventoryNum: ''
}
export default class CardEditDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = INIT_STATE;
        this.toggle = this.toggle.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.onShow = this.onShow.bind(this);
    }

    onShow() {
        const dialogData = this.props.dialogData;
        this.setState(INIT_STATE)
        if (dialogData && this.props.header === "Edit card") {
            this.setState({
                serialNum: dialogData.serialNum,
                currencyLogo: dialogData.currencyLogo,
                status: dialogData.status,
                authorization: dialogData.authorization,
                phoneNumber: dialogData.phoneNumber,
                deadline: dialogData.deadline,
                subjectName: dialogData.subjectName,
                inventoryNum: dialogData.inventoryNum
            });
        }
    }

    toggle() {
        this.props.toggle();
    }

    saveChanges() {
        let header = this.props.header;
        if (header === "Edit card") {
            this.props.saveChangedCard(this.state);
        } else {
            this.props.addCard(this.state);
        }
        this.toggle();
    }

    handleInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.id;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBModal isOpen={this.props.isOpen} toggle={this.toggle} showModal={this.onShow} fullHeight
                          position="top">
                    <MDBModalHeader>{this.props.header}</MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow>
                            <MDBCol md="6">
                                <form>
                                    <MDBInput
                                        id="serialNum"
                                        className="filter-input"
                                        label="Serial number"
                                        icon="hashtag"
                                        group
                                        type="number"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={this.state.serialNum}
                                        onChange={this.handleInput}
                                    />
                                    <MDBInput
                                        id="currencyLogo"
                                        className="filter-input"
                                        label="Currency logo"
                                        icon="ruble-sign"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={this.state.currencyLogo}
                                        onChange={this.handleInput}
                                    />
                                    <MDBInput
                                        id="status"
                                        className="filter-input"
                                        label="Status"
                                        icon="chart-bar"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={this.state.status}
                                        onChange={this.handleInput}
                                    />
                                    <MDBInput
                                        id="authorization"
                                        className="filter-input"
                                        label="Authorization date"
                                        icon="calendar-alt"
                                        group
                                        type="date"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={this.state.authorization}
                                        onChange={this.handleInput}
                                    />

                                </form>
                            </MDBCol>
                            <MDBCol md="6">
                                <form>
                                    <MDBInput
                                        id="phoneNumber"
                                        className="filter-input"
                                        label="Phone number"
                                        icon="mobile-alt"
                                        group
                                        type="phone"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={this.state.phoneNumber}
                                        onChange={this.handleInput}
                                    />
                                    <MDBInput
                                        id="deadline"
                                        className="filter-input"
                                        label="Deadline"
                                        icon="calendar-alt"
                                        group
                                        type="date"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={this.state.deadline}
                                        onChange={this.handleInput}
                                    />
                                    <MDBInput
                                        id="subjectName"
                                        className="filter-input"
                                        label="Subject name"
                                        icon="user-secret"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={this.state.subjectName}
                                        onChange={this.handleInput}
                                    />
                                    <MDBInput
                                        id="inventoryNum"
                                        className="filter-input"
                                        label="Inventory number"
                                        icon="tools"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={this.state.inventoryNum}
                                        onChange={this.handleInput}
                                    />
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick={this.saveChanges}>Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}