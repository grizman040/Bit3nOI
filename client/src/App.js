import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import M from 'materialize-css'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
   <Router>

     <Navbar />
     <Route path='/'>
       
     </Route>
   </Router>
  );
}

export default App;
