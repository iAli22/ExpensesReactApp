import React from "react";
import { Link } from "react-router-dom";

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>

    <button>
      <Link to={`/edit/${id}`}>Edit</Link>
    </button>
  </div>
);

export default ExpenseListItem;
