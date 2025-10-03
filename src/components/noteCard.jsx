import React from 'react';
import PropTypes from "prop-types";


function NoteCard({icon, note,title}) {
    return (
        <div
            className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-5 mt-8 flex items-center shadow relative z-10">
            <div className="w-12 h-12 rounded-full bg-white/50 flex justify-center items-center mr-5">
                <i className={`fas ${icon ? icon : 'fa-lightbulb'} text-blue-500 text-2xl`}></i>
            </div>
            <div>
                <h6 className={'text-lg font-semibold text-blue-900 mb-1'}>{title}</h6>
            <p className="text-blue-800 font-medium">
                {note}
            </p>
            </div>
        </div>
    );
}


NoteCard.propTypes = {
    icon: PropTypes.string,     // optional
    title: PropTypes.string,     // optional
    note: PropTypes.string.isRequired,  // required
};

export default NoteCard;