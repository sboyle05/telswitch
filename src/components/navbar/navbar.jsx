import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../tailwind.css';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<nav className='bg-blue text-white pt-4 fixed w-full z-50'>
			<div className='container mx-auto mb-4 px-2 sm:px-2 lg:px-2 flex items-center justify-between'>
				<div className='flex items-center'>
					<span className='text-xl font-semibold'>
						<img
							className='h-12'
							src='/assets/tsLogo.png'
							alt='TelSwitch Logo'
						/>
					</span>
				</div>

				<button
					className='text-white inline-flex p-3 rounded md:hidden ml-auto hover:text-white outline-none'
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16M4 18h16'
						></path>
					</svg>
				</button>

				{/* For large screens, the links are always visible */}
				<div className='hidden md:flex lg:flex-grow lg:items-center lg:justify-end'>
					<Link
						to='/'
						className='px-3 py-2 rounded hover:bg-gray-700 hover:text-white font-bold'
					>
						Home
					</Link>
					<Link
						to='services'
						className='px-3 py-2 rounded hover:bg-gray-700 hover:text-white font-bold'
					>
						Our Services
					</Link>
					<Link
						to='about'
						className='px-3 py-2 rounded hover:bg-gray-700 hover:text-white font-bold'
					>
						About Us
					</Link>
					<Link
						to='contact'
						className='px-3 py-2 rounded hover:bg-gray-700 hover:text-white font-bold'
					>
						Contact Us
					</Link>
				</div>

				{/* For smaller screens, the dropdown is controlled by the isOpen state */}
				<div
					className={`absolute top-full left-0 right-0 w-9/10 ${
						isOpen ? 'flex' : 'hidden'
					} flex-col bg-blackish bg-opacity-100 p-4 mt-px mr-4 ml-4 rounded-lg md:hidden`}
				>
					<Link
						to='/'
						className='px-3 py-2 rounded font-bold hover:bg-gray-700 hover:text-white text-center'
						onClick={closeMenu}
					>
						Home
					</Link>
					<Link
						to='projects'
						className='px-3 py-2 font-bold rounded hover:bg-gray-700 hover:text-white text-center '
						onClick={closeMenu}
					>
						Projects
					</Link>
					<Link
						to='about'
						className='px-3 py-2 font-bold rounded hover:bg-gray-700 hover:text-white text-center '
						onClick={closeMenu}
					>
						About
					</Link>
					<Link
						to='contact'
						className='px-3 py-2 font-bold rounded hover:bg-gray-700 hover:text-white text-center '
						onClick={closeMenu}
					>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
