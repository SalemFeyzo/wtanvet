import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import useSound from 'use-sound';
import SoundMp3 from '../../../assets/SoundMp3.mp3';

export const NavItems = () => {
  const [play] = useSound(SoundMp3);
  return (
    <>
      <Nav className="mr-auto " navbar>
        <NavItem>
          <Link to="/">
            <NavLink onClick={play}>الرئيسية</NavLink>
          </Link>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret onClick={play}>
            منتجاتنا
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>الشكل الصيدلاني</DropdownItem>
            <DropdownItem>الحيوانات المعالجة</DropdownItem>
            <DropdownItem>المجموعة العلاجية</DropdownItem>
            <DropdownItem divider />
            <Link to="/products">
              <DropdownItem onClick={play}>جميع المنتجات</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <Link to="/agents">
            {' '}
            <NavLink onClick={play}>وكلائنا</NavLink>{' '}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">
            {' '}
            <NavLink onClick={play}>اتصل بنا</NavLink>
          </Link>
        </NavItem>
      </Nav>
    </>
  );
};
