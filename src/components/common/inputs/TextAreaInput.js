import React from 'react';
import PropTypes from "prop-types";

const TextAreaInput = ({ name, label, onChange, placeholder, error }) => {
    return (
        <>
            <label className="text-form-aderir" htmlFor={name}>{label}</label>
            <textarea
                name={name}
                className="form-control"
                placeholder={placeholder}
                onChange={onChange}>
            </textarea> 
            {error && <div style={{color:'#ee0000'}}>Campo de preenchimento obrigatório</div>}
        </>
    );
};
TextAreaInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    valueString: PropTypes.string,
    valueInt: PropTypes.number,
    error: PropTypes.string
  };

export default TextAreaInput;