import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ onClick, text }) => {
    <div onClick={onClick}>
        {text}
    </div>
}

Message.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Message;