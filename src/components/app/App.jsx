import { Router } from 'express';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../details/CharacterDetail';


export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route exact path="/:id" component={CharacterDetails} />
        </Switch>
      </Router>
    </div>
  );
}
