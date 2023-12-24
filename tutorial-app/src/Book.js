/*
  The props will be only displayed if it is provided
*/
const Book = (props) => {
  // console.log(props)
  // const { img, title, author, children } = props.book
  const { img, title, author, children, index } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      {/* you can only pass an expression and the expression returns a value */}
      <h2>{title}</h2>
      <h4>{author}</h4>
      <h3>{index + 1}</h3>
      {children}
    </article>
  )
}

export default Book
