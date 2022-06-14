import { useState, useEffect } from 'react'

import { toast } from 'react-toastify';

import { Container } from './styles.js'

import { Button } from '../Button'

import FormatCurrency from '../../utils/formatCurrency.js'

import { useCart } from '../../hooks/CartContext.js'

export const CartResume = () => {
	const [ deliveryPrice ] = useState(5)
	const [ finalPrice, setFinalPrice ] = useState(0)

	const { products } = useCart()


	useEffect(() => {
		const total = products.reduce((acc, current) => {
			return current.price * current.quant + acc
		}, 0)


		setFinalPrice(total)
	}, [products])

	return (
		<div>
			<Container>
				<div className="containerTop" >
					<h2 className="title" >Resumo do pedido</h2>

					<p className="itens" >Itens</p>
					<p className="itensPrice" >{ FormatCurrency(finalPrice) }</p>

					<p className="tax" >Taxa de entrega</p>
					<p className="taxPrice" >{ FormatCurrency(deliveryPrice) }</p>
				</div>
				<div className="containerBottom">
					<p>Total</p>
					<p>{ FormatCurrency(finalPrice + deliveryPrice) }</p>
				</div>
			</Container>

			<Button style={{ width: '100%' , marginTop: 30 }} onClick={() => toast.success('Finalizado com sucesso!') } >Finalizar</Button>
		</div>
	)
}