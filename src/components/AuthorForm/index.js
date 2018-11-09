import React from 'react'
import './index.css';

//Leer PureComponent
class AuthorForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: '',
        }
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
    }

    // This optino was also nice, but less explicit
    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSpecifiedFieldChange(name, event) {
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    handleAddBook(event){
        this.setState({
            'books' : this.state.books.concat([this.state.bookTemp]),
            'bookTemp': ''
        })
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="AddAuthorForm__input">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.onSpecifiedFieldChange.bind(this, 'name')}></input>
            </div>
            <div className="AddAuthorForm__input">
                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onSpecifiedFieldChange.bind(this, 'imageUrl')}></input>
            </div>
            <div className="AddAuthorForm__input">
                <label htmlFor="bookTemp">Books</label>
                {this.state.books.map((book) => <p key={book} >{book}</p>)}
                <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onSpecifiedFieldChange.bind(this, 'bookTemp')}></input>
                <input type="button" value="+" onClick={this.handleAddBook}></input>
            </div>
            <input type="submit" value="Add" />
        </form>
    }

}

export default AuthorForm;
