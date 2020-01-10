import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const NavMenu = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="https://nasa.gov">
          <img
            src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
            width="25%"
          ></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://api.nasa.gov/#apod">APOD API Docs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://api.nasa.gov/#signUp">
                Generate API Key
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://api.nasa.gov/#browseAPI">
                Browse NASA APIs
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>NASA Image of the Day</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavMenu;
