import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        
        <Switch >
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
