import React,{useLayoutEffect,useRef,useEffect,useState} from 'react'
import Hero from './components/Hero'
import {About,AboutThree,AboutTwo} from './components/About'
import Extra from './components/Extra'
import Clients from './components/Clients'
import Teams from './components/Teams'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from 'styled-components'
import Platforms from './components/Platforms'
import Contact from './components/Contact'
import Footer from './components/Footer'
const Section=styled.div`



height:fit-content;
justify-content:center;
margin: 0 auto;
display: flex;
align-items: center;
flex-direction: column;
overflow:hidden;

`;
function Home() {
  
  
  
  return (
    <>

    <Hero/>

    <Section>
     
    <About/>
    <AboutTwo/>
    <AboutThree/>
    <Extra/>
    <Clients/>
    <Platforms/>
    <Teams/>
    <Contact/>

    </Section>
    
   
    
    </>
  )
};

export default Home