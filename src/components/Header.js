import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';


class Header extends Component {

    constructor(props) {
    super(props);

    this.state = {}

    }

    render() {
        return (
            <Navbar className="justify-content-center fixed-top" style={{backgroundColor: '#F1E1B8', fontFamily: 'Teko'}}>
                <Nav>
                    <NavItem>
                        <NavLink>EXPERIENCE</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>CERTIFICATIONS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>PAST PROJECTS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>ABOUT</NavLink>
                    </NavItem><NavItem>
                        <NavLink>CONTACT</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;