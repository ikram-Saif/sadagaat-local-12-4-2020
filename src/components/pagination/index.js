import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <React.Fragment>
      <nav
        aria-label="Page navigation"
        style={{ position: "absolute", bottom: "0%" }}
      >
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item${number === 1 && " active"}`}
              onClick={() => paginate(number)}
              style={{ float: "left" }}
            >
              <NavLink className="page-link" actveClassName="active">
                {number}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
