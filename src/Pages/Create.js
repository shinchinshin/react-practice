import { useState } from 'react'
import React from 'react'
import classes from './Create.module.css'
import usePosts from '../hooks/usePosts'

const Create = () => {
  const { posts, setNewPosts } = usePosts() // import usePosts Hook
  const [newPostTitle, setNewPostTitle] = useState('')
  const [newPostBody, setNewPostsBody] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    //POST request to "https://jsonplaceholder.typicode.com/posts"

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: newPostTitle,
          body: newPostBody,
          userId: Math.floor(Math.random() * 1000),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await res.json()
      console.log(data)
      //return data
      setNewPosts([...posts, data])
    } catch (e) {
      console.log(e)
    }
    setNewPostTitle('')
    setNewPostsBody('')
  }

  return (
    <div>
      <form className={classes.fillTitle} onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" value={newPostBody} onChange={(e) => setNewPostsBody(e.target.value)} required />
        <input type="submit" value="post"></input>
      </form>
    </div>
  )
}

export default Create
