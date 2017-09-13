/**
 * Created by jibin on 17/8/23.
 */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import route from './route';

const reducer = (state, action) => state;

const store = createStore(reducer);

render((
    <Provider store={store}>
        {route}
    </Provider>
    ), document.querySelector('#App')
);

