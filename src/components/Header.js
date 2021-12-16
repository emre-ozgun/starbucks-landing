import React from 'react';
import { SiStarbucks, SiGooglemaps } from 'react-icons/si';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavWrapper } from '../styles/Nav';
import { FaBars } from 'react-icons/fa';
const Header = () => {
	const toggleSidebar = () => {};

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

			<MobileNavWrapper>
				<a href='#' className='logo small'>
					<SiStarbucks className='logo-svg' />
				</a>
				<NavMenu onClick={toggleSidebar}>
					<FaBars className='bars' />
					<div className='circle'></div>
				</NavMenu>

				<Sidebar></Sidebar>
			</MobileNavWrapper>
		</header>
	);
};

const MobileNavWrapper = styled.nav`
	display: none;

	@media (max-width: 768px) {
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		padding: 0 1.2rem;
		height: 72px;

		.logo {
			font-size: 2.8rem;
			margin-right: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.logo-svg {
			color: #006341;
		}
	}
`;

const NavMenu = styled.button`
	display: none;

	@media (max-width: 768px) {
		display: inline-block;
		position: relative;
		width: 36px;
		height: 36px;
		cursor: pointer;
		color: #808080;
		background-color: transparent;
		margin: 0px 1rem;
		outline: none;
		border: none;
		font-size: 1.2rem;
		padding: 4px;
		display: grid;
		place-items: center;

		&:hover {
			.circle {
				transform: scale(1);
			}
		}

		.bars {
			position: absolute;
			z-index: 1;
		}

		.circle {
			position: absolute;

			top: 0;
			left: 0;
			width: 36px;
			height: 36px;
			z-index: 0;

			border-radius: 50%;
			background-color: #f0f0f0;
			transform: translate(-50%, -50%);
			transform-origin: center;
			transform: scale(0);
			transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
		}
	}
`;

const Sidebar = styled.div`
	display: none;
`;

export default Header;
