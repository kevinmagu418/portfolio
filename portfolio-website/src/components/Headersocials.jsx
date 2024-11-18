import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function Headersocials() {
  return (
    <div className='headersocials'>
        <a href="https://linkedin.com" target='_blank'><CiLinkedin size={30}/>
        </a>
        <a href="https://github.com" target='_blank'><FaGithub size={30} />
        </a>
        <a href="https://instagram.com" target='_blank'><FaInstagramSquare size={30} />
        </a>

    </div>
  )
}

export default Headersocials