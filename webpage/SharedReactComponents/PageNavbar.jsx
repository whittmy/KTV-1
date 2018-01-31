import React from "react";
import {
  Collapse,
  Dropdown,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class PageNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: true
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className = "navbar-margin-bottom">
        <Navbar dark expand="md">
          <NavbarBrand href="/">
            <img src="logo.png" alt="logo" width="50" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={!this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/treefind">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/submit">Submit a Song</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/timepicker">TimePicker</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        
    );
  }
}
