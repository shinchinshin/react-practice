import React from 'react'
import classes from './Greeting.module.css'
import { useAuth } from '../provider/AuthProvider'

const Greeting = (props) => {
  //const name = 'Thaksin'
  //const { name, msg } = props
  // if isLogin is false, return unknow
  // if it's true, return name
  //let [name, setName] = useState('Shin')

  const { username } = useAuth()

  /* const handleClick = () => {
    {
      setName('Shinawatra')
    }
  } */

  return (
    <>
      <div className={classes.card}>
        <h3>Welcome Back</h3>
        <p>{username}</p>
      </div>
      {/* <button onClick={handleClick}> Change Name</button> */}
    </>
  )
}

export default Greeting
