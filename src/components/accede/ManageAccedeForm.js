import React, {useState } from "react";
import { connect } from "react-redux";
import {loginUser } from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import AccedeForm from "./AccedeForm";
import Footer from "../home/Footer";
import { toast } from "react-toastify";

function ManageAccedeForm({
  loginUser,
  history,
  ...props
}) {
 
  const [user, setUser] = useState({ ...props.user });
  const [isVerified, setVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  function formIsValid() {
    const { designacao, nif, morada,cp,localidade,email,telefone,nomeUtilizador,emailUtilizador,password,cofirPassword,conhecimento,condicoes } = user;
    const errors = {};

    if (!designacao) errors.designacao = "Designacao is required.";
    if (!nif) errors.nif = "nif is required";
    if (!cp) errors.cp = "Código de postal is required";
    if (!localidade) errors.localidade = "localidade is required";
    if (!morada) errors.morada = "morada is required";
    if (!email) errors.email = "email is required";
    if (!telefone) errors.telefone = "telefone is required";
    if (!nomeUtilizador) errors.nomeUtilizador = "nomeUtilizador is required";
    if (!emailUtilizador) errors.emailUtilizador = "emailUtilizador is required";
    if (!password) errors.password = "password is required";
    if (!cofirPassword) errors.cofirPassword = "cofirPassword is required";
    if (!conhecimento) errors.conhecimento = "conhecimento is required";
    if (!condicoes) errors.condicoes = "condicoes is required";
    if (!isVerified) errors.verified = " reCaptcha is required"; 

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  }
  function handleSave(event) {
    event.preventDefault();
    
    if (!formIsValid()) return;
    setSaving(true);
    loginUser(user)
      .then(() => {
        toast.success("User saved.");
        history.push("/users");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }
  function verifyCallback(response) {
    if(response) {
      setVerified(true);
    }
  }
  return (
    <>
        <AccedeForm
            errors={errors}
            onSave={handleSave}
            onChange={handleChange}
            verifyCallback={verifyCallback}
            saving={saving}
        />
    </>
  );
}

ManageAccedeForm.propTypes = {
  user:PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const user = state.user;
  return {
    user,
  };
}

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageAccedeForm);
