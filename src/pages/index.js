import React,{useState} from 'react';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
// import Scrollup from '../components/ScrollUp/Scrollup'
// import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Pricing from '../components/Pricing/Pricing';
// import {Pricing} from '../components/Pricing/Pricing'
const Home = (props) => {
  const[Mode,setMode] = useState('Light');
  const handleToggle= ()=>{
    if(Mode==='Dark'){
      setMode('Light')
      document.body.style.backgroundColor="black"
      
      
    }
     else{
       setMode(`Dark`)
       document.body.style.backgroundColor="#1572A1"
     }
  }



  return (
     <>
<Header mode={Mode} toggleMode={handleToggle} />
      <Section grid>
        <Hero mode={Mode} />
        <BgAnimation  mode={Mode}  />
      </Section>
      <Projects  mode={Mode}  />   
      <Technologies  mode={Mode}  />
      <Timeline  mode={Mode}  />
      <Pricing  mode={Mode} />
      <Acomplishments mode={Mode}/>
      {/* <Scrollup/> */}
     <Footer  mode={Mode} /> 
      </>
    
  );
};

export default Home;
