import React from 'react';
import AuthorQuiz from '../AuthorQuiz';
import {shuffle, sample} from 'underscore'

/**
 * @description get the Author and books to be used in the iteration
 * @param {Object} authors authors with its attributes
 */
function getTurnData(authors) {
    // I step over every author and concatenate into the previous the current author books
    const allBooks = authors.reduce(function(previous, current, index){
        return previous.concat(current.books);
    }, []);
    //I have my four books
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    //I need any one of the authors to be selected as the author for the question.
    const answer = sample(fourRandomBooks);
    // the books I use are the four books randomly selected
    // the author select must be one of the four random books' author
    // so author is
        //find in the authors the first author in which a cond is TRUE
        //The condition is that one of the authors book is satisfactory gor another condition
        //That condition is that its title (entry in books) is the same as answer
        //answer is one of the four books title and was defined above
    return {
        books: fourRandomBooks,
        author: authors.find((author) =>
            author.books.some((title) =>
                title === answer
            )
        )
    };
};

class AppGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: props.authors,
            turnData: getTurnData(props.authors),
            highlight: ''
        }
        this.onAnswerSelected = this.onAnswerSelected.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    onAnswerSelected(answer){
        const isCorrect = this.state.turnData.author.books.some((book) => book === answer)
        this.setState({
            highlight: isCorrect ? 'correct' : 'wrong'
        })
    }

    resetState(){
        this.setState({
            turnData: getTurnData(this.state.authors),
            highlight: ''
        })
    }

    render() {
        return (
            <AuthorQuiz {...this.state}
                onAnswerSelected={this.onAnswerSelected}
                onContinue={this.resetState}
            />
        )
    } 

}

export default AppGame;
