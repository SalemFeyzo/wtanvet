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

export const ProductsCategoryAccordion = ({ setFilter }) => {
  const [play] = useSound(SoundMp3)
  const [isOpenF, setOpenF] = useState(false)
  const toggleIconF = () => setOpenF(!isOpenF)
  const onclickF = () => {
    play()
    toggleIconF()
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
            {!isOpenF ? <ExpandMoreIcon /> : <ChevronLeftIcon />}
          </CardTitle>
          <UncontrolledCollapse toggler='#togglerF'>
            <ListGroupItem
              action
              onClick={(e) => setFilter(e.target.textContent)}
            >
              محلول للحقن
            </ListGroupItem>
            <ListGroupItem
              action
              onClick={(e) => setFilter(e.target.textContent)}
            >
              محلول فموي
            </ListGroupItem>
            <ListGroupItem
              action
              onClick={(e) => setFilter(e.target.textContent)}
            >
              مستحلب فموي
            </ListGroupItem>
            <ListGroupItem
              action
              onClick={(e) => setFilter(e.target.textContent)}
            >
              معلق فموي
            </ListGroupItem>
            <ListGroupItem
              action
              onClick={(e) => setFilter(e.target.textContent)}
            >
              بودرة
            </ListGroupItem>
            <ListGroupItem
              action
              onClick={(e) => setFilter(e.target.textContent)}
            >
              بـودرة ذوابــة فــي الـمـاء
            </ListGroupItem>
            <ListGroupItem
              action
              onClick={(e) => setFilter(e.target.textContent)}
            >
              مرهم
            </ListGroupItem>
            <ListGroupItem
              action
              onClick={(e) => setFilter(e.target.textContent)}
            >
              بخاخ
            </ListGroupItem>
            <ListGroupItem
              action
              onClick={(e) => setFilter(e.target.textContent)}
            >
              مبيد حشري
            </ListGroupItem>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
    </div>
  )
}
