import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Navbar}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
