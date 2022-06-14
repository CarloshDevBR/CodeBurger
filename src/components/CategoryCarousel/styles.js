import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div `
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: -10px;
	gap: 35px;
	padding: 35px 0;

	background-color: #efefef;

	.rec.rec-arrow {
		background-color: #9758A6;
		color: #efefef;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	}

	.rec.rec-arrow:hover {
		border: 2px solid #9758A6;
		background-color: #efefef;
		color: #9758A6; 
	}	

	.rec.rec-arrow:disabled {
		border: none;
		background-color: #bebebf;
		color: #efefef;
	}
`

export const Img = styled.img `
	width: 200px; 
	border-radius: 10px;
`

export const BoxCarouselCategory = styled.div `
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 0 0 20px 0;
`

export const Button = styled(Link) `
	background-color: #9758A6;
	border-radius: 5px;

	height: 40px;
	border: none;

	color: #ffffff;

	font-size: 18px;
	font-style: normal;
	font-weight: bold;
	line-height: 100%;

	text-decoration: none;

	cursor: pointer;

	display: grid;
	place-items: center;

	&:hover {
		opacity: .9;
	}

	&:active{
		opacity: .7;
	}
`