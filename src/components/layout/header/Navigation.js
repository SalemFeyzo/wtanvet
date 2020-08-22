import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg';
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
  const screenWidth = window.screen.width;
  return (
    <div>
      <Navbar light expand="md" fluid>
        <Link to="/">
          <NavbarBrand>
            <img height="60" width="170" src={logo} alt="150x50" />
          </NavbarBrand>
        </Link>
        {screenWidth <= 768 ? (
          <Button color="light" className="serach-icon" onClick={toggleSearch}>
            <SearchIcon className="text-secondary" />
          </Button>
        ) : null}
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <NavItems />
        </Collapse>
        {screenWidth > 768 ? (
          <div className="serach-icon" onClick={toggleSearch}>
            <SearchIcon className="text-secondary" />
          </div>
        ) : null}
      </Navbar>
      <SearchBox isOpen={modal} toggleSearch={toggleSearch} />
    </div>
  );
};

export default Navigation;
