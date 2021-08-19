import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar';
import Home from './components/home';
import ViewContacts from './components/viewContact';
import CreateContact from './components/createContact';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Switch>
          <Route exact path='/view' component={ViewContacts} />
        </Switch>
        <Switch>
          <Route exact path='/create' component={CreateContact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
