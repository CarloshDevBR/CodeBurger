import styled from 'styled-components'

import bg from '../../assets/bg.svg'

export const Container = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100vh;
	width: 100vw ;

	background-image: url(${bg});
`

export const Img = styled.img `
	height: 85%;
`

export const BoxItens = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 25px 75px;
	height: 85%;
	border-radius: 0 15px 15px 0;

	background-color: #373737;

	h1 {
		color: #ffffff;

		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 28px;
		text-align: center;

		margin-top: 45px;
	}

	form {
		display: flex;
		flex-direction: column;
	}
`

export const Label = styled.p `
	color: #ffffff;

	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;

	margin-bottom: 5px;
	margin-top: ${ props => props.error ? '12px' : '28px' };
`

export const Input = styled.input `
	width: 391px;
	height: 38px;

	background-color: #ffffff;
	box-shadow: 3px 3px 10px rgba(74, 144, 226, .19);
	border-radius: 5px;
	border: none;
	padding-left: 10px;

	border: ${ props => props.error ? '2px solid #cc1717' : 'none' };
`

export const Error = styled.p `;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 16px;

	margin-top: 3px;

	color: #cc1717;
`

export const SignInLink = styled.p `
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 16px;

	color: #ffffff;

	a {
		color: #ffffff;
		cursor: pointer;
		text-decoration: underline;
	}
`