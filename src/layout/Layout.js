import React, { useState } from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import {BsDroplet,BsFillDropletFill} from 'react-icons/bs';


export const Layout = ({children}) => {

  return (
    <Container>
     <Header mode={Mode} toggleMode={handleToggle} />
     <main >{children}</main> 
     <Footer mode={Mode}/>
    </Container>
  )
}
