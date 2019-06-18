import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/inputs/TextInput";
import { Container, Row, Col  } from 'react-bootstrap';

const LoginForm = ({
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {

  return (
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
                    type="1"
                    onChange={onChange}
                    error={errors.password}
                />

                <button type="submit" disabled={saving} className="btn button-log-in" style={{width:'100%'}} >
                    {saving ? "Entrando..." : "Entrar"}
                </button>
            </form>
  );
};

LoginForm.propTypes = {
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default LoginForm;
