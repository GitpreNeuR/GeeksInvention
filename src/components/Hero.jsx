import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroSection=styled.div`
display:flex;
align-items:center;
justify-content:center;
height:100vh;
background-color:#191919;
`;

const HeroContent=styled.div`
text-align:center;
`;
function Hero() {
  
  return (
    <HeroSection>
      <HeroContent>
        <h1 className='text-[4em] uppercase text-white'>Embrace the future</h1>
        <p className='text-[2em] capitalize text-white'>Welcome to the age of action</p>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero