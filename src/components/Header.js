import React, { Component } from 'react';
import { Navbar, Nav, NavLink, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import TextLoop from 'react-text-loop';
import { baseUrl } from '../shared/baseUrl';


class Header extends Component {

    render() {
        return (
            <div id="navbar" className="d-flex p-0">
                <span style={{width: '10vw', marginTop: '10vh'}}><h3 style={{fontFamily: 'Pacifico'}}><TextLoop
                    children={['Design', 'Support', 'Passion', 'Initiative']}
                    /></h3>
                <h3 style={{fontFamily: 'Teko'}}>by Minh Tran</h3></span>
                <Navbar light className="sticky-top mt-5 navbar-expand-md" style={{ fontFamily: 'Teko' }}>
                    <Nav className="ml-5">
                        <NavLink>EXPERIENCE</NavLink>
                        <NavLink><Link to='/certifications'>CERTIFICATIONS</Link></NavLink>
                        <NavLink>PAST PROJECTS</NavLink>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header;