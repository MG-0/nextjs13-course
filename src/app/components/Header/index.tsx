"use client";

import React from 'react'
import Logo from '@/app/components/Header/Logo'
import Menu from '@/app/components/Header/Menu'

const Header = (props: any) => {
  return (
    <div>
        {props.name}
      <Logo/>
      <h1>Hello Components</h1>
      <Menu/>
      
    </div>
  )
}

export default Header