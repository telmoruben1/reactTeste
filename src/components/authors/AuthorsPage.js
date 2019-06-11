import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import AuthorsList from "./AuthorsList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function AuthorsPage ({
    authors,
    loading,
    actions
}) {
  const [state, setRedirectToAddAuthorPage] = useState(false);
  useEffect(() => {
    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  });

  const handleDeleteAuthor = async author => {
    toast.success("Author deleted");
    try {
      await actions.deleteAuthor(author);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

    return (
      <>
        {state && <Redirect to="/editAuthors" />}
        <h2>Authors</h2>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-author"
              onClick={() => setRedirectToAddAuthorPage(true)}
            >
              Add Author
            </button>
            <AuthorsList
              onDeleteClick={handleDeleteAuthor}
              authors={authors}
            />
          </>
        )}
      </>
    );
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    authors: state.authors,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteAuthor: bindActionCreators(authorActions.deleteAuthor, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorsPage);
