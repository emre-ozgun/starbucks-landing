import sectionImage1 from './s-img-1.png';
import sectionImage2 from './s-img-2.png';
import sectionImage3 from './s-img-3.png';
import sectionImage4 from './s-img-4.jpg';
import sectionImage5 from './s-img-5.jpg';
import sectionImage6 from './s-img-6.jpg';
import { Button } from '../../styles/Button';
import { SectionWrapper } from '../../styles/SectionWrapper';

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

export default SectionCards;
