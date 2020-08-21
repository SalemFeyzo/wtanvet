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

export const NavItems = () => {
  return (
    <>
      <Nav className="mr-auto " navbar>
        <NavItem>
          <Link to="/">
            <NavLink>الرئيسية</NavLink>
          </Link>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            منتجاتنا
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>الشكل الصيدلاني</DropdownItem>
            <DropdownItem>الحيوانات المعالجة</DropdownItem>
            <DropdownItem>المجموعة العلاجية</DropdownItem>
            <DropdownItem divider />
            <Link to="/products">
              <DropdownItem>جميع المنتجات</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <Link to="/agents">
            {' '}
            <NavLink href="/">وكلائنا</NavLink>{' '}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">
            {' '}
            <NavLink href="/">اتصل بنا</NavLink>
          </Link>
        </NavItem>
      </Nav>
    </>
  );
};
