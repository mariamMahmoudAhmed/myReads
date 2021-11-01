import React from 'react'
import BookComponent from './bookComponent'
import { Link } from "react-router-dom"


class ShelfComponent extends React.Component {

  render() {
    return (
              <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
      
                             {   
      /*filtering and mapping the books depending on there categories*/
      this.props.bookList.filter(book=>book.shelf==="currentlyReading").map(book=>(
                                    <li key={book.id}>
                                       <BookComponent bookDetails={book} changeBookCategory={this.props.changeBookCategory}
                                         bookShelf={book.shelf}/>
                                     </li> 
                                   ))
                               }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                                
                               {/*filtering and mapping the books depending on there categories*/
                                this.props.bookList.filter(book=>book.shelf==="wantToRead").map(book=>(
                                    <li key={book.id}>
                                       <BookComponent bookDetails={book} changeBookCategory={this.props.changeBookCategory}
                                               bookShelf={book.shelf} />
                                     </li> 
                                   ))
                               }                      
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
 
                               {
                                /*filtering and mapping the books depending on there categories*/
                                this.props.bookList.filter(book=>book.shelf==="read").map(book=>(
                                    <li key={book.id}>
                                       <BookComponent bookDetails={book} changeBookCategory={this.props.changeBookCategory}
                                                  bookShelf={book.shelf}  />
                                     </li> 
                                   ))
                               }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link  to="/search">Add a book</Link >
            </div>
          </div>
    )
  }
}
export default ShelfComponent