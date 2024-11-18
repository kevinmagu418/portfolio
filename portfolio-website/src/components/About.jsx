import React from 'react'
import '../csscomponents/About.css'
import { FaAward } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { FaFolder } from "react-icons/fa";
import  kevin from '../assets/kevin.jpg'

function About() {
  return (
    <div className='container about__container' id='About'>
        <div className='about-contain'>

            <div className='aboutme-left'>
                 
                     <img src={kevin} alt="" />
                
            </div>
            


            <div className='aboutme-content'>
                <div className='aboutme-heading'>
                  <h5>Get to know me</h5>
                  <h2>About me</h2>
                </div>
                <div className='aboutme-cards'>
                    <article className='about-card'>
                        <FaAward/>
                        <h5>Experience</h5>
                        <small>3+ Years of Working Experience. </small>
                    </article>
                    <article className='about-card'>
                        <LuUsers2/>
                        <h5>Clients</h5>
                        <small>20+ Clients WorldWide.</small>
                    </article>
                    <article className='about-card'>
                        <FaFolder/>
                        <h5>Projects</h5>
                        <small>10+ completed projects.</small>
                    </article>

              
                </div>
                <div className='aboutmeinfo'>
                     <p>Hi, I'm Kevin, a full-stack web developer with a passion for creating robust and dynamic web applications. With expertise in both front-end and back-end technologies, I enjoy building comprehensive solutions that provide seamless user experiences. I have a strong foundation in  JavaScript, React, Node.js, etc
                      
                       and I'm always eager to learn and adopt new tools and frameworks. Whether it's developing a responsive user interface or designing efficient server-side logic, I thrive on turning complex problems into elegant solutions.

</p>

                </div>
                <div className='about-learn' >
                 <a href="#contantme" className='linkbtn'>Learnmore</a>

                </div>

            </div>

        </div>
    </div>
  )
}

export default About