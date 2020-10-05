// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('');
  
  function handleSubmit(event) {
    const username = event.target.elements[0].value
    onSubmitUsername(username)
    event.preventDefault()
  }

  function onChangeUsername(event) {
    const inputText = event.target.value
    setUsername(inputText.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputUsername">Username:</label>
        <input id="inputUsername" type="text" value={username} onChange={onChangeUsername} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
