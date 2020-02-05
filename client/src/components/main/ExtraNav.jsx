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
        <NavbarBrand href="/">Accessibility</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Item 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Item 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Item 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Item 4</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Item 5</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Item 6</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Item 7</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Item 8</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Item 9</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default ExtraNav;
