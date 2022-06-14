import styled from 'styled-components'

export const Container = styled.div `
	background-color: #ffffff;
	padding: 20px;
	border-radius: 20px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	.containerTop {
		display: grid;
		grid-gap: 10px 50px;
		grid-template-areas: 
			'title title'
			'itens itensPrice'
			'tax taxPrice'
		;

		.title {
			grid-area: title;
			font-size: 20px;
			margin-bottom: 20px;
		}

		.itens {
			grid-area: itens;
		}

		.itensPrice {
			grid-area: itensPrice;
		}

		.tax {
			grid-area: tax;
		}

		.taxPrice {
			grid-area: taxPrice;
		}
	}

	.containerBottom {
		display: flex;
		justify-content: space-between;	
		font-size: 18px;
		margin-top: 50px;
	}
`