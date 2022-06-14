import PropTypes from 'prop-types'

import { BoxProducts, Img, ProductName, ProductPrice } from './styles.js'

import { Button } from '../Button'

import FormatCurrency from '../../utils/formatCurrency.js'

import { useCart } from '../../hooks/CartContext.js'

export const CardProducts = ({ product }) => {
	const { putProducts } = useCart()

	return(
		<BoxProducts>
			<Img src={product.img} alt={product.name} />

			<div>
				<ProductName>{product.name}</ProductName>

				<ProductPrice>{ FormatCurrency(product.price) }</ProductPrice>

				<Button onClick={() => putProducts(product) } >Adicionar</Button>
			</div>
		</BoxProducts>
	)
}

CardProducts.propTypes = {
	product: PropTypes.object
}