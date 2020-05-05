import React from "react";
import {
    MDBBtn,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBFormInline,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem, MDBTooltip
} from "mdbreact";
import {BrowserRouter as Router} from 'react-router-dom';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        };
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.goHome = this.goHome.bind(this);
    }

    toggleCollapse() {
        this.setState({isOpen: !this.state.isOpen});
    }

    goHome() {
        window.location.href = "/";
    }


    render() {
        return (
            <Router>
                <MDBNavbar color="info-color" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">React menu</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse}/>
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <span className="mr-2">Main menu</span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem href="/view">Cards List</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Submenu 2</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Submenu 3</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Submenu 4</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <span className="mr-2">Reports</span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem href="/stub">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <span className="mr-2">Settings</span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem href="/stub">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <span className="mr-2">Administrating</span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem href="/stub">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <span className="mr-2">Info</span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem href="/stub">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="/stub">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBTooltip placement="left">
                                <MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={this.goHome}>
                                    <i className="fas fa-home mt-0"></i>
                                </MDBBtn>
                                <div>Go Home!</div>
                            </MDBTooltip>
                            <MDBNavItem>
                                <MDBFormInline waves>
                                    <div className="md-form my-0">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                               aria-label="Search"/>
                                    </div>
                                </MDBFormInline>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        );
    }
}