/**
 * Created by jibin on 17/8/28.
 */

import React, {Component} from 'react';
import propTypes from 'prop-types';

import Child from './Child';

class Father extends Component {
    constructor(props){
        super(props);
    }

    static childContextTypes = {
        data: propTypes.object.isRequired
    };

    getChildContext(){
        return {
            data: this.props.data
        }
    }

    render(){
        return (
            <div>
                <div><Child/></div>
            </div>
        );
    }
}

export default Father;