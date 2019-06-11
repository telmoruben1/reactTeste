import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ name, label, onChange, placeholder, valueString, valueInt, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type={valueString != null ? "text" : "number"}
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={valueString != null ? valueString : valueInt}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  valueString: PropTypes.string,
  valueInt: PropTypes.number,
  error: PropTypes.string
};

export default TextInput;
