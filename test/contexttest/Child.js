/**
 * Created by jibin on 17/8/28.
 */

import React, {Component} from 'react';
import propTypes from 'prop-types';

class Child extends Component {
    constructor(props, context){
        super(props);
        console.log(props);
        console.log(context);
    }

    static contextTypes = {
        data: propTypes.object.isRequired
    };

    render(){

        const data = Object.assign({}, this.context.data);
        return (
            <div>{data.sentence}</div>
        );
    }
}

export default Child;
