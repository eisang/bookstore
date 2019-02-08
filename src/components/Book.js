import React, { Component } from "react";

export default class Book extends Component {
  render() {
    return (
      <div>
        <p>
          Title: {this.props.book.title}
          <button
            className="bg-primary"
            onClick={() => this.props.addBook(this.props.book.id)}
          >
            Add book
          </button>
        </p>
      </div>
    );
  }
}
