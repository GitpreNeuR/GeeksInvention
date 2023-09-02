import React from 'react';
import styled from 'styled-components';
import {ArrowLongRightIcon} from '@heroicons/react/24/outline'
import { platformData } from '../constants/constants';

const PlatformSection = styled.section`
  display: flex;
  flex-direction: column;
  background:#17191C;
  height:100vh;
  min-width:100vw;
  align-items:center;
  justify-content:space-evenly;
  color: #fff;
`;

const PlatformContainer = styled.div`
text-align:center;
display:flex;
flex-direction:column;
gap:1em;

h1{
    font-size:4.4em;
    font-weight:semibold;
    
}
p{
    color:gray;
    font-size:1.3em;
}
`;

const PlatformLogo = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
 
  width:100%;
  text-align:center;
`;

const PlatformLogoItem = styled.div`
display: flex;
flex-direction:column;
gap:1em;
align-items:center;
justify-content:center;
text-transform:capitalize;
h3{
    font-size:1.3em;
    font-weight:600;
}
  img {
    width: auto;
  }
`;

const Button=styled.button`
background: none;
  border: 1px solid orangered;
  padding:15px 36px;
  display:flex;
  align-items:center;
  gap:1em;
  position:relative;
  width:fit-content;
  text-align:center;
  letter-spacing:1px;
  border-radius:40px;
  color: orangered;

  text-decoration:none;
  font-size:20px;
  ; /* Add margin for spacing */
  transition:all 0.2s ease-in-out;
  &:hover{
    background-color:orangered;
   color:white;
  }
`;
const Platforms = () => {
  return (
    <PlatformSection >
      <PlatformContainer>
        <h1>Software for modern platforms</h1>
        <p>We develop applications for mobile, web, wearables, and TV.</p>
      </PlatformContainer>
      <PlatformLogo>
      {platformData.map((data, index) => (
    <PlatformLogoItem
      key={index}
      data-aos="zoom-in"
      data-aos-delay={300 + index * 100}
      data-aos-duration={600}
    >
      <img src={data.imageUrl} alt="" />
      <h3>{data.label}</h3>
    </PlatformLogoItem>
  ))}
      </PlatformLogo>
      <PlatformContainer>
      <Button>
            See all case studies
            <ArrowLongRightIcon className='h-6 w-6'/>
        </Button>
        </PlatformContainer>
    </PlatformSection>
  );
};

export default Platforms;
