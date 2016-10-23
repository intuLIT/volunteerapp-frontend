import React from 'react';
import {hashHistory} from 'react-router';
import {Navbar, Nav, MenuItem, NavItem, NavDropdown} from 'react-bootstrap';

class MainNavbar extends React.Component {
    handleNavbarClick(eventKey){
        console.log(eventKey);
        hashHistory.push(eventKey);
    }
    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Vlntr</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav onSelect={this.handleNavbarClick}>
                        <NavItem eventKey={'/'} href="#">Home</NavItem>
                        <NavItem eventKey={'test'} href="#">Test #1</NavItem>
                        <NavItem eventKey={'create'} href="#">Create Event</NavItem>
                        <NavDropdown eventKey={3} title="Events" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Near Me</MenuItem>
                            <MenuItem eventKey={3.2}>Far Away</MenuItem>
                            <MenuItem eventKey={3.3}>Really Far Away</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Literally Mars</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight onSelect={this.handleNavbarClick}>
                        <NavItem eventKey={'login'} href="#">My Account</NavItem>
                        <NavItem eventKey={'signup'} href="#">Signup</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MainNavbar