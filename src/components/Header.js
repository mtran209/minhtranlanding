import React, { Component } from 'react';
import { Navbar, Nav, NavLink, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import TextLoop from 'react-text-loop';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return (
            <Navbar className="sticky-top py-0 justify-content-center align-middle" style={{ backgroundColor: '#F1E1B8', fontFamily: 'Teko' }}>
                <Nav className="mr-5 w-60">
                    <NavbarBrand className="mt-2" style={{ fontFamily: 'Pacifico' }}>
                        <TextLoop
                            children={[`Apps`, 'Design', 'Creativity', 'Innovation']}
                        />
                        <p>by Minh Tran</p>
                    </NavbarBrand>
                </Nav>
                <Nav className="ml-5">
                    <NavLink>EXPERIENCE</NavLink>
                    <NavLink><Link to='/certifications'>CERTIFICATIONS</Link></NavLink>
                    <NavLink>PAST PROJECTS</NavLink>
                    <NavLink>ABOUT</NavLink>
                    <NavLink>CONTACT</NavLink>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;