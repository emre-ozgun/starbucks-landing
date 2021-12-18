import styled from 'styled-components';
import { Button } from './Button';

export const MobileNavWrapper = styled.nav`
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

export const NavMenu = styled.button`
	display: none;

	@media (max-width: 768px) {
		&.active {
			.bars {
				transform: rotate(0);
				transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
			}
		}
		&.open {
			.bars {
				transform: rotate(180deg);
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

export const Sidebar = styled.div`
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

		&.active {
			position: fixed;

			top: 72px;
			height: calc(100% - 72px);

			right: 0;
			width: 80%;
			background-color: #fff;
			box-shadow: inset 0 4px 3px -3px rgb(0 0 0 / 10%),
				inset 0 4px 2px -2px rgb(0 0 0 / 7%);
			overflow: auto;
			transform: translateX(0);
			z-index: 2;
		}
		&.active.hidden {
			transform: translateX(100%);
		}
	}
`;

export const Overlay = styled.div`
	transition: opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
	display: none;

	@media (max-width: 768px) {
		display: block;

		&.active {
			position: fixed;
			top: 72px;
			height: calc(100% - 72px);
			left: 0;
			right: 0;
			bottom: auto;
			background-color: #000;

			opacity: 0.38;
			visibility: visible;
			z-index: 1;
		}
		&.hidden {
			opacity: 0;
			visibility: hidden;
			z-index: -999;
		}
	}
`;
