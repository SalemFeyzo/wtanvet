import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap'
import { NavItems } from './NavItems'
import SearchIcon from '@material-ui/icons/Search'
import SearchBox from './SearchBox'
import useSound from 'use-sound'
import SoundMp3 from '../../../assets/SoundMp3.mp3'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState(false)
  const [play] = useSound(SoundMp3)

  const toggleSearch = () => setModal(!modal)
  const toggle = () => setIsOpen(!isOpen)
  const screenWidth = window.screen.width
  const clickEvent = () => {
    toggleSearch()
    play()
  }
  const toggleHumIcon = () => {
    toggle()
    play()
  }
  return (
    <div>
      <Navbar className='nav-bar' dark expand='md' fluid>
        <Link to='/'>
          <NavbarBrand onClick={play}>
            <img height='60' width='200' src={logo} alt='150x50' />
          </NavbarBrand>
        </Link>
        {screenWidth <= 768 ? (
          <div color='light' className='serach-icon' onClick={clickEvent}>
            <SearchIcon style={{ color: 'white' }} />
          </div>
        ) : null}
        <NavbarToggler onClick={toggleHumIcon} />

        <Collapse isOpen={isOpen} navbar>
          <NavItems />
        </Collapse>
        {screenWidth > 768 ? (
          <div className='serach-icon' onClick={clickEvent}>
            <SearchIcon
              style={{ color: 'white', height: '50px', width: '50px' }}
            />
          </div>
        ) : null}
      </Navbar>
      <SearchBox isOpen={modal} toggleSearch={clickEvent} />
    </div>
  )
}

export default Navigation
