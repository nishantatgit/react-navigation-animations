import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SeasonDetails from './pages/SeasonDetail/SeasonDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/season/:year">
            <SeasonDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
