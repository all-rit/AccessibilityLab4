import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const ExtraNav = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="javascript:void(0);">Accessibility</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="javascript:void(0);" tabindex="0">Menu 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0);" tabindex="0">Menu 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0);" tabindex="0">Menu 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0);" tabindex="0">Menu 4</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0);" tabindex="0">Menu 5</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0);" tabindex="0">Menu 6</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0);" tabindex="0">Menu 7</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default ExtraNav;
