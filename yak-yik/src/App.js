import React from 'react';
import './App.css';
import Menu from './Menu.js';
import Postlist from './Postlist.js';
import Postpage from './Postpage.js';
import Memelist from './Memelist.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route
          path='/memes'
          render={(props) => {
            return <Memelist {...props} />;
          }}
        />

        <Route
          path='/posts/:id'
          render={(props) => {
            return <Postpage {...props} />;
          }}
        />
        <Route path='/'>
          <Menu />
          <Postlist />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
