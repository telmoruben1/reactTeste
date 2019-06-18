import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/inputs/TextInput";

const CcForm = ({
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
            <h1 className="form-titulos mt-1"> Cartão de Cidadão </h1>
            
            <TextInput className="text-form-log-in mt-3"
                name="email"
                label="Para que possa aceder usando o seu Cartão de Cidadão, deverá ativar esta forma de acesso. Por favor indique o seu email."
                type="5"
                onChange={onChange}
                error={errors.designacao}
            />

            <button type="submit" disabled={saving} className="btn button-log-in mt-2" style={{width:'100%'}} >
                {saving ? "Submetendo..." : "Submeter"}
            </button>
        </form>
        <button name="1" onClick={onChangeAction} type="submit" disabled={saving} className="btn button-log-in mt-2" style={{width:'100%'}} >
                {"Voltar"}
        </button>
      </> 
  );
};

CcForm.propTypes = {
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CcForm;
