import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const firstBook = {
  author: 'Rebecca Yarros',
  title: 'Fourth Wing',
  img: './images/fourth-wing.jpg',
}

const secondBook = {
  author: 'Jordan Moore',
  title: 'Interesting facts for curious minds',
  img: './images/curious-minds.jpg',
}

/*
  Changes made to one component would automatically render it to other components
 */
const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}

/*
  The props will be only displayed if it is provided
*/
const Book = ({ img, title, author }) => {
  // console.log(props)
  // const { img, title, author } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      {/* you can only pass an expression and the expression returns a value */}
      <h2>{title}</h2>
      <h4>{author}</h4>
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
