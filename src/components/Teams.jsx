import React from 'react'
import styled from 'styled-components';
import { teamsData } from '../constants/constants';
import {ArrowLongRightIcon} from '@heroicons/react/24/outline'



const TeamsSection=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
height:100vh;
color:white;
min-width:100vw;
background-color:#23242D;
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

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:50%;
  text-align: center;
  justify-content: center;
  h1{
    font-size:4em;
    
}
p{
    width:80%;
    font-size:1.3em;
}
 
`;

const TeamGrid=styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
gap:2rem;
min-width:80vw;

`
;
const TeamLogo = styled.div`
  display: flex;
  justify-content: center;
  
  align-items: center;
  text-align:center;

`;

const TeamLogoItem = styled.div`
  padding: 10%;
  gap:1em;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 5em;
  }
  h3{
    font-size:1.4em;
    font-weight:semibold;
  }
`;
function Teams() {
  return (
    <TeamsSection>
        <TeamContainer>
        <h1>Only Dedicated Teams</h1>
        <p>
          Our team is 100% concentrated on your project, and you have full control over the management of the dedicated team members.
        </p>
      </TeamContainer>
      <TeamGrid>
      {teamsData.map((data,index)=>(
        <TeamLogo key={index} 
        data-aos="zoom-in"
        data-aos-delay={200 + index * 100}
        data-aos-duration={600}>
        <TeamLogoItem>
            <img src={data.imgSrc}/>
            <h3>{data.title}</h3>
        </TeamLogoItem>
        </TeamLogo>
      ))}
      </TeamGrid>
      <TeamContainer>
      <Button>
            See all case studies
            <ArrowLongRightIcon className='h-6 w-6'/>
        </Button>
      </TeamContainer>
    </TeamsSection>
  )
}

export default Teams