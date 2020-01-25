import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="App">
        <Header />

        <Main />
        <Certifications />
    </div>
  );
}

export default App;
