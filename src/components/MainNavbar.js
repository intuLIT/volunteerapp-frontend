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
                        {this.props.user ? this.props.user.organization === null ?
                            <NavItem eventKey={'/create-org'} href="#">Register Organization</NavItem> : null : null}
                        {this.props.user ? this.props.user.organization !== null ?
                            <NavItem eventKey={'/create-event'} href="#">Create Event</NavItem> : null : null}
                        <NavItem eventKey={'/event-list'} href="#">View Events</NavItem>
                    </Nav>
                    {this.isLoggedIn() ?
                        <Nav pullRight onSelect={this.handleNavbarClick}>
                            <NavItem eventKey={'login'} href="#">{this.props.user.name}'s Account</NavItem>
                            <NavItem eventKey={'logout'} href="#">Logout</NavItem>
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