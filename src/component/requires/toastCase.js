/**
 * Created by jibin on 17/9/7.
 */

import React, {Component} from 'react';
import template from '../common/template';
import FontAwesome from 'react-fontawesome';
import Header from '../common/header';

class ToastCase extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="page subpage">
                <Header title="Toast"/>
            </div>
        );
    }
}

export default template({
    id: 'toast',
    component: ToastCase
});


