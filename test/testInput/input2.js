/**
 * Created by jibin on 17/8/24.
 */

import React, {Component} from 'react';

class Demo2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleInputChange(e){
        this.setState({
            value: e.target.value
        });
    }

    render(){

        const value = this.state.value;

        return (
            <input value={value} onChange={this.handleInputChange.bind(this)} />
        );
    }
}

export default Demo2;
