import React from 'react'

const Main = ({ authService }) => {
  const signout = () => {
    authService.logout()
  }
  return (
    <>
      <h1>I'm Main!</h1>
      <button onClick={signout}>Sign out</button>
    </>
  )
}

export default Main
