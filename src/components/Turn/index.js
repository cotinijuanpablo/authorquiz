import React from 'react';
import Book from '../Book';
import './index.css';

function Turn({ author, books }) {
  return (<div className="row turn" style={{ backgroundColor: "white" }}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author"></img>
    </div>
    <div className="col-6">
      {/* I need to define the key as reacts needs a unique identifier*/}
      {books.map((title) => <Book title={title} key={title} />)}
    </div>
  </div>)
};

export default Turn;