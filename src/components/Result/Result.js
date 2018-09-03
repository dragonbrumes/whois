import React from 'react';
import { Transition } from 'semantic-ui-react'

import './result.styl'


const Result = ({ domain, searchResult }) => (
    <div className="result-wrapper">
        <Transition animation='slide down' duration={1500}>
            <div className="result">Your domain <span className="result-domain">{domain}</span> is : {searchResult === false ? <span className="result--no">not available</span> : <span className="result--yes">available</span>}</div>
        </Transition>
    </div>
)

export default Result