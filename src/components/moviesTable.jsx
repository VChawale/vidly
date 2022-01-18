import React from "react";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends React.Component {
  columns = [
    { label: "Title", path: "title" },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onClick={() => {
            this.props.onLikeClick(movie);
          }}
        />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => {
            this.props.onDeleteClick(movie);
          }}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, sortColumn, OnSortClick } = this.props;

    return (
      <Table
        data={movies}
        sortColumn={sortColumn}
        OnSortClick={OnSortClick}
        columns={this.columns}
      ></Table>
    );
  }
}

export default MoviesTable;
