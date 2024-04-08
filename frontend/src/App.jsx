import './App.css'
import pb from './lib/pocketbase'
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Services from './pages/Services';
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {

  const [greeting, setGreeting] = useState('');
  const getGreeting = () => {
      pb
      .collection('greeting')
      .getFullList()
      .then((response) => setGreeting(response[0]));
  }
  useEffect(() => {
    getGreeting();
  }, []);

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route
            exact path ='/'
            element={<Home />} 
          />
          <Route
            exact path ='/menu'
            element={<Menu />} 
          />
          <Route
            exact path ='/services'
            element={<Services />} 
          />
          <Route
            exact path ='/contact'
            element={<Contact />} 
          />
        </Routes>
      </Router>
      {/* <Home /> */}
    </>
  )
}

export default App
