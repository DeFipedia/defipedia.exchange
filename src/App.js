import React from 'react';
import {Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <p>This is home route</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
