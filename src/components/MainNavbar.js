import React from 'react';
import {hashHistory} from 'react-router';
import {Navbar, Nav, MenuItem, NavItem, NavDropdown} from 'react-bootstrap';
import $ from 'jquery';

const MainNavbar = React.createClass({
    handleNavbarClick(eventKey){
        console.log(eventKey);
        hashHistory.push(eventKey);
    },
    isLoggedIn(){
        const user = this.props.user;
        return !$.isEmptyObject(user);
    },
    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a onClick={() => this.handleNavbarClick('/')}>Vlntr</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav onSelect={this.handleNavbarClick} activeKey={ this.props.path }>
                        <NavItem eventKey={'/create-org'} href="#">Create Organization</NavItem>
                        <NavItem eventKey={'/create-event'} href="#">Create Event</NavItem>
                        <NavDropdown eventKey={3} title="Events" id="basic-nav-dropdown">
                            <MenuItem eventKey={'/event-list'}>Near Me</MenuItem>
                            <MenuItem eventKey={3.2}>Far Away</MenuItem>
                            <MenuItem eventKey={3.3}>Really Far Away</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Literally Mars</MenuItem>
                        </NavDropdown>
                    </Nav>
                    {this.isLoggedIn() ?
                        <Nav pullRight onSelect={this.handleNavbarClick}>
                            <NavItem eventKey={'login'} href="#">{this.props.user.name}'s Account</NavItem>
                        </Nav> :
                        <Nav pullRight onSelect={this.handleNavbarClick}>
                            <NavItem eventKey={'login'} href="#">Login</NavItem>
                            <NavItem eventKey={'signup'} href="#">Signup</NavItem>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
        )
    }
});

export default MainNavbar