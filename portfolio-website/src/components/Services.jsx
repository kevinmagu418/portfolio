import React from 'react'
import '../csscomponents/Service.css'
import { FaCheck } from "react-icons/fa";

function Services() {
  return (
    <div className='container services__container' id='Services'>
      <div className='services-heading'>
        <h5>What I offer</h5>
        <h2>Services</h2>
      </div>
      <div className='servicescontent'>
           <article>
                 <div><h3>UI AND UX DESIGN</h3></div>
                 <ul className='Servicelist'>
                  <li><FaCheck/>User Research <p>I conduct thorough research to understand user needs and behaviors, helping to inform design decisions.
                  </p>
                   </li>
                   <li><FaCheck/>WireFraming and Prototyping<p> I create wireframes and interactive prototypes to visualize the layout and functionality of the product.
                   </p></li>
                   <li><FaCheck/>Visual Design <p> I design visually appealing interfaces that are both functional and aesthetically pleasing
                         </p> </li>
                    <li><FaCheck/>Interaction Design <p>I conduct usability tests to identify and resolve issues, ensuring the product is easy to use.
                      </p></li>
                    <li><FaCheck/>Usability Testing <p> I conduct usability tests to identify and resolve issues, ensuring the product is easy to use.</p></li>
                    <li><FaCheck/>Information Architecture <p> I organize and structure content in a way that is logical and user-friendly.</p>
                    </li>
                    <li><FaCheck/>User interface Development <p> I bring designs to life with clean, efficient, and scalable code.</p>
                     </li>
                 </ul>
           </article>
           <article >

           <div><h3>Web Development</h3></div>
               <ul className='servicelist'>
                  <li> <FaCheck/>Website Development <p>Creating responsive and modern websites using the latest web technologies.</p>
                   </li>
                  <li> <FaCheck/>E-commerce Development <p>Building robust and secure e-commerce platforms to boost your online sales.</p>
                   </li>
                  <li> <FaCheck/>Web Application Development <p>Developing dynamic web applications tailored to your business needs.</p>
                  </li>
                  <li> <FaCheck/> Content Management Systems<p>Implementing and customizing CMS solutions like WordPress and Joomla.</p>
                   </li>
                  <li> <FaCheck/>API Integration <p>Integrating third-party APIs to enhance the functionality of your website or application.</p>
                  </li>
                  <li> <FaCheck/>Website Maintenance <p>Providing ongoing maintenance and updates to ensure your website runs smoothly.</p>

                  </li>
                  <li> <FaCheck/>SEO optimization <p>Optimizing websites to improve search engine rankings and visibility.</p>
                   </li>


               </ul>
         

           </article>
      </div>
    </div>
  )
}

export default Services