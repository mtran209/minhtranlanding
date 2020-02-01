import React, { Component } from 'react';
import { Navbar, Nav, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <div id="navbar" className="d-flex p-0">
                <Navbar style={{ fontFamily: 'Teko' }}>
                    <Nav className="ml-3">
                        <NavLink><Link to='/passion'>MY PASSION</Link></NavLink>
                        <NavLink><Link to='/experience'>EXPERIENCE</Link></NavLink>
                        <NavLink><Link to='/certifications'>CERTIFICATIONS</Link></NavLink>
                        <NavLink><Link to='/pastprojects'>PAST PROJECTS</Link></NavLink>
                    </Nav>
                </Navbar>
                
            </div>
        )
    }
}

export default Header;