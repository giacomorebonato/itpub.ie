import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
// @ts-ignore
import { authors } from '../authors/authors'

function Bio({ author }) {
  if (!authors[author]) {
    return null
  }

  let Avatar = authors[author].pic

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Avatar />

      <p dangerouslySetInnerHTML={{ __html: authors[author].description }} />
    </div>
  )
}

export default Bio
