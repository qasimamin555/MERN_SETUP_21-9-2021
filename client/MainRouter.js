import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Cars from './components/pages/cars';
import {Route, Switch} from 'react-router-dom';
import { hot } from 'react-hot-loader';
 // import { useHistory } from 'react-router';
// import { createMemoryHistory } from 'history';

// const history = createMemoryHistory();


const  MainRouter=()=>{
    return (
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
            <Route path="/cars" component={Cars} />
        </Switch>
    );
}

export default hot(module)(MainRouter);