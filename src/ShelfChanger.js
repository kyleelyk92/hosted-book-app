import React from "react";

import * as BooksAPI from "./BooksAPI";

export default class ShelfChanger extends React.Component {
  bookShelfChange = (shelf, book) => {
    book.shelf = `${shelf}`;
    BooksAPI.update(book, shelf).then(() => this.props.updateLibrary());
  };

  render() {
    const { shelfClass, book, shelf } = this.props;

    return (
      <div
        id={`${book.title}${book.pageCount}`}
        className={`book-shelf-changer ${shelfClass}`}
      >
        <select
          defaultValue={shelf}
          onChange={e => this.bookShelfChange(e.target.value, book)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
