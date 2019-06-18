import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/inputs/TextInput";

const LoginForm = ({
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
            <h1 className="form-titulos mt-1"> Entrar </h1>
            
            <TextInput className="text-form-log-in mt-3"
                name="utilizador"
                label="Utilizador:"
                type="5"
                onChange={onChange}
                error={errors.designacao}
            />
            <TextInput className="text-form-log-in"
                name="senha"
                label="Senha:"
                type="6"
                onChange={onChange}
                error={errors.password}
            />
            <a name="2" onClick={onChangeAction} className="label-recovery-name">Esqueceu a sua senha?</a>

            <button type="submit" disabled={saving} className="btn button-log-in mt-2" style={{width:'100%'}} >
                {saving ? "Entrando..." : "Entrar"}
            </button>
        </form>
        <button onClick="" className="btn button-card-person mt-2" style={{width:'100%'}} >
          {"Cartão de Cidadão"}
        </button>
        <button onClick="" className="btn button-gts mt-2" style={{width:'100%'}} >
          {"GTS ID"}
        </button>
        <a name="3" onClick={onChangeAction} className="label-recovery-name">Como entrar atravês do CC?</a>
      </> 
  );
};

LoginForm.propTypes = {
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default LoginForm;
