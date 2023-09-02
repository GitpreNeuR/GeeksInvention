import React from 'react'
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ArrowLongRightIcon} from '@heroicons/react/24/outline'




const AboutImage=styled.img`
width:80%;

`;

const AboutWrapper=styled.div`

display:grid;
height:100vh;
min-width:80vw;
place-items:center;
grid-template-columns: 1fr 1fr;
gap:1.1em;

background-color:${props => props.backgroundColor || 'transparent'}

`
const AboutDescription = styled.div`
  
 
display: flex;
width:100%;
flex-direction: column;
align-items:flex-start;
justify-content:center;
gap:0.6em;

padding: 20px; /* Add padding for spacing */
 
`;

const DescBtn = styled.div`
  display: flex;
  gap: 20px;
  color:white;
  margin-top: 10px; /* Add margin for spacing */
`;

const DescButton = styled.h6`
  background: rgba(255, 255, 255, 0.08);
  padding: 7px 15px;
  border-radius: 20px;
  font-size:14px;
`;

const DescLink = styled.button`
  background: none;
  border: 1px solid white;
  padding:15px 36px;
  display:flex;
  align-items:center;
  gap:1em;
  letter-spacing:1px;
  border-radius:40px;
  color: white;
  text-decoration:none;
  font-size:20px;
  margin-top: 20px; /* Add margin for spacing */
  transition:all 0.2s ease-in-out;
  &:hover{
    background-color:white;
   
  }
`;

function AboutTwo() {
    
  
  
  
return (
  <>
 
    <AboutWrapper backgroundColor="#01B5AC">
    <AboutImage src="https://geeksinvention.com/assets/v3/industry-iot.webp"/>
      <AboutDescription data-aos="fade-up" data-aos-delay='300' data-aos-duration='600'>
  <h1 className='text-white text-[4em]'>Industrial IoT</h1>
  <h3 className='text-3xl w-2/3 text-gray-100/50'>Providing a better connected experience</h3>
  <DescBtn>
    <DescButton>Connected Manufacturing</DescButton>
    <DescButton>Aviation</DescButton>
    <DescButton>Smart Building</DescButton>
  </DescBtn>
  <p className='text-xl mt-4 w-3/4 text-gray-200'>
  Revolutionize your industry with our innovative IoT solutions. Our software development services offer connected manufacturing, pollution control, smart transportation, and intelligent farming, agriculture, and forestry. With our expertise, you can harness the power of technology to increase efficiency, reduce waste, and optimize operations for a sustainable future.
  </p>
  <DescLink className="hover:text-[#01B4AD]">
    See full case study
    <ArrowLongRightIcon className='h-6 w-6 '/>
  </DescLink>
</AboutDescription>

</AboutWrapper>

</>
)
}
;

function AboutThree() {
    

  
  return (
    <>
    
      <AboutWrapper backgroundColor="#18181F">
      <AboutImage src="https://geeksinvention.com/assets/v3/industry-education.webp"/>
        <AboutDescription data-aos="fade-up" data-aos-delay='300' data-aos-duration='600'>
    <h1 className='text-white text-[4em]'>Smart Education</h1>
    <h3 className='text-3xl  text-gray-100/50'>Elevate your Education Institution</h3>
    <DescBtn>
      <DescButton>Learning Management</DescButton>
      <DescButton>Course Offering</DescButton>
      <DescButton>Professional Training</DescButton>
    </DescBtn>
    <p className='text-xl mt-4 w-3/4 text-gray-200'>
    Elevate your education institution with our comprehensive software solutions. Learning management, course offerings, professional training, certification, and school management tools to streamline your operations and enhance your students' learning experience. Trust us to provide the cutting-edge technology and support you need to thrive in the ever-evolving education industry.    </p>
    <DescLink className="hover:text-[#19181E]">
      See full case study
      <ArrowLongRightIcon className='h-6 w-6 '/>
    </DescLink>
  </AboutDescription>
  
  </AboutWrapper>
 
  </>
  )
  }
  ;


function About() {
    

    
  return (
    <>
   
      <AboutWrapper backgroundColor="#3F2CAA">
      <AboutImage src="https://geeksinvention.com/assets/v3/industry-fintech.svg"/>

        <AboutDescription data-aos="fade-up" data-aos-delay='300' data-aos-duration='600'>
    <h1 className='text-white text-[4em]'>Fintech Solution</h1>
    <h3 className='text-3xl text-gray-400'>Transforming Fintech with AI</h3>
    <DescBtn>
      <DescButton>Fraud detection</DescButton>
      <DescButton>Transaction categorisation</DescButton>
      <DescButton>Risk Scoring</DescButton>
    </DescBtn>
    <p className='text-xl mt-4 w-3/4 text-gray-200'>
      Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to
      easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility,
      transaction categorization for seamless organization, and anomaly detection to safeguard your assets
    </p>
    <DescLink className='hover:text-[#3F2CAA]'>
      See full case study
      <ArrowLongRightIcon className='h-6 w-6 '/>
    </DescLink>
  </AboutDescription>
  </AboutWrapper>
  
  
 
 
  </>
  )
};

export {About,AboutTwo,AboutThree};