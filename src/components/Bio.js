import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import { rhythm } from '../utils/typography'
// @ts-ignore
import { authors } from '../authors/authors'

function Bio({ author }) {
  if (!authors[author]) {
    return null
  }
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
      }}
    >
      <img
        src={authors[author].pic}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
        }}
      />
      <p>{authors[author].description}</p>
    </div>
  )
}

export default Bio
