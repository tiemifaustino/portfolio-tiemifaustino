import './App.css';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      {/* <Route exact path='/sobre' component={ About } /> */}
      {/* <Route exact path='/projetos' component={ Projects } /> */}
      {/* <Route exact path='/contato' component={ Contact } /> */}
      <Route exact path="/" component={Home} />
      {/* <Route path="*" component={ NotFound } /> */}
    </Switch>
  );
}

export default App;
