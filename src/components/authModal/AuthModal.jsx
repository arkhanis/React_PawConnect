import React from 'react'
import './authModal.css'
import { useState } from 'react'

const AuthModal = ({ setShowModal }) => {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)

  const isSignUp = true

  const handleClick = () => {
    setShowModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      if (isSignUp && (password !== confirmPassword)) {
        setError('Passwords do not match!')
      }
      console.log("make a post request to our database")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='auth-modal scale-up-center'>
      <div className='close-icon' onClick={handleClick}>X</div>

      <h2>{isSignUp ? "Create Account" : "Log In"}</h2>
      <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Private Policy and Cookies Policy</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id='email'
          name='email'
          placeholder="Email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id='password'
          name='password'
          placeholder="Password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        { isSignUp && <input
          type="password"
          id='password-check'
          name='password-check'
          placeholder="Confirm password"
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />}
        
        <input type="submit" className='secondary-button' />

      </form>

      <hr />
      <h2>Get the app</h2>
      AUTH MODAL
    </div>
  )
}

export default AuthModal