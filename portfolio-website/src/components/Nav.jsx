import React,{useState}from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import '../csscomponents/Nav.css'
function Nav() {
  const [activeLink, setActivelink] = useState('#')
  return (
    <div className='navlinks'>
      <nav>
        <a href='#' className={activeLink==='#'?'active' :''} onClick={()=>setActivelink('#')}><IoHomeOutline /></a>
        
        <a href='#About' className={activeLink==='#About'?'active' : ''} onClick={()=>setActivelink('#About')}><FcAbout/></a>
        <a href="#Experience" className={activeLink==='#Experience'?'active':''} onClick={ ()=>setActivelink('#Experience')}><FaRegBookmark/></a>
        <a href='#Services'className={activeLink==='#Services'? 'active' : ''} onClick={()=>setActivelink('#Services')}><RiCustomerService2Line /></a>
        
        <a href='#Contactme' className={activeLink==='#Contactme'? 'active' : ''} onClick={()=>setActivelink('#Contactme')}><IoMdContact /></a>
        
     </nav>
    </div>
  )
}

export default Nav