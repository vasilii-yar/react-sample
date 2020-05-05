import React from "react";
import {MDBBtn, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBJumbotron, MDBRow} from "mdbreact";
import {useHistory} from "react-router-dom";

export default class Stub extends React.Component{
    constructor(props) {
        super(props);
        this.goToCards = this.goToCards.bind(this);
    }

    goToCards() {
        window.location.href = "/view";
    }
    render() {
        return(
            <MDBContainer className="mt-5 text-center">
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron style={{ padding: 0 }}>
                            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
                                <MDBCol className="py-5">
                                    <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Добро пожаловать в тестовое приложение!</MDBCardTitle>
                                    <p className="mx-5 mb-5">Интерфейс этого приложения создан с использованием замечательной библиотеки React.js.
                                        Для обработки пользовательских запросов, и работе с базой данных, используется Spring Boot.</p>
                                    <MDBBtn outline color="white" className="mb-5" onClick={this.goToCards}><MDBIcon icon="clone" className="mr-2"></MDBIcon> Посмотреть примеры! </MDBBtn>
                                </MDBCol>
                            </MDBCol>
                        </MDBJumbotron>
                    </MDBCol>
            </MDBRow>
            </MDBContainer>
        );
    }
}