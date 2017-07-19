import React from 'react';
import PropTypes from 'prop-types';

export const Timetable = ({ name, id, timetable }) => {
    return (
        <div>
            <p>
                Name: {name}
            </p>
            <p>
                Id: {id}
            </p>
            <p>
                Timetable: {timetable}
            </p>
        </div>
    )
}