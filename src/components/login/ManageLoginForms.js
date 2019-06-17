import React, {useState } from "react";
import { connect } from "react-redux";
import {saveUser } from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import RecoveryForm from "./RecoveryForm";
import Footer from "../home/Footer";
import { toast } from "react-toastify";

function ManageLoginForms({
  saveUser,
  history,
  ...props
}) {
 
  const [user, setUser] = useState({ ...props.user });
  const [typeform, setTypeForm] = useState(1);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

//   function formIsValid() {
//     const { designacao, nif, morada,cp,localidade,email,telefone,nomeUtilizador,emailUtilizador,password,cofirPassword,conhecimento,condicoes } = user;
//     const errors = {};

//     if (!designacao) errors.designacao = "Designacao is required.";
//     if (!nif) errors.nif = "nif is required";
//     if (!cp) errors.cp = "Código de postal is required";
//     if (!localidade) errors.localidade = "localidade is required";
//     if (!morada) errors.morada = "morada is required";
//     if (!email) errors.email = "email is required";
//     if (!telefone) errors.telefone = "telefone is required";
//     if (!nomeUtilizador) errors.nomeUtilizador = "nomeUtilizador is required";
//     if (!emailUtilizador) errors.emailUtilizador = "emailUtilizador is required";
//     if (!password) errors.password = "password is required";
//     if (!cofirPassword) errors.cofirPassword = "cofirPassword is required";
//     if (!conhecimento) errors.conhecimento = "conhecimento is required";
//     if (!condicoes) errors.condicoes = "condicoes is required";
//     if (!isVerified) errors.verified = " reCaptcha is required"; 

//     setErrors(errors);
//     // Form is valid if the errors object still has no properties
//     return Object.keys(errors).length === 0;
//   }
//   function handleChange(event) {
//     const { name, value } = event.target;
//     setUser(prevUser => ({
//       ...prevUser,
//       [name]: value
//     }));
//   }
//   function handleSave(event) {
//     event.preventDefault();
    
//     if (!formIsValid()) return;
//     setSaving(true);
//     saveUser(user)
//       .then(() => {
//         toast.success("User saved.");
//         history.push("/users");
//       })
//       .catch(error => {
//         setSaving(false);
//         setErrors({ onSave: error.message });
//       });
//   }
//   function verifyCallback(response) {
//     if(response) {
//       setVerified(true);
//     }
//   }

  return (
    <div className="box-login">
        {(() => {
        switch(typeform) {
          case 1:
            return <LoginForm></LoginForm>;
          case 2:
            return <p>2</p>;
          case 3:
            return <p>3</p>;
          default:
            return null;
        }
      })()}
    </div>
  );
}

ManageLoginForms.propTypes = {
  user:PropTypes.object.isRequired,
  saveUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const user = state.user;
  return {
    user,
  };
}

const mapDispatchToProps = {
  saveUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageLoginForms);
