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
  const [isOpenF, setOpenF] = useState(false);
  const [isOpenS, setOpenS] = useState(false);
  const [isOpenTH, setOpenTH] = useState(false);
  const toggleIconF = () => setOpenF(!isOpenF);
  const toggleIconS = () => setOpenS(!isOpenS);
  const toggleIconTH = () => setOpenTH(!isOpenTH);
  return (
    <>
      <Card className="mt-2">
        <CardBody>
          <CardTitle
            id="togglerF"
            onClick={toggleIconF}
            className="category-accordion"
          >
            {' '}
            <p>الشكل الصيدلاني</p>{' '}
            {!isOpenF ? <ChevronLeftIcon /> : <ExpandMoreIcon />}
          </CardTitle>
          <UncontrolledCollapse toggler="#togglerF">
            <ListGroupItem>الحقن</ListGroupItem>
            <ListGroupItem>السوائل</ListGroupItem>
            <ListGroupItem>البودرة</ListGroupItem>
            <ListGroupItem>المضغوطات والتحاميل</ListGroupItem>
            <ListGroupItem>حجر املاح</ListGroupItem>
          </UncontrolledCollapse>

          <CardTitle
            id="togglerS"
            onClick={toggleIconS}
            className="category-accordion"
          >
            {' '}
            <p>الشكل الصيدلاني</p>{' '}
            {!isOpenS ? <ChevronLeftIcon /> : <ExpandMoreIcon />}
          </CardTitle>
          <UncontrolledCollapse toggler="#togglerS">
            <ListGroupItem>الحقن</ListGroupItem>
            <ListGroupItem>السوائل</ListGroupItem>
            <ListGroupItem>البودرة</ListGroupItem>
            <ListGroupItem>المضغوطات والتحاميل</ListGroupItem>
            <ListGroupItem>حجر املاح</ListGroupItem>
          </UncontrolledCollapse>

          <CardTitle
            id="togglerTH"
            onClick={toggleIconTH}
            className="category-accordion"
          >
            {' '}
            <p>الشكل الصيدلاني</p>{' '}
            {!isOpenTH ? <ChevronLeftIcon /> : <ExpandMoreIcon />}
          </CardTitle>
          <UncontrolledCollapse toggler="#togglerTH">
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
