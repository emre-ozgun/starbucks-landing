import React from 'react';
import styled from 'styled-components';

const LegalSection = () => {
	return (
		<>
			<LegalSectionWrapper>
				<article>
					<div className='legal-1'>
						*NO PURCHASE NECESSARY. Participating stores only. Starbucks
						employees are not eligible to win prizes. Ends 1/3/22. To play and
						for Official Rules, visit <a href='#'>starbucksforlife.com.</a>{' '}
						Entrants can receive a maximum of 2 plays per day, plus bonus
						opportunities to earn additional plays.
					</div>
				</article>
				<article>
					<div>
						**Menu limited. Check the Uber Eats app for availability and
						restrictions.
					</div>
				</article>
			</LegalSectionWrapper>
		</>
	);
};

const LegalSectionWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-weight: 400;

	article {
		padding: 32px 0;

		.legal-1 {
			width: 60%;
		}
	}

	article > div {
		line-height: 25.2px;
		text-align: center;
		font-size: 14px;
	}

	article > div:first-of-type {
		padding: 0px 48px;
		/* width: 60%; */
		margin: 0 auto;
		margin-bottom: 2rem;

		a {
			text-decoration: underline;

			&:hover {
				text-decoration: none;
			}
		}
	}

	@media (max-width: 768px) {
		article {
			.legal-1 {
				width: 100%;
			}
		}
		article > div {
			font-size: 13px;
		}
		article > div:first-of-type {
			padding: 0px 12px;
		}
	}
`;

export default LegalSection;
