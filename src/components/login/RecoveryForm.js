import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/inputs/TextInput";

const RecoveryForm = ({
  onSave,
  onChange,
  onChangeAction,
  saving = false,
  errors = {}
}) => {

  return (
      <>
        <form onSubmit={onSave}>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                {errors.onSave}
                </div>
            )}
            <h1 className="form-titulos mt-1"> Recuperação de Senha </h1>
            
            <TextInput className="text-form-log-in mt-3"
                name="email"
                label="Indique o seu endereço de correio electrónico:"
                type="5"
                onChange={onChange}
                error={errors.designacao}
            />

            <button type="submit" disabled={saving} className="btn button-log-in mt-2" style={{width:'100%'}} >
                {saving ? "Recuperando..." : "Recuperar"}
            </button>
        </form>
        <button name="1" onClick={onChangeAction} type="submit" disabled={saving} className="btn button-log-in mt-2" style={{width:'100%'}} >
                {"Voltar"}
        </button>
      </> 
  );
};

RecoveryForm.propTypes = {
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  onChangeAction:PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default RecoveryForm;
