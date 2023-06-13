import React, { useState } from 'react'
import classes from './Post.module.css'
import { Link } from 'react-router-dom'

const Post = (props) => {
  const { post } = props
  const [showMore, setShowMore] = useState(false)

  /* const handleClick = (id) => {
    alert(`ฮันแน้ คลิ๊ก id: ${id} เหรอ`)
  } */
  return (
    <div className={classes.post}>
      <Link to={`/post/${post.id}`}>
        <h3>id: {post.id} </h3>
        <p>title: {post.title}</p>
        <p>Body: {post.body}</p>
        {<p>{showMore ? 'ว่าแล้วต้องแอบอ่าน' : ''}</p>}
      </Link>

      {/* {showMore && <p>ว่าแล้วต้องแอบอ่าน</p>} */}
      <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button>
    </div>
  )
}

export default Post
