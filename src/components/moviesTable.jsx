import React from "react";
import Like from "./common/like";
import TableHeader from "./common/tableheader";

class MoviesTable extends React.Component {
  columns = [
    { label: "Title", path: "title" },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    { key: "like" },
    { key: "delete" },
  ];
  render() {
    const { movies, onLikeClick, onDeleteClick, sortColumn, OnSortClick } =
      this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          OnSortClick={OnSortClick}
        ></TableHeader>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  liked={movie.liked}
                  onClick={() => {
                    onLikeClick(movie);
                  }}
                />
              </td>
              <td>
                <button
                  onClick={() => {
                    onDeleteClick(movie);
                  }}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
