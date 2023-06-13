import { useState, useEffect } from 'react'

const usePost = (id) => {
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json()

        setPost(data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPost()
  }, [])

  return {
    post,
    isLoading,
  }
}

export default usePost
