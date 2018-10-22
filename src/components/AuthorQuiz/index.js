import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Footer from '../Footer';
import Turn from '../Turn';
import Continue from '../Continue';

function AuthorQuiz({ turnData }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
