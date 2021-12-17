import React from 'react';
import { SiStarbucks, SiGooglemaps } from 'react-icons/si';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavWrapper } from '../styles/Nav';
import { FaBars } from 'react-icons/fa';
const Header = () => {
	const toggleSidebar = (e) => {
		console.log(e.target.parentElement.nextElementSibling);
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
			<Overlay className='active'></Overlay>
			<Sidebar className='active'>
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
		&.active {
			.bars {
				transform: rotate(90deg);
				transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
			}
		}

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
	padding: 2rem 0 0;
	.sidelink {
		padding: 1rem 2rem;
		border: none;
		outline: none;
		background-color: transparent;
		display: block;
		cursor: pointer;
		font-size: 1.2rem;
		margin-bottom: 8px;
	}
	.side-cta {
		padding: 1rem 2rem;
		display: inline-block;

		${Button} {
			margin-right: 0.8rem;
			cursor: pointer;
		}
	}
	.find {
		margin-top: 2rem;
		display: block;
		cursor: pointer;
		display: flex;
		gap: 0.4rem;

		.pin {
			font-size: 1.2rem;
		}
	}

	.hr {
		padding: 16px 32px 32px;
		border: 0;
		margin: 0;

		&::before {
			content: '';
			display: block;
			border-top: 2px solid rgba(0, 0, 0, 0.1);
		}
	}

	@media (max-width: 768px) {
		display: block;
		transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);

		& {
			/* position: absolute; */
			position: fixed;
			/* visibility: hidden;
			opacity: 0; */

			transform: translateX(100vw);
		}

		&.active {
			position: fixed;
			/* visibility: visible;
			opacity: 1; */
			top: 72px;
			height: calc(100% - 72px);
			left: 20vw;
			right: 0;
			width: 80vw;
			background-color: #fff;
			box-shadow: inset 0 4px 3px -3px rgb(0 0 0 / 10%),
				inset 0 4px 2px -2px rgb(0 0 0 / 7%);
			overflow: auto;
			transform: translateX(0);
			z-index: 2;
		}
	}
`;

const Overlay = styled.div`
	transition: opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
	display: none;

	@media (max-width: 768px) {
		display: block;

		& {
			opacity: 0;
			visibility: hidden;
			z-index: -999;
		}

		&.active {
			position: fixed;
			top: 72px;
			height: calc(100% - 72px);
			left: 0;
			right: 0;
			bottom: auto;
			background-color: #000;

			/* make overlay visible */
			opacity: 0.38;
			visibility: visible;
			z-index: 1;
		}
	}
`;

export default Header;
