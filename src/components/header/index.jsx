import React from 'react'
import Logo from './logo'
import SocialMenu from './social-menu'
import MenuButton from './menu-button'
import MainMenu from './main-menu'
import "./index.css"

const Header = () => {
  return (
    <header>
        <Logo/>
        <SocialMenu/>
        <MenuButton/>
        <MainMenu/>
    </header>
  )
}

export default Header