import styled from 'styled-components';

export const LegalSectionWrapper = styled.section`
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
