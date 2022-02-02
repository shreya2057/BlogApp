import NavBar from './NavBar';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Create from './Create';

function App() {

  return (
    <Router>
      <div className="App">
      <NavBar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/create">
            <Create/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
