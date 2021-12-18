import React from 'react';
import { LegalSectionWrapper } from '../styles/LegalStyles';

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

export default LegalSection;
