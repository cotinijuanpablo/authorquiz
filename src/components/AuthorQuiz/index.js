import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Footer from '../Footer';
import Turn from '../Turn';
import Continue from '../Continue';
import {Link} from 'react-router-dom';

function AuthorQuiz({ turnData, highlight, onAnswerSelected, onContinue }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <Continue show={highlight === 'correct'} onContinue={onContinue} />
      <Link to="/add">Add an author</Link>
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
