import React from 'react'
import './authModal.css'

const AuthModal = ({setShowModal}) => {

    const handleClick = () => {
        setShowModal(false)
    }

    const isSignUp = true

  return (
    <div className='auth-modal scale-up-center'>
        <div className='close-icon' onClick={handleClick}>X</div>
        
        <h2>{isSignUp ? "Create Account" : "Log In"}</h2>
        <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Private Policy and Cookies Policy</p>

        AUTH MODAL
    </div>
  )
}

export default AuthModal