import React from 'react';

import './result.styl'


const Result = ({ domain, searchResult }) => (
    <div className="result-wrapper">
        <div className="result">Your domain <span className="result-domain">{domain}</span> is : {searchResult === false ? <span className="result--no">not available</span> : <span className="result--yes">available</span>}</div>
        {/* {this.state.result.length > 2 && this.state.result} */}
        {/* {searchResult && searchResult} */}
    </div>
)

export default Result