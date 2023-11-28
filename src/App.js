import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage/landingPage';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Navbar from './components/navbar/navbar'
import Projects from './components/projects/projects';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
