import React from "react";
import { Shimmer } from "react-shimmer";
import "./Table.css";

const Table = ({ isLoading, message, fields, columns }) => {
  const columnFields = columns.map((column) => <th key={column}>{column}</th>);

  return (
    <>
      {isLoading && (
        <>
          <Shimmer width="100%" height="50px" />
          <br />
          <Shimmer width="100%" height="50px" />
          <br />
          <Shimmer width="100%" height="50px" />
          <br />
          <Shimmer width="100%" height="50px" />
          <br />
          <Shimmer width="100%" height="50px" />
        </>
      )}
      {!isLoading && (
        <>
          {message && <p className="table-message">{message}</p>}
          <div className="table-area">
            <table>
              <thead className="table-header">
                <tr>{columnFields}</tr>
              </thead>
              <tbody>{fields}</tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Table;
