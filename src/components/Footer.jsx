import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
flex-direction:column;
  width:100%;
  justify-content: space-evenly;
  align-items: center;
  background-color: #17181d; /* Adjust the background color as needed */
  color: white;
  padding: 2em;
`;

const Logo = styled.h1`
  font-size: 2em;
  
  span{
    color:orange;
  }
`;

const FooterWrapper=styled.div`
display: flex;
  flex-wrap: wrap;
  width:100%;
  justify-content: space-evenly;
  align-items: center;
  background-color: #17181d; /* Adjust the background color as needed */
  color: white;
  padding: 2em;
`;
const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;



const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const NavLinkItem = styled.li`
  a {
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`;



const End = styled.div`
    text-align: center;
    color: gray;
    background:#17181d;
`;

const Button=styled.button`
  border:1px solid white;
  padding:15px 36px;
  display:flex;
  align-items:center;
  gap:1em;
  position:relative;
  width:fit-content;
  text-align:center;
  letter-spacing:1px;
  border-radius:40px;
  color: white;
  text-decoration:none;
  font-size:20px;
  ; /* Add margin for spacing */
  transition:all 0.2s ease-in-out;
  &:hover{
    background-color:white;
    color:black;
  }
 
`;
const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterWrapper>
      <AddressContainer>
        <Logo>Geeks <span>Invention</span></Logo>
        <p>447 Broadway, 2nd Floor Suite #772, New York 10013, United States +1-347-535-0004</p>
      </AddressContainer>
      <NavLinks>
        <NavLinkItem><a href="/work">Work</a></NavLinkItem>
        <NavLinkItem><a href="/technology">Technology</a></NavLinkItem>
        <NavLinkItem><a href="/services">Services</a></NavLinkItem>
        <NavLinkItem><a href="/company">Company</a></NavLinkItem>
        <NavLinkItem><a href="/contacts">Contact</a></NavLinkItem>
        <NavLinkItem><a href="/">Terms & Conditions</a></NavLinkItem>
        <NavLinkItem><a href="/">Privacy Policy</a></NavLinkItem>
      </NavLinks>
      <div>
        <Button>
          <h3>Stay tuned for our updates</h3>
        </Button>
      </div>
      </FooterWrapper>
      <End>© Copyright 2023 . All Rights Reserved</End>

    </FooterContainer>
</>
  );
};

export default Footer;
