import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings';
import Dashboard from '../Dashboard';
import Content from '../Shared/Content';
import {BrowserRouter, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <AppLayout>
        <AppProvider>
          <AppBar/>
          <Route path="/">
          </Route>
          <Content>
             <Settings />
            <Dashboard />
          </Content>
        </AppProvider>
       </AppLayout>
      </BrowserRouter>
    );
    }
}

export default App;
