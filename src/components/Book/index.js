import React from 'react';
import './index.css';

function Book({ title, onClick }) {
  return (<div className="answer" onClick={() => {onClick(title);}}>
    <h4>{title}</h4>
  </div>)
}

export default Book;