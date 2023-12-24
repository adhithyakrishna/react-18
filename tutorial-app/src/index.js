import React from 'react'
import ReactDOM from 'react-dom/client'
import EventExamples from './EventExamples'
// This is default import, we can name however we want
import Book from './Book'

// The is named import
import { books } from './books'

import './index.css'

/*
  Changes made to one component would automatically render it to other components
 */

/*
  Objects cannot be directly rendered in JSX   
   */
const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book, index) => {
        // Destructure it and pass it to the book component
        // index is not advisable to be used as a key prop, unless we are sure that the list length is not going to change
        // const { img, title, author, id } = book

        // return <Book book={book} key={book.id}></Book>
        return <Book {...book} index={index} key={book.id} />
      })}
    </section>
  )
}

/*CDN*/
// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/91n7p-j5aqL._AC_UL900_SR900,600_.jpg"
//     alt="Fourth Wing"
//   />
// )

/* 
  Public folder 
  http://localhost:3000/images/fourth-wing.jpg
  This is not a popular option is because these assets are not optimized 
*/
// const Image = () => <img src="./images/fourth-wing.jpg" alt="Fourth Wing" />

// const Title = () => <h2>Book title</h2>
// const Author = () => {
//   return (
//     // inline styles
//     <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
//       Rebecca
//     </h4>
//   )
// }
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
