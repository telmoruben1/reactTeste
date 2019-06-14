import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ name, label, onChange, placeholder, type, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }
  var tipo;
  switch(parseInt(type)) {
    case 1:
      tipo = "password";
      break;
    case 2:
      tipo = "number";
      break;
    case 3:
      tipo = "text";
      break;
    case 4:
      tipo = "checkbox";
      break;
    default:
      // code block
  }
  console.log(error);
  return (
    <div className={wrapperClass}>
      { parseInt(type) != 4 ? <label className="text-form-aderir" htmlFor={name}>{label}</label> : ""}
      <div className="field">
        <input
          type={tipo}
          name={name}
          className={ parseInt(type) != 4 ? "form-control" : "mr-1"}
          placeholder={placeholder}
          onChange={onChange}
        />
        { parseInt(type) == 4 ? <span className="text-form-aderir">{label}</span> : ""}
        {error && <div style={{color:'#ee0000'}}>Campo de preenchimento obrigatório</div>}
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
