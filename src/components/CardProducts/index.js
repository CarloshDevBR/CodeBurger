import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'

import { useNavigate } from 'react-router-dom'

import { BoxProducts, Img, ProductName, ProductPrice } from './styles.js'

import { Button } from '../Button'

import FormatCurrency from '../../utils/formatCurrency.js'

export const CardProducts = ({ product }) => {
	const { putProducts } = useCart()
	const navigate = useNavigate()

	return(
		<BoxProducts>
			<Img src={product.img} alt={product.name} />

			<div>
				<ProductName>{product.name}</ProductName>

				<ProductPrice>{ FormatCurrency(product.price) }</ProductPrice>

				<Button onClick={() => {
								putProducts(product)
								navigate('/cart')
							}} >Adicionar</Button>
			</div>
		</BoxProducts>
	)
}

CardProducts.propTypes = {
	product: PropTypes.object
}