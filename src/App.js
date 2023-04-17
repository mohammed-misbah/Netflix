
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {Action,Originals,Comedy,Romance,Horror } from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={Originals} title='Netflix Originals'/>
      <Rowpost url={Action} title='Action Movies' isSmall/>
      <Rowpost url={Comedy} title='Comedy Movies' isSmall/>
      <Rowpost url={Romance} title='Romance Movies' isSmall/>
      <Rowpost url={Horror} title='Horror Movies' isSmall/>
    </div>
  );
}

export default App;
