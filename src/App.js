import React from 'react'
import './App.css'
import Nav from './components/Nav.js'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.js'
import Profile from './Pages/Profile.js'
import Create from './Pages/Create.js'
import PostDetails from './Pages/PostDetails'
import Login from './Pages/Login'
import GuardedRoute from './guards/GuardedRoute'
import { useAuth } from './provider/AuthProvider'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/" />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/" />}>
          <Route path="/create" element={<Create />} />
        </Route>
        <Route path="/post/:id" element={<PostDetails />} />
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
