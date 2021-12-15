import styled, { css } from 'styled-components';
import sectionImage1 from './s-img-1.png';
import sectionImage2 from './s-img-2.png';
import sectionImage3 from './s-img-3.png';
import sectionImage4 from './s-img-4.jpg';
import sectionImage5 from './s-img-5.jpg';
import sectionImage6 from './s-img-6.jpg';
import { Button } from '../../styles/Button';

const SectionCards = () => {
	return (
		<>
			<SectionWrapper bcg='#D4E9E3' greenText={true} orderSmall={true}>
				<article className='section-info'>
					<div className='section-box'>
						<h1 className='section-title'>
							<strong>starbucks for life</strong>
						</h1>
						<div className='section-description'>
							It's the most festive game of the year, with chances to win free
							coffee and more.*
						</div>
						<Button href='#' className='green-link'>
							Play now!
						</Button>
					</div>
				</article>

				<article className='section-img'>
					<img src={sectionImage1} alt='starbucks-coffee-1' />
				</article>
			</SectionWrapper>
			<SectionWrapper reverseOrder={true} bcg='#D50032'>
				<article className='section-info'>
					<div className='section-box'>
						<h1 className='section-title'>minty, chocolaty joy</h1>
						<div className='section-description'>
							Our handcrafted Peppermint Mocha is like a winter wonderland of
							flavors.
						</div>
						<Button href='#'>Order now</Button>
					</div>
				</article>

				<article className='section-img'>
					<img src={sectionImage2} alt='starbucks-coffee-2' />
				</article>
			</SectionWrapper>
			<SectionWrapper bcg='#D50032' orderSmall={true}>
				<article className='section-info'>
					<div className='section-box'>
						<h1 className='section-title'>new to the nice list</h1>
						<div className='section-description'>
							For a nondairy twist on a holiday cookie classic, try the new Iced
							Sugar Cookie Almondmilk Latte.
						</div>
						<Button href='#'>Order now</Button>
					</div>
				</article>

				<article className='section-img'>
					<img src={sectionImage3} alt='starbucks-coffe-1' />
				</article>
			</SectionWrapper>
			<SectionWrapper reverseOrder={true} bcg='#D50032'>
				<article className='section-info'>
					<div className='section-box'>
						<h1 className='section-title'>chill and be merry</h1>
						<div className='section-description'>
							Our Irish Cream Cold Brew is dressed up for the holidays with
							sweet cream cold foam and a strike of cocoa.
						</div>
						<Button href='#'>Order now</Button>
					</div>
				</article>

				<article className='section-img'>
					<img src={sectionImage4} alt='starbucks-coffe-1' />
				</article>
			</SectionWrapper>
			<SectionWrapper bcg='#1D3932' smallTitle={true} orderSmall={true}>
				<article className='section-info'>
					<div className='section-box'>
						<h1 className='section-title'>Ring in the cheer.</h1>
						<div className='section-description small'>
							Create a festive mood at your next online gathering with this
							collection of Starbucks holiday backgrounds.
						</div>
						<Button href='#'>Download here</Button>
					</div>
				</article>

				<article className='section-img'>
					<img src={sectionImage5} alt='starbucks-coffe-1' />
				</article>
			</SectionWrapper>
			<SectionWrapper
				reverseOrder={true}
				bcg='#D4E9E3'
				greenText={true}
				smallTitle={true}
			>
				<article className='section-info'>
					<div className='section-box'>
						<h1 className='section-title'>
							Let the holiday cheer come to you.
						</h1>
						<div className='section-description small'>
							Make the moment merry. Order Starbucks® holiday favorites on Uber
							Eats.**
						</div>
						<Button href='#'>Order now</Button>
					</div>
				</article>

				<article className='section-img'>
					<img src={sectionImage6} alt='starbucks-coffe-1' />
				</article>
			</SectionWrapper>
		</>
	);
};

const SectionWrapper = styled.section`
	display: flex;
	margin: 1.6rem 0;
	background-color: ${({ bcg }) => bcg || '#fff'};

	.section-info {
		color: ${({ greenText }) => (greenText ? '#1E3932' : '#fff')};
		border-color: ${({ greenText }) => (greenText ? '#1E3932' : '#fff')};
		flex: 1;
		order: ${({ reverseOrder }) => reverseOrder && 2};
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		text-align: center;

		.section-box {
			padding: 2rem 3rem;
		}

		.section-box .section-description {
			max-width: 85%;
			margin: 0 auto;
		}

		h1 {
			${({ smallTitle }) =>
				smallTitle
					? css`
							font-size: 24px;
							text-transform: 'capitalize';
							font-weight: 600;
							letter-spacing: 0;
					  `
					: css`
							font-size: 50px;
							text-transform: uppercase;
							font-weight: 600;
							letter-spacing: 8px;
					  `};

			margin-bottom: 20px;
		}

		.section-description {
			/* padding: 0 16px; */
			line-height: 32px;
			font-weight: 400;
			font-size: 24px;
		}

		.section-description.small {
			font-size: 19px;
		}

		${Button} {
			color: ${({ greenText }) => (greenText ? '#1E3932' : '#fff')};
			border-color: ${({ greenText }) => (greenText ? '#1E3932' : '#fff')};
			margin-top: 20px;
			font-weight: 600;
			padding: 7px 16px;
			border: 1px solid;
			background-color: transparent;
		}
		strong {
			font-weight: 800;
		}
	}

	.section-img {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.section-img img {
		width: 100%;
		display: block;
	}

	@media (max-width: 768px) {
		flex-direction: column;

		${({ orderSmall }) =>
			orderSmall &&
			css`
				flex-direction: column-reverse;
			`}
	}

	@media (max-width: 1024px) {
		.section-info {
			padding: 2rem 1rem;

			h1 {
				${({ smallTitle }) =>
					smallTitle
						? css`
								font-size: 22px;
								text-transform: 'capitalize';
								font-weight: 600;
								letter-spacing: 0;
						  `
						: css`
								font-size: 28px;
								text-transform: uppercase;
								font-weight: 700;
								letter-spacing: 5px;
						  `};

				margin-bottom: 20px;
			}
		}
	}
`;

export default SectionCards;
