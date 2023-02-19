import React from "react";

const Square = ({ value, onClick }) => (
  <button className="m-3 btn btn-outline-dark" onClick={onClick}>
    {value ? value : "a"}
  </button>
);

export default Square;
