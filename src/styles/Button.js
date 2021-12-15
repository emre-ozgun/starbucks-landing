import styled from 'styled-components';

export const Button = styled.a`
	font-size: 14px;
	padding: 0.4rem 1rem;
	color: ${({ color }) => color || '#000'};
	border: 1px solid ${({ border }) => border || 'none'};
	border-radius: 20px;
	background-color: ${({ bcg }) => bcg || 'transparent'};

	&:hover {
		opacity: 0.8;
	}
`;
