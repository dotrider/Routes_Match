import React from 'react';
import logo from './logo.svg';
import './App.css';
import router from './routes';
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      { router }
    </div>
  );
}

export default App;
