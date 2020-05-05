import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBContainer, MDBTooltip} from "mdbreact";

export default class GridPanel extends React.Component {
    constructor(props) {
        super(props);
        this.showCreateDialog = this.showCreateDialog.bind(this);
        this.showEditDialog = this.showEditDialog.bind(this);
        this.showDeleteDialog = this.showDeleteDialog.bind(this);
    }

    showCreateDialog() {
        this.props.showDialog("Create card");
    }

    showEditDialog() {
        this.props.showDialog("Edit card");
    }

    showDeleteDialog() {
        this.props.showDeleteDialog();
    }

    render() {
        return (
            <MDBCard narrow border="primary">
                <MDBCardHeader
                    className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                    <div>
                        <MDBTooltip placement="right">
                            <MDBBtn outline rounded size="sm" color="white" className="px-2"
                                    onClick={this.showCreateDialog}>
                                <i className="fas fa-plus mt-0"></i>
                            </MDBBtn>
                            <div>Add new card</div>
                        </MDBTooltip>
                        <MDBTooltip placement="right">
                            <MDBBtn outline rounded size="sm" color="white" className="px-2"
                                    onClick={this.showEditDialog}>
                                <i className="fas fa-pencil-alt mt-0"></i>
                            </MDBBtn>
                            <div>Edit card</div>
                        </MDBTooltip>
                        <MDBTooltip placement="right">
                            <MDBBtn outline rounded size="sm" color="white" className="px-2"
                                    onClick={this.showDeleteDialog}>
                                <i className="fas fa-times mt-0"></i>
                            </MDBBtn>
                            <div>Delete card</div>
                        </MDBTooltip>
                    </div>
                    <div>
                        {/*{this.props.pager}*/}
                    </div>
                </MDBCardHeader>
                <MDBCardBody cascade>
                    {this.props.table}
                </MDBCardBody>
            </MDBCard>
        );
    }
}
