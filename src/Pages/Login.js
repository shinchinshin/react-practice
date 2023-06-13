import React, { useState } from 'react'
import Classes from './Login.module.css'
import { useAuth } from '../provider/AuthProvider'
import { useNavigate } from 'react-router-dom'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(usernameInput, passwordInput)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <form className={Classes.loginForm} onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          placeholder="Username"
          required
        />
        <label>Pasword</label>
        <input
          type="Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          placeholder="Password"
          required
        />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  )
}

export default Login
