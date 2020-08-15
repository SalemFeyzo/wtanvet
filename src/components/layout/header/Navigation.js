import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Button,
} from 'reactstrap';
import { NavItems } from './NavItems';
import SearchIcon from '@material-ui/icons/Search';
import SearchBox from './SearchBox';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleSearch = () => setModal(!modal);
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
        <Button color="light" className="serach-icon" onClick={toggleSearch}>
          <SearchIcon className="text-secondary" />
        </Button>
      </Navbar>
      <SearchBox isOpen={modal} toggleSearch={toggleSearch} />
    </div>
  );
};

export default Navigation;
