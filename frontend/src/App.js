import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import Data from './components/Data';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tweets" exact component={Tweet} />
            <Route path="/data" exact component={Data} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
