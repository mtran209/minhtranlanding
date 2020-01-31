import React, { Component } from 'react';
import { Navbar, Nav, NavLink, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import TextLoop from 'react-text-loop';
import { baseUrl } from '../shared/baseUrl';


class Header extends Component {

    render() {
        return (
            <div id="navbar" className="d-flex p-0">
                <Navbar style={{ fontFamily: 'Teko' }}>
                    <Nav className="mx-auto">
                        <NavLink>EXPERIENCE</NavLink>
                        <NavLink><Link to='/certifications'>CERTIFICATIONS</Link></NavLink>
                        <NavLink><Link to='/pastprojects'>PAST PROJECTS</Link></NavLink>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header;