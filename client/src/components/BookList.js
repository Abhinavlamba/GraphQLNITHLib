import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';

class BookList extends Component {
  render() {
    return (
      <div>
      <ul id = "book-list">
      <li>Book Name</li>
      </ul>
      </div>
    );
  }
}
export default BookList;
