import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';



const Header = (props) =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:props.mode==="Light"?"white":"white" }}>
          <DiCssdeck size="3rem" /> <span>SIGΣA_DEV</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink style={{color: props.mode==="Light"?"rgba(255, 255, 255, 0.75)":"white"}}>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink style={{color: props.mode==="Light"?"rgba(255, 255, 255, 0.75)":"white"}}>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink style={{color: props.mode==="Light"?"rgba(255, 255, 255, 0.75)":"white"}}>About</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#blog">
          <NavLink style={{color: props.mode==="Light"?"rgba(255, 255, 255, 0.75)":"white"}}>Blog</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
      <SocialIcons style={{color: props.mode==="Light"?"white":"white"}} onClick={props.toggleMode}>
        {props.mode}
      </SocialIcons>
        <SocialIcons style={{color: props.mode==="Light"?"white":"white"}} href="https://github.com/xsur234">
          <AiFillGithub size="3rem" /> 
        </SocialIcons>

        <SocialIcons  style={{color: props.mode==="Light"?"white":"white"}}  href="https://www.linkedin.com/feed/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons   style={{color: props.mode==="Light"?"white":"white"}} href="https://www.instagram.com/accounts/login/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
