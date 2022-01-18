
import './css/master.css'
import React, { Component} from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
