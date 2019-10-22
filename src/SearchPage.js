import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book2 from "./Book2";

export default class SearchPage extends React.Component {
  state = { query: "", bookSearch: [], error: false };

  updateSearch = value => {
    if (value.length > 0) {
      BooksAPI.search(value)
        .then(response => {
          this.setState({
            bookSearch: [],
            error: false
          });
          return response;
        })
        .then(responseArray => {
          responseArray.length > 0 &&
            responseArray.forEach(book => {
              this.setState(prevState => {
                return {
                  bookSearch: [...prevState.bookSearch, book],
                  error: false
                };
              });
            });
        })
        .then(() => {
          if (this.state.bookSearch.length === 0) {
            this.setState({ error: true });
          }
        });
    }
  };

  render() {
    let { savedBooks } = this.props;
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                onChange={e => this.updateSearch(e.target.value)}
                placeholder="Search by title or author"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.bookSearch.map(bookObj => {
                let book =
                  savedBooks.find(b => {
                    if (b.id === bookObj.id) {
                      return b;
                    }
                  }) || bookObj;

                let currentShelf = book.shelf;
                return (
                  <Book2
                    bookList={this.state.bookSearch}
                    shelfClass={book.shelf}
                    shelf={currentShelf || "none"}
                    book={book}
                    updateLibrary={this.props.updateLibrary}
                  />
                );
              })}
            </ol>
            {this.state.error && (
              <div>No results found, try a different search term</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
