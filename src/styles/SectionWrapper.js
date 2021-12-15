import styled, { css } from 'styled-components';
import { Button } from './Button';

export const SectionWrapper = styled.section`
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
			max-width: 100%;
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
			font-size: 1.1rem;
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
