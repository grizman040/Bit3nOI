import React from 'react';
import {AppContext} from "./AppProvider";
import M from 'materialize-css'


const AppBar = ()=>{
return (
  <nav>
  <div className="nav-wrapper">
    <a href="#" className="brand-logo">BitcoinMafia</a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><a href="sass.html">About</a></li>
      <li><a href="badges.html">Sign In</a></li>
      <li><a href="collapsible.html">Sign Up</a></li>
    </ul>
  </div>
</nav>
)
}

export default AppBar