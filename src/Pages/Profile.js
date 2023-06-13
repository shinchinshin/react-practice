import React from 'react'
import Greeting from '../components/Greeting'
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.proPage}>
      {/* <Greeting msg="yo" name="Yingluk" /> */}
      <Greeting msg="Welcom back" name="Thaksin" />
    </div>
  )
}

export default Profile
