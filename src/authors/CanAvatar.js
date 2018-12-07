import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import { rhythm } from '../utils/typography'
// @ts-ignore
import profilePic from './CanAvatar.jpg'

class CanAvatar extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt="Can Eldem"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Can Eldem</strong> who lives and works in Dublin
          building useful things.{' '}
        </p>
      </div>
    )
  }
}

export default CanAvatar
