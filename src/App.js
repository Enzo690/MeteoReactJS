import React from 'react';
import logo from './logo.svg';
import './App.css';
import Meteo from './meteo/meteo'

function App() {
  return (
    <div className="App ">
      <div className="row">
        <div className="col-md-12"><Meteo></Meteo></div>
      </div>
      
    </div>
  );
}

export default App;
