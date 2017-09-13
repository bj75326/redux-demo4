/**
 * Created by jibin on 17/8/28.
 */

import React from 'react';
import Father from './Father';
import {render} from 'react-dom';

render(<Father data={{sentence: 'one Piece'}}/>, document.querySelector('#App'));
