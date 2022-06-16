import { FaTrash } from 'react-icons/fa'

import { Container, Header, Body, EmptyCart } from './styles.js'

import { useCart } from '../../hooks/CartContext'

import { useState } from 'react'

import FormatCurrency from '../../utils/formatCurrency.js'

export const CartItens = () => {
	const { products, putProducts, incremented, decremented, deleteProducts } = useCart()
	
	return (
		<Container>
			<Header>
				<p></p>
				<p>Itens</p>
				<p>Preço</p>
				<p style={{ paddingRight: 50 }} >Quantidade</p>
				<p>Total</p>
			</Header>

			{ products && products.length > 0 ? products.map(item => ( 
				<Body key={item.id} >
					<img src={item.img} alt={item.name} />
					<p>{item.name}</p>
					<p>{FormatCurrency(item.price)}</p>

					<div>
						<button onClick={() => decremented(item.id)} >-</button>
						<p>{item.quant}</p>
						<button onClick={() => incremented(item.id)} >+</button>
					</div>

					<p>{FormatCurrency(item.quant * item.price)}</p>

					<div className="trash" onClick={() => deleteProducts(item.id)} >
						<FaTrash />
					</div>
				</Body>
			)) 

			: 

			<EmptyCart>
				Carrinho vazio	
			</EmptyCart>
		}
		</Container>
	)
}