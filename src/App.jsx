import './App.css'
import { HomePage } from './Pages/HomePage';
import { NavBar } from './Components/NavBar';
import { AboutMe } from './Pages/AboutMe';
import { Footer } from './Components/Footer';
import { Contact } from './Pages/Contact';
import { Resume } from './Pages/Resume';
import { Projects } from './Pages/Projects';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <header className='bg_img relative'>
        <NavBar />
        <Outlet>
          <HomePage />
          <Resume />
        </Outlet>
      </header>
      <AboutMe />
      <Projects/>
      <Contact />
      <Footer />
    
    </>
  )
}

export default App;
