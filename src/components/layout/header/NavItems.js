import React from 'react';
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
          <NavLink href="/">الرئيسية</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            منتجاتنا
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>الشكل الصيدلاني</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>الحيوانات المعالجة</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>المجموعة العلاجية</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink href="/">من نحن</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">وكلائنا</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">اتصل بنا</NavLink>
        </NavItem>
      </Nav>
    </>
  );
};
