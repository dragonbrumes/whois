/**
 * Npm imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import { RotateLoader } from 'react-spinners';

/**
 * Local imports
 */
// import './loader.styl';

const Loader = ({ isLoading, className, color }) => {
    const haveToDisplay = {
        display: isLoading ? 'block' : 'none'
    };

    return (
        <div style={haveToDisplay} className={className}>
            Loader
            <RotateLoader color={color} loading={isLoading} />
        </div>
    );
};

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    className: PropTypes.string,
    color: PropTypes.string
};

export default Loader;
