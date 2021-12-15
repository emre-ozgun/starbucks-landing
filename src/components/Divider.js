import React from 'react';
import styled from 'styled-components';

const Divider = () => {
	return <DividerWrapper></DividerWrapper>;
};

const DividerWrapper = styled.div`
	width: 100vw;
	height: 1px;
	background-color: #6b6b6b;
	opacity: 0.2;
`;

export default Divider;
