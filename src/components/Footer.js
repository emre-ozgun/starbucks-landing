import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

const Footer = () => {
	const [isToggled, setIsToggled] = useState(false);

	return (
		<FooterWrapper>
			<FooterContent>
				<FooterModal>
					<div>
						<div>
							<h3>About Us</h3>
							<div>
								<FiChevronDown className='chevron' />
							</div>
						</div>
						<div>
							<a href='#'>Our Company</a>
							<a href=''>Our Coffee</a>
							<a href=''>Stories and News</a>
							<a href=''>Starbucks Archive</a>
							<a href=''>Investor Relations</a>
							<a href=''>Customer Service</a>
						</div>
					</div>
					<div>
						<div>
							<h3>Careers</h3>
							<div>
								<FiChevronDown className='chevron' />
							</div>
						</div>
						<div>
							<a href='#'>Culture and Values</a>
							<a href=''>Inclusion, Diversity, and Equity</a>
							<a href=''>College Achievement Plan</a>
							<a href=''>Alumni Community</a>
							<a href=''>U.S Careers</a>
							<a href=''>International Careers</a>
						</div>
					</div>
					<div>
						<div>
							<h3>Social Impact</h3>
							<div>
								<FiChevronDown className='chevron' />
							</div>
						</div>
						<div>
							<a href='#'>People</a>
							<a href=''>Planet</a>
							<a href=''>Environmental and Social Impact Reporting</a>
						</div>
					</div>
					<div>
						<div>
							<h3>For Business Partners</h3>
							<div>
								<FiChevronDown className='chevron' />
							</div>
						</div>
						<div>
							<a href='#'>Landlord Support Center</a>
							<a href=''>Suppliers</a>
							<a href=''>Corporate Gift Card Sales</a>
							<a href=''>Office and Foodservice Coffee</a>
						</div>
					</div>
					<div>
						<div>
							<h3>Order and Pickup</h3>
							<div>
								<FiChevronDown className='chevron' />
							</div>
						</div>
						<div>
							<a href='#'>Order on the App</a>
							<a href=''>Order on the Web</a>
							<a href=''>Delivery</a>
							<a href=''>Order and Pickup Options</a>
							<a href=''>Investor Relations</a>
							<a href=''>Explore and Find Coffee for Home</a>
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
	display: none;
	color: #212121;
	@media (max-width: 1024px) {
		display: block;

		& > div {
			cursor: pointer;
			padding: 12px 0;
			margin: 0px 0px 16px;
		}

		& > div > div:last-of-type {
			display: block;
			display: none;
		}

		& > div > div:first-of-type {
			display: flex;
			justify-content: space-between;
			align-items: center;

			h3 {
				font-size: 19px;
				font-weight: 400;
			}
		}

		.chevron {
			font-size: 1.8rem;
			font-weight: 300;
			color: #212121;
			margin-right: 4px;
		}
	}
	@media (max-width: 768px) {
		& > div > div:first-of-type {
			h3 {
				font-size: 1rem;
			}
		}
	}
`;

const FooterIcons = styled.ul``;
const FooterLegal = styled.ul``;

const FooterCopyright = styled.p``;

export default Footer;
