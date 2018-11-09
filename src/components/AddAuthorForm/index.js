import React from 'react';
import './index.css';
import AuthorForm from '../AuthorForm';

function AddAuthorForm(prop) {
    
    //Should I create a conceptual Author?
    //So I can sue it onstead of beign sure the prop name are right inside AuthorForm and un here when I push those
    const onAddAuthor= (author) =>{
        prop.authors.push(author);
        prop.history.push('/')
    }
    return (
        <div className="AddAuthorForm">
            <h1>Add an Author</h1>
            <AuthorForm onAddAuthor={onAddAuthor}></AuthorForm>
        </div>
    )
}
export default AddAuthorForm;
