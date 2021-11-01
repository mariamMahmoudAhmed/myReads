import React from 'react'
import BookComponent from './bookComponent'
import * as BooksAPI from './BooksAPI'
import { Link } from "react-router-dom"


class SearchComponent extends React.Component {
state = {
  query : '',
  books: []
}
    /*this function will get the user input and  pushing it to the query state 
    then calling the search function to search the requested books */
    updateQuery = (query) => {
    this.setState({ query: query});
     this.fetchBookList(query);
    }
  
    fetchBookList = (query) => {
      
      try{
    if(!query){
      this.setState({books: []});
      
    }
    else { 
      
       BooksAPI.search(query).then((books)=> {
         if (books.error){
           this.setState({books: []});
         }
         else 
       this.setState({books : books});    
        })}
        }
      
      catch(error) {
        console.log(error);
        return <h1>Something went wrong.</h1>;
  
      }

    }

  render() {
   
    return (
      
    <div className="search-books">
      
            <div className="search-books-bar">
              <Link  to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"
                 value={this.state.query}
                 onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
 { /*mapping the searched books and showing it in a list */
   
 this.state.books.map(book =>{ 
 let bookShelfCategory ="none";
  /*the book will take it's category from the bookList when the 2 ID's matches*/
 this.props.bookList.map(boook =>(
 boook.id===book.id ?
 bookShelfCategory=boook.shelf : 
   ''
));
 
return (
   <li key={book.id}> 
   <BookComponent bookDetails={book} changeBookCategory={this.props.changeBookCategory}
    bookShelf={bookShelfCategory}/>        
     </li>
);
})
}
</ol>
</div>
 </div>
    )
  }
}
export default SearchComponent