import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import {
	FaSpotify,
	FaFacebookF,
	FaPinterestP,
	FaInstagram,
	FaYoutube,
	FaTwitter,
} from 'react-icons/fa';
import {
	FooterWrapper,
	FooterContent,
	FooterModal,
	FooterHr,
	FooterIcons,
	FooterLegal,
	FooterCopyright,
} from '../styles/FooterStyles';

const Footer = () => {
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

				<FooterHr aria-hidden='true' />
				<FooterIcons>
					<li>
						<a href='#'>
							<FaSpotify />
							<div className='grey-circle'></div>
						</a>
					</li>
					<li>
						<a href='#'>
							<FaFacebookF />
							<div className='grey-circle'></div>
						</a>
					</li>
					<li>
						<a href='#'>
							<FaPinterestP />
							<div className='grey-circle'></div>
						</a>
					</li>
					<li>
						<a href='#'>
							<FaInstagram />
							<div className='grey-circle'></div>
						</a>
					</li>
					<li>
						<a href='#'>
							<FaYoutube />
							<div className='grey-circle'></div>
						</a>
					</li>
					<li>
						<a href='#'>
							<FaTwitter />
							<div className='grey-circle'></div>
						</a>
					</li>
				</FooterIcons>

				<FooterLegal>
					<li>
						<a href='#'>Privacy Policy</a>
					</li>
					<li>
						<span>|</span>
						<a href='#'>Terms of Use</a>
					</li>
					<li>
						<span>|</span>
						<a href='#'>CA Supply Chain Act</a>
					</li>
					<li>
						<span>|</span>
						<a href='#'>Cookie Preferences</a>
					</li>
				</FooterLegal>

				<FooterCopyright>
					© 2021 Starbucks Coffee Company. All rights reserved.
				</FooterCopyright>
			</FooterContent>
		</FooterWrapper>
	);
};

export default Footer;
