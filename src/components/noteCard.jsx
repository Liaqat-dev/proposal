import React from 'react';
import PropTypes from "prop-types";

function NoteCard({variant = 'warm-grey', icon, title, note}) {
    // Map variant names to CSS classes
    const variantClass = variant ? `note-card-${variant}` : 'note-card-blue';

    return (
        <div
            className={`note-card ${variantClass}`} >
            <div className="note-card-icon">
                <i className={`fas ${icon ? icon : 'fa-lightbulb'} `}></i>
            </div>
            <div>
                <h6 className={'note-card-title'}>{title}</h6>
            <p className="note-card-subtitle">
                {note}
            </p>
            </div>
        </div>
    );
}

NoteCard.propTypes = {
    variant: PropTypes.oneOf([
        'blue', 'green', 'purple', 'red',
        'orange', 'pink', 'indigo', 'yellow','warm-grey'
    ]),
    icon: PropTypes.string,     // optional
    title: PropTypes.string,     // optional
    note: PropTypes.string.isRequired,  // required
};

export default NoteCard;