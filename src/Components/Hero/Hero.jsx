import React from 'react'
import Socials from '../Socials/Socials'

export default function Hero() {
  return (
    <main id='home' className='py-5 mt-5 container-lg vh-100'>
      <h5 className='pb-2 intro'>Hello! I'm</h5>
      <h1 className='fw-bold pb-2'>Peter Said</h1>
      <h2 className='pb-2'>Graphic Designer and UX Designer</h2>
      <p className='w-75 pe-0 pe-lg-5 pb-2'>I'm a graphic designer and ux designer who won't stop learning every day. waiting to join a team to improve and learn from their experience.</p>
      <section>
        <Socials custom={'my-4'} size={'fa-2x'}/>
      </section>
    </main>
  )
}
