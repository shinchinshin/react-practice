import React from 'react'
import classes from './PostDetails.module.css'
import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'

function PostDetails() {
  const { id } = useParams()
  const { post, isLoading } = usePost(id)

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={classes.newPost}>
      {post && (
        <>
          <h1>{post.title} </h1>
          <p>Posted by userId: {post.userId}</p>
          <p>{post.body}</p>
        </>
      )}
    </div>
  )
}

export default PostDetails
