import React from 'react'


class BookComponent extends React.Component {

  render() {
    /*this condition will appear the image if it exists if not it will be empty image
     and it will prevent errors if there is no image */ 
      let thumbNailExists ='';
      if (!this.props.bookDetails.imageLinks){
        thumbNailExists =  '';
      }
      else {
       thumbNailExists =  this.props.bookDetails.imageLinks.thumbnail ;
           }
    
      let autherExists ='';
      if (!this.props.bookDetails.authors){
        autherExists =  '';
      }
      else {
       autherExists =  this.props.bookDetails.authors ;
           }
    
   return (

   <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, 
                              backgroundImage: `url("${thumbNailExists}")`}}></div>
                            <div className="book-shelf-changer">
{/*passing the bbk and the shelf for the update method if the user want to change categor*/}

                              <select onChange={(event)=>                                                                                                            this.props.changeBookCategory (
                                this.props.bookDetails,event.target.value)}
                                value={this.props.bookShelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                              
                            </div>
                          </div>
{/*showing the title and the auther under the book image*/}
                          <div className="book-title">{this.props.bookDetails.title}</div>
                          <div className="book-authors">{autherExists}</div>
                        </div>
   )
  }
}
export default BookComponent