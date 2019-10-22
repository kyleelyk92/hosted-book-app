import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";
import Homepage from "./Homepage";

class BooksApp extends React.Component {
  state = { savedBooks: [] };

  componentDidMount() {
    BooksAPI.getAll().then(bookArray =>
      this.setState({ savedBooks: bookArray })
    );
  }
  updateLibrary = () => {
    BooksAPI.getAll().then(bookArray =>
      this.setState({ savedBooks: bookArray })
    );
  };

  render() {
    return (
      <>
        <Route
          path="/search"
          render={() => {
            return (
              <SearchPage
                savedBooks={this.state.savedBooks}
                updateLibrary={this.updateLibrary}
              />
            );
          }}
        />

        <Route
          path="/"
          exact
          render={() => {
            return (
              <Homepage
                bookList={this.state.savedBooks}
                updateLibrary={this.updateLibrary}
              />
            );
          }}
        />
      </>
    );
  }
}
export default BooksApp;
