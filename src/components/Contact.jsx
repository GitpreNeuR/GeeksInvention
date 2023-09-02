import React from 'react'
import styled from 'styled-components'
import Footer from './Footer';


const ContactSection=styled.div`
height:100vh;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
background-color:#17181D;
color:white;
gap:2em;
`;

const Button=styled.button`
background: none;
  padding:15px 36px;
  display:flex;
  align-items:center;
  gap:1em;
  border:none;
  position:relative;
  width:fit-content;
  text-align:center;
  letter-spacing:1px;
  border-radius:40px;
  color: white;
    background-color:orangered;
  text-decoration:none;
  font-size:20px;
  ; /* Add margin for spacing */
  transition:all 0.2s ease-in-out;
  &:hover{
    background-color:white;
    color:orangered;
  }
 
`;
function Contact() {
  
  return (
    <>
    <ContactSection>
        <h1 className='text-[3em]'>Get to know us better</h1>
        <p className=' text-xl w-[50%] text-gray-200'>It is a pleasure to have you on our website. Let us know if there's an opportunity to do something together.</p>
        <Button>Drop us a message</Button>
        
    </ContactSection>
    <Footer/>
    </>
  )
}

export default Contact