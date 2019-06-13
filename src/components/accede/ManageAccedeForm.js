import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {saveUser } from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import AccedeForm from "./AccedeForm";
import { newUser } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageAccedeForm({
  saveUser,
  history,
  ...props
}) {
 
  const [user, setAuthor] = useState({ ...props.user });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  function formIsValid() {
    const { name, country, genre } = user;
    const errors = {};

    if (!name) errors.name = "Name is required.";
    if (!country) errors.country = "country is required";
    if (!genre) errors.genre = "genre is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveUser(user)
      .then(() => {
        toast.success("User saved.");
        history.push("/users");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }
    <AccedeForm
      errors={errors}
      onSave={handleSave}
      saving={saving}
    />
}

ManageAuthorForm.propTypes = {
  saveUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const user = newUser;
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
)(ManageAccedeForm);
