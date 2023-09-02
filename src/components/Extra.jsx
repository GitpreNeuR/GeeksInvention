import React from 'react'
import styled from 'styled-components'
import {ArrowLongRightIcon} from '@heroicons/react/24/outline'

const Section=styled.div`

display:flex;
align-items:center;
justify-content:center;
height:100vh;
background-color:#191919;
text-align:center;


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
`

function Extra() {
  return (
    <Section>
        <div className='flex flex-col  w-[50%] items-center gap-y-8'>
        <h1 className='text-[3.4em]   text-white'>Check out more works by Geeks Invention</h1>
        <p className='text-xl w-3/2  text-white/60'>Our case studies describe design and development solutions implemented at our Geeks Invention projects. The stories are a valuable resource for those looking to develop their own mobile apps.</p>
        <Button>
            See all case studies
            <ArrowLongRightIcon className='h-6 w-6'/>
        </Button>
        </div>
    </Section>
  )
}

export default Extra