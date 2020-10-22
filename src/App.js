import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Pages';

function App() {
    return (
       <div>
           <Switch>
               <Route exact path={'/'} component={Dashboard} />
           </Switch>
       </div>
    );
}

export default connect()(App);
