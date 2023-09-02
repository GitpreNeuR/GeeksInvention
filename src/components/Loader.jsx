import React from 'react'
import styled from 'styled-components';

const LetterI = styled.div`
    font-size: 3em;
    letter-spacing:10px;
    font-weight:;
    color: black; /* Color for the letter "i" */
    position: relative;


`;
const ScaleableI = styled.span`
    text-transform: uppercase;
    
`;
const Dot = styled.div`
    position: absolute;
    top: 5px; /* Adjust the vertical position of the dot as needed */
    left: 42%;
    width: 8px;
    height: 8px;
    background-color: red; /* Color for the dot */
    border-radius: 50%;
`;

function Loader() {
  return (
    <div className='text-red-500 h-screen justify-center flex items-center'>
          <LetterI>
           Geeks&nbsp;<ScaleableI>i</ScaleableI>nvention
            <Dot className='animate-bounce' />
        </LetterI>
    </div>
  )
}

export default Loader