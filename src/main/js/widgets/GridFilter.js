import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn, MDBRow, MDBCol, MDBInput
} from "mdbreact";

const startFilter = {
    serialNumber: "",
    status: "",
    authorization: "",
    phoneNumber: ""
};

export default class GridFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = startFilter;
        this.handleInput = this.handleInput.bind(this);
        this.cleanFields = this.cleanFields.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
    }

    handleInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.id;

        this.setState({
            [name]: value
        });
    }

    cleanFields() {
        for (let i in this.state) {
            this.setState({
                [i]: ""
            });
        }
        this.props.applyFilter(startFilter);
    }

    applyFilter() {
        this.props.applyFilter(this.state);
    }
    render() {
        return (
            <MDBCard narrow border="primary">
                <MDBCardHeader transparent border="primary" className="text-left">
                    <span className="filter-header">Filter</span>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md="6">
                            <form>
                                <div className="grey-text">
                                    <MDBInput
                                        id="serialNumber"
                                        className="filter-input"
                                        label="Serial number"
                                        icon="filter"
                                        group
                                        type="number"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={this.handleInput}
                                        value={this.state.serialNumber}
                                    />
                                    <MDBInput
                                        id="status"
                                        className="filter-input"
                                        label="Status"
                                        icon="filter"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={this.handleInput}
                                        value={this.state.status}
                                    />
                                </div>
                            </form>
                        </MDBCol>
                        <MDBCol md="6">
                            <form>
                                <div className="grey-text">
                                    <MDBInput
                                        id="authorization"
                                        className="filter-input"
                                        label="Auth date"
                                        icon="filter"
                                        group
                                        type="date"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={this.handleInput}
                                        value={this.state.authorization}
                                    />
                                    <MDBInput
                                        id="phoneNumber"
                                        className="filter-input"
                                        label="Phone number"
                                        icon="filter"
                                        group
                                        type="phone"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={this.handleInput}
                                        value={this.state.phoneNumber}
                                    />
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
                <MDBCardFooter className="text-left row">
                    <MDBBtn outline color="primary" size="sm" onClick={this.applyFilter}>Apply</MDBBtn>
                    <MDBBtn outline color="primary" size="sm" onClick={this.cleanFields}>Deny</MDBBtn>
                </MDBCardFooter>
            </MDBCard>
        );
    }
}