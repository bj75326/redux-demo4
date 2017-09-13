import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import aContainer from './containers/A';
import bContainer from './containers/B';
import Bundle from './util/Bundle';

const A = ({match}) => (
    <Bundle load={aContainer}>
        {Component => <Component match={match}/>}
    </Bundle>
);

const B = ({match}) => (
    <Bundle load={bContainer}>
        {Component => <Component match={match}/>}
    </Bundle>
);

const RouteConfig = (
    <Router>
        <div>
            <Route path="/" component={A}/>
            <Route path="/redux-demo4/A" exact component={A}/>
            <Route path="/redux-demo4/B" exact component={B}/>
        </div>
    </Router>
);

export default RouteConfig;





