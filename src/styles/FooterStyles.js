import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	max-width: 1400px;
	margin: 0 auto;
	line-height: 24px;
	padding: 24px 0;
`;

export const FooterContent = styled.div`
	padding: 0 24px;
`;

export const FooterModal = styled.div`
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
			margin-top: 8px;
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

		.animation-wrapper > div {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}

		& > div {
			user-select: none;
			max-width: 100%;
			width: 100%;
			padding: 8px 0;
			margin: 0px 0px 0px;
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

			overflow: hidden;
			max-height: 0px;
			transform: translateY(-100%);

			transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);

			a {
				padding: 8px 0;
				font-size: 20px;
				color: rgba(0, 0, 0, 0.58);

				font-weight: 500;
				&:hover {
					color: #2a2a2a;
				}
			}
			a:first-of-type {
				margin-top: 8px;
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

			transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
		}
		.chevron.active {
			transform: rotate(180deg);
		}
	}
	@media (max-width: 768px) {
		& > div > div:first-of-type {
			h3 {
				font-size: 19px;
			}
		}

		& > div > div:last-of-type > div {
			a {
				font-size: 16px;
			}
		}
	}
`;

export const FooterHr = styled.hr`
	padding: 32px 0;
	border: 0;
	margin: 0;

	&::before {
		content: '';
		display: block;
		border-top: 2px solid rgba(0, 0, 0, 0.1);
	}
`;

export const FooterIcons = styled.ul`
	display: flex;

	li {
		background-color: #1e1e1e;
		width: 36px;
		height: 36px;
		border-radius: 50%;

		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1.2rem;

		a {
			position: relative;

			width: 36px;
			height: 36px;
			border-radius: 50%;
			font-size: 1.25rem;
			display: grid;
			place-items: center;

			.grey-circle {
				position: absolute;

				top: 50;
				left: 50;
				z-index: -1;
				transform: translate(-50%, -50%);
				background-color: #e9e9e9;
				transform-origin: center;
				transform: scale(0);
				width: 44px;
				height: 44px;
				border-radius: 50%;

				transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
			}

			&:hover {
				.grey-circle {
					transform: scale(1.2);
				}
			}
		}

		a > svg {
			color: #fff;
		}
	}

	@media (max-width: 400px) {
		li {
			margin-right: 0.6rem;
		}
	}
`;
export const FooterLegal = styled.ul`
	margin-top: 1.6rem;
	margin-bottom: 0.4rem;
	display: flex;
	flex-direction: column;
	font-size: 16px;

	& > li > span {
		display: none;
	}

	& > li > a {
		display: block;
		text-decoration: none;
		padding-left: 0;
		padding-top: 8px;
		padding-bottom: 8px;
		margin: 0 0 4px;
		&:hover {
			text-decoration: underline;
		}
	}

	@media (min-width: 768px) {
		& > li > a {
			font-size: 17px;
		}
	}

	@media (min-width: 1024px) {
		flex-direction: row;

		& > li > a {
			display: inline-block;
			font-size: 18px;
			padding: 0 1rem;
			padding-top: 0;
			padding-bottom: 0;
		}

		& > li > a:first-child {
			padding-left: 0;
		}

		& > li > span {
			display: inline-block;
			padding: 0 12.8px;
		}
	}
`;

export const FooterCopyright = styled.p`
	font-size: 13px;
	font-weight: 400;
	padding: 1rem 0;
	color: #6b6b6b;
	font-weight: 500;

	@media (min-width: 768px) {
		font-size: 14px;
	}
`;
