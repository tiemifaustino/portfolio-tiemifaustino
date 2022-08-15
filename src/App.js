import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <h2>Rotas</h2>
      {/* <Route exact path='/projetos' component={ Projects } /> */}
      {/* <Route exact path='/contato' component={ Contact } /> */}
      {/* <Route exact path='/' component={ Home }/> */}
      {/* <Route path="*" component={ NotFound } /> */}
    </Switch>
  );
}

export default App;
