import React, { Component, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



class NavbarClass extends Component {

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    closeNavbar() {
        this.setState({
            isOpen: false
        });
    }

    handleClickOutside(event) {
        const t = event.target;
        if (this.state.isOpen && !t.classList.contains('navbar-toggler')) {
            this.closeNavbar();
        }
    }

    render() {

        return (
            <Router>
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Cameron Perrin</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to="/projects">Projects</Link>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                        </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Option 1
                </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </Router>
        )
    }
}
export default NavbarClass;