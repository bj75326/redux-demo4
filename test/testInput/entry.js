/**
 * Created by jibin on 17/8/24.
 */
import React from 'react';
import {render} from 'react-dom';

import Demo1 from './input1';
import Demo2 from './input2';

render((
    <div>
        <Demo1/>
        <br/>
        <Demo2/>
    </div>
), document.querySelector('#App'));
