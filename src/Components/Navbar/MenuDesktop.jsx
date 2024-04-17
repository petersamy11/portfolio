import React from 'react';
import Button from '../Button/Button';

export default function MenuDesktop() {
  return (
    <nav>
    <ul className='list-unstyled d-flex align-items-center mb-0'>
        <li className='ms-0'><a className='text-decoration-none' href='#home'>Home</a></li>
        <li className='ms-4'><a className='text-decoration-none' href='#skills'>Skills</a></li>
        <li className='ms-4'><a className='text-decoration-none' href='#projects'>Projects</a></li>
        <li className='ms-4'><a className='text-decoration-none' href='#contact'>Contact</a></li>
        <li className='ms-4'><Button text={'Resume'} link={'https://drive.google.com/file/d/1fzmMgnjUFFo2RCP-gebMXo9ndXerNU8e/view'}/></li>
    </ul>
</nav>
  )
}
