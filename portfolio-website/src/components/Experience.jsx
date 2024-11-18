import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";
import '../csscomponents/Experience.css';
function Experience() {
  return (
    <div className='container experience__container' id='Experience'>
        <div className='experience-header'>
          <h4>What Skills I have</h4>
          <h2>My Experience</h2>
        </div>
        <div className='experience-cards'>
            <div className='frontend-card'>
                <div className='skills'>
                  <h6><BsFillPatchCheckFill/>HTML</h6>
                   <p>Experienced</p>
                </div>
                <div className='skills'>
                  <h6><BsFillPatchCheckFill/>TypeScript</h6>
                   <p>Experienced</p>
                </div>
                <div className='skills'>
                  <h6><BsFillPatchCheckFill/>CSS</h6>
                   <p>Experienced</p>
                </div>
                <div className='skills'>
                  <h6><BsFillPatchCheckFill/>Javascript</h6>
                   <p>Experienced</p>
                </div>
                <div className='skills'>
                  <h6><BsFillPatchCheckFill/>Bootstrap</h6>
                   <p>Beginner</p>
                </div>
                <div className='skills'>
                  <h6><BsFillPatchCheckFill/>Tailawind</h6>
                   <p>Experienced</p>
                </div>
                <div className='skills'>
                  <h6><BsFillPatchCheckFill/>React</h6>
                   <p>Experienced</p>
                </div>
            </div>
            <div className='backend-card'>
                 <div className='skills'>
                  <h6><BsFillPatchCheckFill/>NodeJs</h6>
                   <p>Experienced</p>
                  </div>
                  <div className='skills'>
                  <h6><BsFillPatchCheckFill/>PHP</h6>
                   <p>Experienced</p>
                </div>   <div className='skills'>
                  <h6><BsFillPatchCheckFill/>MongoDb</h6>
                   <p>Experienced</p>
                </div>  
                 <div className='skills'>
                  <h6><BsFillPatchCheckFill/>MySql</h6>
                   <p>Intermediate</p>
                </div>
                <div className='skills'>
                  <h6><BsFillPatchCheckFill/>Python</h6>
                   <p>Beginner</p>
                </div> 
                <div className='skills'>
                  <h6><BsFillPatchCheckFill/>Expressjs</h6>
                   <p>Experienced</p>
                </div>   
            </div>
            
        </div>
    </div>
  )
}

export default Experience