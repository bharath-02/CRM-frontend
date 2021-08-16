import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar';
import Home from './components/home'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
