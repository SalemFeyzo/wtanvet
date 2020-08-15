import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import { NavItems } from './NavItems';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" fluid>
        <NavbarBrand href="/">
          <img height="50" width="150" src={logo} alt="150x50" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavItems />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
