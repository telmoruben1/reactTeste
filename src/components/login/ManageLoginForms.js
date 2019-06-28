import React, {useState } from "react";
import { connect } from "react-redux";
import {loginUser } from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import RecoveryForm from "./RecoveryForm";
import Erro from "./Erro";
import { toast } from "react-toastify";
import CcForm from "./CcForm";

function ManageLoginForms({
  loginUser,
  history,
  ...props
}) {
 
  const [user, setUser] = useState({ ...props.user });
  const [typeform, setTypeForm] = useState(1);
  // const [errors, setErrors] = useState({});
  // const [saving, setSaving] = useState(false);

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
  function handleChangeAction(event) {
    const { name, value } = event.target;
    if(parseInt(name) == 1){
      setTypeForm(1);
    } else if (parseInt(name) == 2) {
      setTypeForm(2)
    } else if (parseInt(name) == 3){
      setTypeForm(3)
    }
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
    console.log("2");
    console.log(user);
    // if (!formIsValid()) return;
    // setSaving(true);
    loginUser(user)
      .then(() => {
        toast.success("User saved.");
        history.push("/users");
      })
      .catch(error => {
        // setSaving(false);
        // setErrors({ onSave: error.message });
      });
  }
  // function verifyCallback(response) {
  //   if(response) {
  //     setVerified(true);
  //   }
  // }

  return (
    <div className="box-login">
        {(() => {
        switch(typeform) {
          case 1:
            return <LoginForm
                      // errors={errors}
                      onSave={handleSave}
                      onChangeAction={handleChangeAction}
                      onChange={handleChange}
                      // verifyCallback={verifyCallback}
                      // saving={saving}
                    />
          case 2:
            return <RecoveryForm
                      // errors={errors}
                      // onSave={handleSave}
                      onChangeAction={handleChangeAction}
                      // verifyCallback={verifyCallback}
                      // saving={saving}
                    />;
          case 3:
            return <CcForm
                      // errors={errors}
                      // onSave={handleSave}
                      onChangeAction={handleChangeAction}
                      // verifyCallback={verifyCallback}
                      // saving={saving}
                    />; 
          default:
            return null;
        }
      })()}
    </div>
  );
}

ManageLoginForms.propTypes = {
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
)(ManageLoginForms);
