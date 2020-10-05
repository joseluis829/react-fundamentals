// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  
  const [isValid, setIsValid ] = React.useState(false);
  const [error, setError] = React.useState();

  function handleSubmit(event) {
    const username = event.target.elements[0].value
    onSubmitUsername(username)
    event.preventDefault()
  }

  function handleChange(event) {
    const isLowerCase = event.target.value === event.target.value.toLowerCase()
    const newError = isLowerCase ? null : 'Username must be lower case'
    setIsValid(isLowerCase);
    setError(newError);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputUsername">Username:</label>
        <input onChange={handleChange} id="inputUsername" type="text" />
      </div>
      <button type="submit" disabled={!isValid} >Submit</button>
      <div role="alert">{isValid ? null : 'Username must be lower case'}</div>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
