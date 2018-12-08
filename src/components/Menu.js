import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

export default class Menu extends Component{

  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle = function(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return (
      <Container>
        <Navbar light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                to="/"
                exact
                activeClassName="active">
                Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                to="/band"
                activeClassName="active">
                The Band
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                to="/people"
                activeClassName="active">
                The People
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                to="/music"
                activeClassName="active">
                The Music
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                to="/contact"
                activeClassName="active">
                Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    )
  }
}
