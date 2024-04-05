import './App.css'
import pb from './lib/pocketbase'
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

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
    </>
  )
}

export default App
