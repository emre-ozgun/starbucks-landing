import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

const Footer = () => {
	const [isToggled, setIsToggled] = useState(false);

	const toggleModal = (e) => {
		console.log(e.currentTarget);
		if (!e.currentTarget.nextElementSibling.classList.contains('active')) {
			e.currentTarget.nextElementSibling.classList.add('active');
			e.currentTarget.lastElementChild.firstChild.classList.add('active');
		} else {
			e.currentTarget.nextElementSibling.classList.remove('active');
			e.currentTarget.lastElementChild.firstChild.classList.remove('active');
		}
	};

	return (
		<FooterWrapper>
			<FooterContent>
				<FooterModal>
					<div>
						<div onClick={toggleModal}>
							<h3>About Us</h3>
							<div>
								<FiChevronDown className='chevron' />
							</div>
						</div>
						<div className='animation-wrapper'>
							<div>
								<a href='#'>Our Company</a>
								<a href=''>Our Coffee</a>
								<a href=''>Stories and News</a>
								<a href=''>Starbucks Archive</a>
								<a href=''>Investor Relations</a>
								<a href=''>Customer Service</a>
							</div>
						</div>
					</div>
					<div>
						<div onClick={toggleModal}>
							<h3>Careers</h3>
							<div>
								<FiChevronDown className='chevron' />
							</div>
						</div>
						<div className='animation-wrapper'>
							<div>
								<a href='#'>Culture and Values</a>
								<a href=''>Inclusion, Diversity, and Equity</a>
								<a href=''>College Achievement Plan</a>
								<a href=''>Alumni Community</a>
								<a href=''>U.S Careers</a>
								<a href=''>International Careers</a>
							</div>
						</div>
					</div>
					<div>
						<div onClick={toggleModal}>
							<h3>Social Impact</h3>
							<div>
								<FiChevronDown className='chevron' />
							</div>
						</div>
						<div className='animation-wrapper'>
							<div>
								<a href='#'>People</a>
								<a href=''>Planet</a>
								<a href=''>Environmental and Social Impact Reporting</a>
							</div>
						</div>
					</div>
					<div>
						<div onClick={toggleModal}>
							<h3>For Business Partners</h3>
							<div>
								<FiChevronDown className='chevron' />
							</div>
						</div>
						<div className='animation-wrapper'>
							<div>
								<a href='#'>Landlord Support Center</a>
								<a href=''>Suppliers</a>
								<a href=''>Corporate Gift Card Sales</a>
								<a href=''>Office and Foodservice Coffee</a>
							</div>
						</div>
					</div>
					<div>
						<div onClick={toggleModal}>
							<h3>Order and Pickup</h3>
							<div>
								<FiChevronDown className='chevron' />
							</div>
						</div>
						<div className='animation-wrapper'>
							<div>
								<a href='#'>Order on the App</a>
								<a href=''>Order on the Web</a>
								<a href=''>Delivery</a>
								<a href=''>Order and Pickup Options</a>
								<a href=''>Investor Relations</a>
								<a href=''>Explore and Find Coffee for Home</a>
							</div>
						</div>
					</div>
				</FooterModal>

				<FooterIcons></FooterIcons>

				<FooterLegal></FooterLegal>

				<FooterCopyright></FooterCopyright>
			</FooterContent>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.footer`
	max-width: 1400px;
	margin: 0 auto;
	line-height: 24px;
	padding: 24px 0;
`;

const FooterContent = styled.div`
	padding: 0 24px;
`;

const FooterModal = styled.div`
	display: flex;
	color: #212121;

	& > div {
		max-width: 190px;
		width: 190px;
		margin-right: 32px;
	}

	& {
		margin-right: auto;
	}

	.animation-wrapper {
		margin-top: 32px;
	}

	.animation-wrapper > div {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.chevron {
		display: none;
	}

	& > div > div:first-of-type {
		h3 {
			font-size: 19px;
			font-weight: 400;
		}
	}

	& > div > div:last-of-type > div {
		a {
			font-size: 16px;
			color: rgba(0, 0, 0, 0.58);
			font-weight: 500;

			&:hover {
				color: #2a2a2a;
			}
		}
	}

	@media (max-width: 1024px) {
		display: block;

		& > div {
			user-select: none;
			max-width: 100%;
			width: 100%;
			padding: 12px 0;
			margin: 0px 0px 16px;
		}

		& > div > div:first-of-type {
			cursor: pointer;
		}

		& > div > .animation-wrapper {
			overflow-y: hidden;
		}

		& > div > .animation-wrapper.active > div {
			max-height: 350px;

			transform: translateY(0);
		}

		& > div > div:last-of-type > div {
			display: block;
			display: flex;
			flex-direction: column;
			/* display: none; */
			overflow: hidden;
			max-height: 0px;
			transform: translateY(-100%);

			transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

			a {
				padding: 8px 0;
				font-size: 20px;
				color: rgba(0, 0, 0, 0.58);
				margin-bottom: 0.8rem;
				font-weight: 500;
				&:hover {
					color: #2a2a2a;
				}
			}
			a:first-of-type {
				margin-top: 32px;
			}
		}

		& > div > div:first-of-type {
			display: flex;
			justify-content: space-between;
			align-items: center;

			h3 {
				font-size: 24px;
				font-weight: 400;
			}
		}

		.chevron {
			display: block;
			font-size: 1.8rem;
			font-weight: 300;
			color: #212121;
			margin-right: 4px;
			transform: rotate(0deg);

			transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
		}
		.chevron.active {
			transform: rotate(180deg);
		}
	}
	@media (max-width: 768px) {
		& > div > div:first-of-type {
			h3 {
				font-size: 20px;
			}
		}

		& > div > div:last-of-type > div {
			a {
				font-size: 16px;
			}
		}
	}
`;

const FooterIcons = styled.ul``;
const FooterLegal = styled.ul``;

const FooterCopyright = styled.p``;

export default Footer;
