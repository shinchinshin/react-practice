import React from 'react'
import Post from '../components/Post'
import usePosts from '../hooks/usePosts'
import classes from './Home.module.css'
import { useAuth } from '../provider/AuthProvider'

/* const initPosts = [
  {
    id: 1,
    title: "Let's learn React!",
  },
  {
    id: 2,
    title: 'How to install Node.js',
  },
  {
    id: 3,
    title: 'Basic HTML',
  },
] */

const Home = () => {
  const { posts } = usePosts() // import usePosts Hook
  const { isLoggedIn } = useAuth()

  console.log('fromt home:', isLoggedIn)

  return (
    <div>
      <div className={classes.newFeed}>
        <h1>Feed</h1>
        {isLoggedIn && <input type="submit" value="New Feed"></input>}
      </div>
      {posts &&
        posts.map((post) => {
          // return post by post with key = post's id
          return <Post key={post.id} post={post} />
        })}
    </div>
  )
}

export default Home
