import React, { useState } from 'react';
import {
  UncontrolledCollapse,
  CardTitle,
  CardBody,
  Card,
  ListGroupItem,
} from 'reactstrap';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const ProductsCategoryAccordion = () => {
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const toggleIcon1 = () => setOpen1(!isOpen1);
  const toggleIcon2 = () => setOpen2(!isOpen2);
  const toggleIcon3 = () => setOpen3(!isOpen3);
  return (
    <>
      <Card className="mt-2">
        <CardBody>
          <CardTitle
            id="toggler1"
            onClick={toggleIcon1}
            className="category-accordion"
          >
            {' '}
            <p>الشكل الصيدلاني</p>{' '}
            {!isOpen1 ? <ChevronLeftIcon /> : <ExpandMoreIcon />}
          </CardTitle>
          <UncontrolledCollapse toggler="#toggler1">
            <ListGroupItem>الحقن</ListGroupItem>
            <ListGroupItem>السوائل</ListGroupItem>
            <ListGroupItem>البودرة</ListGroupItem>
            <ListGroupItem>المضغوطات والتحاميل</ListGroupItem>
            <ListGroupItem>حجر املاح</ListGroupItem>
          </UncontrolledCollapse>

          <CardTitle
            id="toggler2"
            onClick={toggleIcon2}
            className="category-accordion"
          >
            {' '}
            <p>الشكل الصيدلاني</p>{' '}
            {!isOpen2 ? <ChevronLeftIcon /> : <ExpandMoreIcon />}
          </CardTitle>
          <UncontrolledCollapse toggler="#toggler2">
            <ListGroupItem>الحقن</ListGroupItem>
            <ListGroupItem>السوائل</ListGroupItem>
            <ListGroupItem>البودرة</ListGroupItem>
            <ListGroupItem>المضغوطات والتحاميل</ListGroupItem>
            <ListGroupItem>حجر املاح</ListGroupItem>
          </UncontrolledCollapse>

          <CardTitle
            id="toggler3"
            onClick={toggleIcon3}
            className="category-accordion"
          >
            {' '}
            <p>الشكل الصيدلاني</p>{' '}
            {!isOpen3 ? <ChevronLeftIcon /> : <ExpandMoreIcon />}
          </CardTitle>
          <UncontrolledCollapse toggler="#toggler3">
            <ListGroupItem>الحقن</ListGroupItem>
            <ListGroupItem>السوائل</ListGroupItem>
            <ListGroupItem>البودرة</ListGroupItem>
            <ListGroupItem>المضغوطات والتحاميل</ListGroupItem>
            <ListGroupItem>حجر املاح</ListGroupItem>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
    </>
  );
};
