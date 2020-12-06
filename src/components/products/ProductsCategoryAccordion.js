import React, { useState } from 'react'
import {
  UncontrolledCollapse,
  CardTitle,
  CardBody,
  Card,
  ListGroupItem,
} from 'reactstrap'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useSound from 'use-sound'
import SoundMp3 from '../../assets/SoundMp3.mp3'

export const ProductsCategoryAccordion = () => {
  const [play] = useSound(SoundMp3)
  const [isOpenF, setOpenF] = useState(false)
  const [isOpenS, setOpenS] = useState(false)
  const [isOpenTH, setOpenTH] = useState(false)
  const toggleIconF = () => setOpenF(!isOpenF)
  const toggleIconS = () => setOpenS(!isOpenS)
  const toggleIconTH = () => setOpenTH(!isOpenTH)
  const onclickF = () => {
    play()
    toggleIconF()
  }
  const onclickS = () => {
    play()
    toggleIconS()
  }
  const onclickTH = () => {
    play()
    toggleIconTH()
  }
  return (
    <div className='hidden-on-phone'>
      <Card className='mt-2'>
        <CardBody>
          <CardTitle
            id='togglerF'
            onClick={onclickF}
            className='category-accordion'
          >
            {' '}
            <p>الشكل الصيدلاني</p>{' '}
            {!isOpenF ? <ChevronLeftIcon /> : <ExpandMoreIcon />}
          </CardTitle>
          <UncontrolledCollapse toggler='#togglerF'>
            <ListGroupItem>الحقن</ListGroupItem>
            <ListGroupItem>السوائل</ListGroupItem>
            <ListGroupItem>البودرة</ListGroupItem>
            <ListGroupItem>المضغوطات والتحاميل</ListGroupItem>
            <ListGroupItem>حجر املاح</ListGroupItem>
          </UncontrolledCollapse>

          <CardTitle
            id='togglerS'
            onClick={onclickS}
            className='category-accordion'
          >
            {' '}
            <p>الشكل الصيدلاني</p>{' '}
            {!isOpenS ? <ChevronLeftIcon /> : <ExpandMoreIcon />}
          </CardTitle>
          <UncontrolledCollapse toggler='#togglerS'>
            <ListGroupItem>الحقن</ListGroupItem>
            <ListGroupItem>السوائل</ListGroupItem>
            <ListGroupItem>البودرة</ListGroupItem>
            <ListGroupItem>المضغوطات والتحاميل</ListGroupItem>
            <ListGroupItem>حجر املاح</ListGroupItem>
          </UncontrolledCollapse>

          <CardTitle
            id='togglerTH'
            onClick={onclickTH}
            className='category-accordion'
          >
            {' '}
            <p>الشكل الصيدلاني</p>{' '}
            {!isOpenTH ? <ChevronLeftIcon /> : <ExpandMoreIcon />}
          </CardTitle>
          <UncontrolledCollapse toggler='#togglerTH'>
            <ListGroupItem>الحقن</ListGroupItem>
            <ListGroupItem>السوائل</ListGroupItem>
            <ListGroupItem>البودرة</ListGroupItem>
            <ListGroupItem>المضغوطات والتحاميل</ListGroupItem>
            <ListGroupItem>حجر املاح</ListGroupItem>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
    </div>
  )
}
