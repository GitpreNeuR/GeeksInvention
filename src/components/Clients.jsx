import React from 'react';
import styled from 'styled-components';
import { clientData } from '../constants/constants';
// Styled components
const ClientsSection = styled.section`
width:100%;
padding: 5rem 2rem;
margin: 0 auto;
display: flex;
color:white;
background-color:#22252D;
align-items: center;
flex-direction: column;
`;

const ClientsDesc = styled.div`
  text-align:center;
  width:50%;
  margin-bottom:6rem;
`;

const ClientCompanies = styled.div`
display: grid;
place-items:center;
grid-template-columns:repeat(3,1fr);
gap:1.3em;
   
`;

const CompanyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  height: 550px;
  width: 400px;

  transform:scale(0.95);
  text-align:center;
  background-color: #2F3138;
  
  h1{
    font-size:1.2em;
    text-transform:capitalize;
  }
  p{
    width:75%;
    color:#909196;
  }
  img{
    width:70%;
  }
`;

// Data for client cards

    
      

const Clients = () => {
    return (
        <ClientsSection>
            <ClientsDesc>
                <h1 className='text-[4em]'>Recent Clients</h1>
                <p>
                    We worked with the Fortune 500 companies in the USA, Africa, UK, Middle East World's 4th Strongest Banking Brand, Automobile & IoT industry
                </p>
            </ClientsDesc>
            <ClientCompanies data-aos="fade-up" data-aos-delay='300' data-aos-duration='600'>
                {clientData.map((client, index) => (
                    <CompanyCard
                        key={index}
                        
                    >
                        <img src={client.logoSrc}  alt="logo" />
                        <h1 >{client.companyName}</h1>
                        <p >{client.companyDescription}</p>
                    </CompanyCard>
                ))}
            </ClientCompanies>
        </ClientsSection>
    );
};

export default Clients;
