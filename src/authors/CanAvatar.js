import React from 'react'
// @ts-ignore
import profilePic from './CanAvatar.jpg'
import { Avatar } from './Avatar'

class CanAvatar extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <Avatar src={profilePic} alt="Can Eldem" />
        <p>
          Written by <strong>Can Eldem</strong> who lives and works in Dublin
          building useful things.{' '}
        </p>
      </div>
    )
  }
}

export default CanAvatar
