import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    author: 'Rebecca Yarros',
    title: 'Fourth Wing',
    img: './images/fourth-wing.jpg',
    id: 1,
  },
  {
    author: 'Jordan Moore',
    title: 'Interesting facts for curious minds',
    img: './images/curious-minds.jpg',
    id: 2,
  },
]

/*
  Changes made to one component would automatically render it to other components
 */

/*
  Objects cannot be directly rendered in JSX   
   */
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        // Destructure it and pass it to the book component
        // index is not advisable to be used as a key prop, unless we are sure that the list length is not going to change
        // const { img, title, author, id } = book

        // return <Book book={book} key={book.id}></Book>
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

/*
  We use 
*/
/*
  The props will be only displayed if it is provided
*/
const Book = (props) => {
  // console.log(props)
  // const { img, title, author, children } = props.book
  const { img, title, author, children } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      {/* you can only pass an expression and the expression returns a value */}
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
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
