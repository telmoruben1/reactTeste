import React from 'react';
import PropTypes from "prop-types";

const ButtonDelete = ({
    onClick
}) => {
    return (
        <button className="btn btn-danger" onClick={onClick}>
            Delete
        </button>
    );
}
ButtonDelete.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default ButtonDelete;