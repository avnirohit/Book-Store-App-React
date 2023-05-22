// import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./components/User";
import { BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {Employee} from './components/Employee'

const Profile=() => {
  const userName = "Avni";
  return <h1 className="profile-cmp"> Profile component {userName}</h1>;
}

function App() {
  const clickme=() => alert("clicked");
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NavLink to="/">home</NavLink>
        <NavLink to="/emp">employee</NavLink>
        <NavLink to="/profile">profile</NavLink>
        <Routes>


<Route path="/"  element={<User name="Avni" fun={clickme}/>} />
<Route path="/emp"  element={<Employee />} />
<Route path="/profile"  element={<Profile />} />
        </Routes> 
     
      </header>
    </div>
    </BrowserRouter> 
  );
}

export default App;
