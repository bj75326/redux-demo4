/**
 * Created by jibin on 17/8/24.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Bundle from '../util/Bundle';
import Layout from '../util/Layout';
import config from '../config/Config';

import Home from '../component/index';
import toastCaseContainer from '../component/requires/toastCase';
import aContainer from '../component/requires/A';
import bContainer from '../component/requires/B';

const ToastCase = ({match}) => (
    <Bundle load={toastCaseContainer}>
        {Component => <Component match={match}/>}
    </Bundle>
);

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

/*----*/
const {projectName} = config;

const RouteConfig = (
    <Router>
        <Route children={({location})=>{
            return (
                <Layout location={location}>
                    <Route location={location} path={`/${projectName}`} exact component={Home}/>
                    <Route location={location} path={`/${projectName}/Toast`} component={ToastCase}/>
                    <Route location={location} path={`/${projectName}/A`} component={A}/>
                    <Route location={location} path={`/${projectName}/B`} component={B}/>
                </Layout>
            );
        }}/>
    </Router>
);

export default RouteConfig;