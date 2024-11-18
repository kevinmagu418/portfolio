import React ,{useState} from 'react'
import '../csscomponents/Contanct.css'
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Contanctme() {
  const [checkedbox,setcheckedbox] = useState(null);
  const handleChange=(e)=>{
    const {name}=e.target;
    setcheckedbox(name);
  }

  const [Fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState([]);
     const handleSubmit=(e)=>{
      e.preventDefault();
  const Formdata={Fullname,email,message,checkedbox}
  localStorage.setItem('contantform',Formdata);
  console.log('data saved')
     }

  
  return (
    <div className='container contanct__container' id='Contactme'>
       <div className='contact-heading'>
          <h5>Get in Touch</h5>
          <h2>Contanct Me</h2>
       </div>
       <div className='contents'>
           <div className='articlecards'>
                  <article className='article'>
                    <MdEmail/>
                    <h4>Email</h4>
                    <h5>kevomagunas439@gmail.com</h5>
                    <a href="mailto:kevomagunas439@gmail.com" target='_blank'>Send a message</a>
                  </article>
                  <article className='article'>
                  <FaInstagram />
                    <h4>Instagram</h4>
                    <h5>Kevthe_web_dev</h5>
                    <a href="https://instagram.com" target='_blank'>send a message</a>
                  </article>
                  <article className='article'>
                    <FaWhatsapp /> 
                    <h4>Whatsapp</h4>
                    <h5>0791********</h5>
                    <a href="https://api.whatsapp.com/send?phone=+254791848319" target='_blank'>send a message</a>
                  </article>
           </div>
           <form onSubmit={handleSubmit}>
                <input className='inputtxt' type='text' placeholder=' Fullname' required name='name' value={Fullname} onChange={(e)=>setFullname(e.target.value.trim())}/>
                <input className='inputtxt' type="email" name='email' placeholder=' Email' required value={email} onChange={(e)=>setEmail(e.target.value.trim())}/>
                <div className='checkbox'>
                  <h5>mark one checkbox only</h5>
                <input type="checkbox" name='checkbox1' checked={checkedbox==='checkbox1'} onChange={handleChange}/><label>Support Request</label>
                <input type="checkbox" name='checkbox2' checked={checkedbox==='checkbox2'}  onChange={handleChange} /><label>Service Request</label>
                 </div>
                <textarea name="message"  id="message" placeholder='Your message is required' rows={7} value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                <button type='submit'>Send message</button>
           </form>
       </div>
    </div>
  )  
}

export default Contanctme