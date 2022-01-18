import React from "react";
import TableHeader from "./tableheader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, OnSortClick, data }) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        OnSortClick={OnSortClick}
      ></TableHeader>
      <TableBody data={data} columns={columns}></TableBody>
    </table>
  );
};

export default Table;
