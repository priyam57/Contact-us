import React from 'react';
import './App.css';
import Navbar from './components/Navigation/Navbar.jsx';
import Contact from './components/Contact/Contact';
import ContactForm from './components/ContactForm/ContactForm';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Contact/>
      <ContactForm/>
     
    </div>
  )
}

export default App;