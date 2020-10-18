import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Plans from './components/pages/Plans';
import Services from './components/pages/Services';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path = '/' exact component={Home}/>
        <Route path = '/plans' exact component={Plans}/>
        <Route path = '/services' exact component={Services}/>
        <Route path = '/signup' exact component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
