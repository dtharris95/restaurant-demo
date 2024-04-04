import './App.css'
import pb from './lib/pocketbase'
import { useState, useEffect } from 'react';

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
      <h1>React + Pocketbase</h1>
      <h2>The following greeting is from Pocketbase:</h2>
      <h3>{greeting.greetingText}</h3>
    </>
  )
}

export default App
