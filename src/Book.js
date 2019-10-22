import React from "react";

export default function Booklist(props) {
  let book = props.book;
  console.log(book);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url("${book.imageLinks.thumbnail}")`
            }}
          />
          <div
            id={`${book.title}${book.pageCount}`}
            className="book-shelf-changer"
          >
            <select
              defaultValue={book.shelf}
              onChange={e => this.bookStatusChange(e.target.value, book)}
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
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors &&
            book.authors.map(author => {
              return <span>{author}</span>;
            })}
        </div>
      </div>
    </li>
  );
}
