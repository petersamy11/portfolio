import React, { useEffect, useState } from 'react';
import MenuPhone from './MenuPhone';
import MenuDesktop from './MenuDesktop';
import Theme from '../Theme/Theme';

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(true);

	// Checks if screen size is mobile on load.
	useEffect(() => {
		window.innerWidth <= 709 ? setIsMobile(true) : setIsMobile(false);
	}, []);

	// Checks for mobile size.
	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 709) setIsMobile(true);
			else setIsMobile(false);
		});
		return () => {
			window.removeEventListener('resize', () => {});
		};
	});

  return (
    <header className='container-lg d-flex justify-content-between align-items-center py-3 position-relative'>
        {isMobile? <MenuPhone/>: <MenuDesktop/>}
        <Theme/>
    </header>
  )
}
