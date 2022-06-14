import styled from 'styled-components'

export const Container = styled.div `
	background-color: #FFFFFF;
	border-radius: 20px;
	padding: 15px;
	width: max-content;
	margin-bottom: 100px;
`

export const Header = styled.div `
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	padding: 15px;
	border-bottom: 2px solid #b5b5b5;

	p {
		font-size: 16px;
		color: #b5b5b5;
	}
`

export const Body = styled.div `
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 10px 15px;
	padding: 15px;
	width: max-content;
	border-bottom: 2px solid #b5b5b5;

	img {
		border-radius: 10px;
		width: 135px;
	}

	p {
		font-size: 16px;
	}

	div {
		display: flex;
		gap: 25px;

		p {
			margin-top: 3px;
		}
	}

	button {
		height: max-content;
		border: none;
		background: none;
		font-size: 20px;
		cursor: pointer;
	}

	.trash {
		display: grid;
		grid-column: 6;
		cursor: pointer;
	}
`

export const EmptyCart = styled.div `
	padding: 25px;
	text-align: center;
	font-weight: bold;
	color: #b5b5b5;
`