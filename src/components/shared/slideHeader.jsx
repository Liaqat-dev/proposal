import React from 'react';
import PropTypes from 'prop-types';

function SlideHeader({title,subtitle}) {
    return (
        <header className="slide-header">
            <h1 className="slide-title">{title}</h1>
            <p className="slide-subtitle">
                {subtitle}
            </p>
        </header>
    );
}
SlideHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

export default SlideHeader;