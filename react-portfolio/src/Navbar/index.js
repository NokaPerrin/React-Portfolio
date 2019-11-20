import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './Index.css';

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

        return(
                <div>
                    <Navbar color="light" light expand="md">
                        <Link id="websiteName" to="/">Cameron Perrin</Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className="navLink" to="/projects">Projects</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="navLink" to="/about">About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="navLink" to="/contact">Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
        )
    }
}
export default NavbarClass;