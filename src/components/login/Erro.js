import React from "react";
import PropTypes from "prop-types";

const Erro = ({
  onChangeAction
}) => {

  return (
      <>
        <h1 className="form-titulos mt-1"> Erro </h1>
        
        <label className="text-form-aderir">Não foi possivel efectuar a autenticação. Confirme se os dados estão corretos.</label>
        <button name="1" onClick={onChangeAction} type="submit" className="btn button-log-in mt-2" style={{width:'100%'}} >
                {"Voltar"}
        </button>
      </> 
  );
};

Erro.propTypes = {
    onChangeAction:PropTypes.func.isRequired,
};

export default Erro;
