import React from 'react';
import { SiStarbucks, SiGooglemaps } from 'react-icons/si';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavWrapper } from '../styles/Nav';
const Header = () => {
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
					</li>
					<li>
						<Button href='#' color='#fff' bcg='#000'>
							Join now
						</Button>
					</li>
				</ul>
			</NavWrapper>
		</header>
	);
};

export default Header;
