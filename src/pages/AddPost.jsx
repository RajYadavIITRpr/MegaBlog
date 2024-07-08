import React from 'react'
import { Container,PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-3'>
      <h1 className='text-4xl pb-2 font-bold' >New Post</h1>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost
