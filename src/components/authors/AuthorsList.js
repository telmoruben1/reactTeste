import React from "react";
import PropTypes from "prop-types";
import ButtonDelete from "../common/buttons/ButtonDelete";
import { Link } from "react-router-dom";

const AuthorsList = ({authors,onDeleteClick}) => {
  return (
      <table className="table">
        <thead>
          <tr>
            <th>Author</th>
            <th>Country</th>
            <th>Nobel Awards</th>
            <th>Number Books</th>
            <th>Genre</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {authors.map(author => {
            return (
              <tr key={author.id}>
                <td>{author.name}</td>
                <td>{author.country}</td>
                <td>{author.nobelAwards}</td>
                <td>{author.numbersBooks}</td>
                <td>{author.genre}</td>
                <td>
                  <ButtonDelete onClick={() => onDeleteClick(author)}></ButtonDelete>
                </td>
                <td>
                <Link to={"/editAuthors/" + author.id}>
                  <button className="btn btn-warning">
                      Update
                  </button>
                </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
};

AuthorsList.propTypes = {
  authors: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default AuthorsList;
