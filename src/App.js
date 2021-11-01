import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ShelfComponent from './shelfComponent'
import SearchComponent from './searchComponent'
import { Route } from "react-router-dom"


class BooksApp extends React.Component {
state = {
  bookList: []

}
  //this function will fitch the books using getAll() method
   componentDidMount =  () =>{
   BooksAPI.getAll().then((bookList)=> {
     this.setState({bookList : bookList})
   })
 }
  //this function is resposibale foe changing the book categories
  changeBookCategory =  (book,shelf) => {    
    //recieve the book and shelf from the onChang method
    BooksAPI.update(book, shelf).then(()=>{
      this.componentDidMount()
    })
    //calling the method that will fetch the books
     
  }
  render() {
    
    return (
      <div className="app">
      {/* using the <Route> to move between pages */}
      <Route exact path="/" render={()=>(
       <ShelfComponent bookList={this.state.bookList} changeBookCategory={this.changeBookCategory}/>
      )}/>

      <Route path="/search" render={()=>(
       <SearchComponent 
        changeBookCategory={this.changeBookCategory} bookList={this.state.bookList} />
      )}/>
      
        
      </div>
    )
  }
}

export default BooksApp
