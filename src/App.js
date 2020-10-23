import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Pages';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';

function App() {
    return (
       <div>
           <Switch>
               <Route exact path={'/'} component={Dashboard} />
               <Route exact path={'/add'} component={AddPage} />
               <Route exact path={'/edit'} component={EditPage} />
           </Switch>
       </div>
    );
}

export default connect()(App);
