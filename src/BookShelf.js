import React from "react";
import Book2 from "./Book2";
export default function Bookshelf(props) {
  let {
    bookSearch,
    bookList,
    destination = "null",
    updateLibrary,
    shelfClass,
    search,
    divName
  } = props;

  return (
    <div className="list-books">
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{divName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {props.bookList.map(b => {
                  if (b.shelf === destination) {
                    return (
                      <Book2
                        book={b}
                        destination={destination}
                        updateLibrary={updateLibrary}
                        shelfClass={shelfClass}
                        shelf={b.shelf}
                        search={search}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
