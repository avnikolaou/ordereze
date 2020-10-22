import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

function App() {
    return (
       <div>
           <Switch>
               <Route exact path={'/'} component={Dashboard} />
           </Switch>
       </div>
    );
}

export default App;
