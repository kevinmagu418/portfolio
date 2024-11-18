import React from 'react'
import Cta from './Cta'
import Headersocials from './Headersocials'
import kevin2 from '../assets/kevin2.jpg'
import { CgScrollV } from "react-icons/cg";

function Homeheader() {
  return (
    <div className='container homeheader__container'>
        <h5>Hello I'M </h5>
        <h1>Kevin Magu</h1>
        <h5> A FullStack Developer</h5>
        <Cta/>
        <div>
        <img src={kevin2} alt="kevin" className='img'/>
        </div>
        <a href="" className='scroll-down'>scrollDown<CgScrollV size={30} />
        </a>
        <Headersocials/>
    </div>
  )
}

export default Homeheader