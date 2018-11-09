import React from 'react';
import Book from '../Book';
import PropTypes from 'prop-types';
import './index.css';

function Turn({ author, books, highlight, onAnswerSelected}) {

  function highlightToBgColor(highlight){
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    }
    return mapping[highlight];
  }
  // Should make a class? instead of style?
  return (<div className="row turn" style={{ backgroundColor: highlightToBgColor(highlight) }}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author"></img>
    </div>
    <div className="col-6">
      {/* I need to define the key as reacts needs a unique identifier*/}
      {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected}/>)}
    </div>
  </div>)
};

Turn.propTypes = {
  author: PropTypes.shape({
    name:         PropTypes.string.isRequired,
    imageUrl:     PropTypes.string.isRequired,
    imageSource:  PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  books: PropTypes.arrayOf(PropTypes.string.isRequired),
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired,
}

/**
 *  name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
 */

export default Turn;