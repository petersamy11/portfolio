import React from 'react'

export default function Button({text, link}) {
  return (
    <>
    <button className='btn btn-cta' onClick={()=> window.open(link)}>{text}</button>
    </>
  )
}
