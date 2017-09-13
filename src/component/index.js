/**
 * Created by jibin on 17/8/25.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import template from './common/template';
import config from '../config/Config';
import FontAwesome from 'react-fontawesome';
import Loading from './common/loading';
import Tool from '../config/Tool';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {initData} = this.props;
        const {data, isFetching} = initData;
        const {projectName} = config;

        const showCaseGroup = Object.keys(data);

        if(isFetching === false){
            return (
                <div className="page">
                    {Tool.flattenArray(showCaseGroup.map(showCaseName => {
                        const cases = data[showCaseName];
                        return ([
                            <div className="title">{showCaseName}</div>,
                            <div className="showcases">
                                {cases.map(_case_ => (
                                    <Link to={`/${projectName}${_case_.url}`}>
                                        <span className="icon"><FontAwesome name={_case_.icon}/></span>
                                        <span className="name">{_case_.name}</span>
                                        <span className="arrow"><FontAwesome name="angle-right"/></span>
                                    </Link>
                                ))}
                            </div>
                        ]);
                    }))}
                </div>
            );
        }else{
            return <Loading/>;
        }
    }
}

export default template({
    id: 'index',
    component: Home,
    url: '/data/content.json'
});

