import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
// @ts-ignore
import profilePic from './JackAvatar.jpg'
import { Avatar } from './Avatar'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <Avatar src={profilePic} alt="Giacomo Rebonato" />
      </div>
    )
  }
}

export default Bio
