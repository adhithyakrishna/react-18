const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log('handle form input')
  }

  const handleButtonClick = () => {
    alert('button click handled')
  }

  const handeFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }

  /* functionality that belongs to a component belongs to that only component */
  return (
    <section>
      <form onSubmit={handeFormSubmission}>
        <h2>Typical form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* button cannot have onsubmit property */}
        <button type="submit">submit</button>
        <button type="button" onClick={() => console.log('click me')}>
          click me!
        </button>
      </form>
      {/* <button onClick={handleButtonClick}>click me!</button> */}
    </section>
  )
}

export default EventExamples
