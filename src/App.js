import React, { Component }  from 'react';
import GoogleAuthentication from "./components/Login/GoogleAuthentication";
import './vendors/bootstrap/bootstrap.min.css'
import Login from "./components/Login/Login";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
      </header>
    </div>
  );
}

export default App;
