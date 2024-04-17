import React from 'react'
import Socials from '../Socials/Socials'

export default function Contact() {

  return (
    <section id='contact' className="container-lg py-5 text-center">
    <h2 className="fs-1 mb-3">Get In Touch</h2>
    <p className='w-75 m-auto'>I'm currenly looking for a job as a graphic designer , ux designer or Jr Front-end Web Developer to join a team to learn and improve.</p>
    <Socials custom={'justify-content-center py-4'} size={'fs-3'}/>
    <div className="to-top" onClick={()=> window.scrollTo(0,0)}><i className="fa-solid fa-arrow-up fs-5"></i></div>
  </section>
  )
}
