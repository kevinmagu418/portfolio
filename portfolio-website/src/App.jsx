
import './App.css'
import Homeheader from './components/Homeheader'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Contanctme from './components/Contanctme'
import Pagefooter from './components/Pagefooter'

function App() {
  

  return (
    
    <div className='container'>
      <Homeheader/>
      <Nav/> 
      <About/> 
      <Experience/>  
      <Services/>
      <Contanctme/>   
    

       

    
    </div>
  )
}

export default App
