import React from "react";
import './index.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        {/* Что за exact path */}
        {/* Как красиво сделать менюху с переходами */}
        <Route exact path="/" element={<Home />}/> 
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
  )
}

export default App;