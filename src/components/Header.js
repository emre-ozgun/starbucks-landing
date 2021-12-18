import React from 'react';
import { SiStarbucks, SiGooglemaps } from 'react-icons/si';
import { Button } from '../styles/Button';
import { NavWrapper } from '../styles/Nav';
import { FaBars } from 'react-icons/fa';
import {
	MobileNavWrapper,
	NavMenu,
	Sidebar,
	Overlay,
} from '../styles/MobileNav';

const Header = () => {
	// Toggle
	const toggleSidebar = (e) => {
		const navBtn = e.currentTarget;
		const overlay = e.currentTarget.parentElement.nextElementSibling;
		const sidebar =
			e.currentTarget.parentElement.nextElementSibling.nextElementSibling;

		navBtn.classList.toggle('open');
		overlay.classList.toggle('hidden');
		sidebar.classList.toggle('hidden');

		document.body.classList.toggle('hidden');

		console.log(navBtn, overlay, sidebar);
	};

	// Click outside
	const handleClickOutside = (e) => {
		if (!e.target.classList.contains('hidden')) {
			document.body.classList.remove('hidden');
			e.currentTarget.classList.add('hidden');
			e.currentTarget.nextElementSibling.classList.add('hidden');
			e.currentTarget.previousElementSibling.lastElementChild.classList.remove(
				'open'
			);
		} else {
			return;
		}
	};

	return (
		<header>
			<NavWrapper>
				<a href='#' className='logo'>
					<SiStarbucks className='logo-svg' />
				</a>
				<ul className='nav-links'>
					<li>
						<a href='#'>MENU</a>
					</li>
					<li>
						<a href='#'>REWARDS</a>
					</li>
					<li>
						<a href='#'>GIFT CARDS</a>
					</li>
				</ul>
				<ul className='nav-cta'>
					<li className='find-store'>
						<a href='#'>
							<SiGooglemaps className='pin' />
							Find a store
						</a>
					</li>
					<li>
						<Button href='#' border='#000'>
							Sign in
						</Button>
					</li>{' '}
					<li>
						<Button href='#' color='#fff' bcg='#000'>
							Join now
						</Button>
					</li>
				</ul>
			</NavWrapper>

			<MobileNavWrapper>
				<a href='#' className='logo small'>
					<SiStarbucks className='logo-svg' />
				</a>
				{/* toggle active class for -> button, overlay, sidebar */}
				<NavMenu onClick={toggleSidebar} className='active'>
					<FaBars className='bars' />
					<div className='circle'></div>
				</NavMenu>
			</MobileNavWrapper>
			<Overlay className='active hidden' onClick={handleClickOutside}></Overlay>
			<Sidebar className='active hidden'>
				<a className='sidelink'>Menu</a>
				<a className='sidelink'>Rewards</a>
				<a className='sidelink'>Gift Cards</a>
				<hr className='hr' />
				<div className='side-cta'>
					<Button border='#000'>Sign in</Button>
					<Button color='#fff' bcg='#000'>
						Join now
					</Button>
					<a className='find'>
						<SiGooglemaps className='pin' />
						Find a store
					</a>
				</div>
			</Sidebar>
		</header>
	);
};

export default Header;
