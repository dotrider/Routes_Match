import React from 'react'
import {Switch, Route} from 'react-router-dom';
// Import Components
import Home from './Components/Home';
import Characters from './Components/Characters';
import Info from './Components/Info';

export default (
    <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={Characters} path='/characters'/>
        <Route component={Info} path='/info/:id'/>
    </Switch>
)