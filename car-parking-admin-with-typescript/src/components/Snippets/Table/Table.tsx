import React from "react";
import "./Table.css";

type TableProps = {
  isLoading: boolean;
  fields: string | undefined | JSX.Element | JSX.Element[];
  columns: string[];
};

const Table: React.FC<TableProps> = ({ isLoading, fields, columns }) => {
  const columnFields = columns.map((column: string) => <th key={column}>{column}</th>);
  return (
    <>
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <>
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
