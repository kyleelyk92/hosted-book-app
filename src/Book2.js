import React from "react";
import ShelfChanger from "./ShelfChanger";

export default function Book({ book, updateLibrary, shelfClass, shelf }) {
  const noCoverImage = "http://myweekend.in/img/noImageFound.jpg";
  const bookImage =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : noCoverImage;

  switch (shelf) {
    case "none":
      shelfClass = "none";
      break;
    case "wantToRead":
      shelfClass = "want-to-read";
      break;
    case "read":
      shelfClass = "read";
      break;
    case "currentlyReading":
      shelfClass = "currently-reading";
      break;
    default:
      shelfClass = "none";
  }

  const title = book.title ? book.title : "No title available";
  return (
    <li key={Math.random() + book.title}>
      <div className="book">
        <div className="book-top">
          <div
            className={`"book-cover"`}
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url("${bookImage}")`
            }}
          />
          <ShelfChanger
            shelf={shelf}
            shelfClass={shelfClass}
            updateLibrary={updateLibrary}
            book={book}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {book.authors &&
            book.authors.map(author => {
              return <span key={author}>{author}</span>;
            })}
        </div>
      </div>
    </li>
  );
}
