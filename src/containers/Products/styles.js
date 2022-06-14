import styled from 'styled-components'

export const Container = styled.div `
	min-height: 100vh;
	background-color: #e5e5e5;
`

export const Img = styled.img `
	width: 100%;
`

export const Menu = styled.div `
	display: flex;
	justify-content: center;
	gap: 40px;
	margin-top: 20px;
	width: 100%;
`

export const Button = styled.button `
	cursor: pointer;
	background: none;
	border: none;
	color: ${ props => props.isActive ? '#9758A6' : '#9A9A9D' };
	border-bottom: ${ props => props.isActive && '2px solid #9758A6' };
	padding-bottom: 5px;
	font-size: 17px;
	line-height: 20px;
`

export const ProductsContainer = styled.div `
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	padding: 40px;
	margin-top: 20px;
`