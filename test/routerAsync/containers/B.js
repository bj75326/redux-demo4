/**
 * Created by jibin on 17/8/23.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class B extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    static propTypes = {
        dispatch: PropTypes.func
    };

    render(){
        return (
            <div>
                <span>Hello World in B.</span>
                <button><Link to="./A">A</Link></button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(B);
