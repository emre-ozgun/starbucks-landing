import styled from 'styled-components';

export const NavWrapper = styled.nav`
	max-width: 1400px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	padding: 0 0.2rem;

	ul {
		display: flex;
		gap: 1rem;
	}

	.nav-links a {
		display: inline-block;
		justify-self: center;
		padding: 2.2rem 0;
		font-weight: 800;
		letter-spacing: 0.094rem;
		font-size: 14px;
		margin-right: 10px;

		&:hover {
			color: #00754a;
		}
	}

	.nav-cta {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.nav-cta a {
		margin-left: -18px;
	}

	.nav-links {
		margin-right: auto;
		margin-left: 1rem;
	}

	.logo {
		font-size: 3rem;
		margin-right: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.logo-svg {
		color: #006341;
	}

	.find-store a {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
		margin-right: 18px;

		&:hover {
			color: #00754a;
		}
	}
	.pin {
		font-size: 1.5rem;
	}

	.nav-cta {
		font-weight: 600;
	}
	.nav-cta > li {
		margin-right: 1rem;
	}
`;
