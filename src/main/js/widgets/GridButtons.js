import React from "react";
import {MDBBtn, MDBBtnGroup, MDBContainer} from "mdbreact";

export default class GridButtons extends React.Component {

    render() {
        return (
            <MDBBtnGroup className="mr-2">
                <MDBBtn outline color="primary" size="sm">Создать</MDBBtn>
                <MDBBtn outline color="primary" size="sm">Изменить</MDBBtn>
                <MDBBtn outline color="primary" color="primary" size="sm">Удалить</MDBBtn>
            </MDBBtnGroup>
        );
    }

}