import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import './tailwind.css';
import LandingPage from './components/landingPage/landingPage';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Navbar from './components/navbar/navbar'
import Services from './components/services/services';
import { fetchEntries } from './contenfulService';
import IndividualService from './components/individualService/individualService';
import Footer from './components/footer/footer';
function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchEntries({ content_type: 'service', order: 'sys.createdAt' })
      .then((response) => {
        setContent(response.items);
      })
      .catch((error) => {
        console.error('Error fetching content', error);
      });
  }, []);

  return (
    <Router>
      {/* <div id="root"> */}
      <Navbar/>
      <div className="contentWrapper">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        {/* Dynamic Routes */}
        {content &&
          content.map((serviceEntry) => {
            let path = '';
            if (serviceEntry.fields.title) {
              path = `/services/${serviceEntry.fields.title.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <Route
                  key={serviceEntry.sys.id}
                  path={path}
                  element={
                    <IndividualService
                      serviceTitle={serviceEntry.fields.title}
                      serviceEntry={serviceEntry}
                    />
                  }
                />
              );
            }
            return null;
          })}
      </Routes>
      </div>
      <Footer/>
      {/* </div> */}
    </Router>
  );
}

export default App;
