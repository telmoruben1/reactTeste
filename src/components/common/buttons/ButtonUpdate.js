import React from 'react';
import PropTypes from "prop-types";

const ButtonUpdate = ({
    onClick
}) => {
    return (
        <button className="btn btn-warning" onClick={onClick}>
            Update
        </button>
    );
}
ButtonUpdate.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default ButtonUpdate;




