import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
