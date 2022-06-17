import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/CartContext.js'

import Carousel from 'react-elastic-carousel'

import { Container, Img, BoxCarouselOffers, Button } from './styles.js'

import Offers from '../../assets/OFERTAS.png'

import FormatCurrency from '../../utils/formatCurrency.js'

import Batatas from '../../assets/batatas.png'
import Bebidas from '../../assets/bebidas.png'
import Burgers from '../../assets/burgers.png'
import Sobremesas from '../../assets/sobremesas.png'

export const OffersCarousel = () => {
	const { putProducts } = useCart()
	const navigate = useNavigate()

	const [ offers ] = useState([
		{
			id: 13,
			name: 'Batatas',
			img: Batatas,
			price: 99.99

		},
		{
			id: 14,
			name: 'Bebidas',
			img: Bebidas,
			price: 99.99
		},
		{
			id: 15,
			name: 'Sobremesas',
			img: Sobremesas,
			price: 99.99
		},
		{
			id: 16,
			name: 'Burgers',
			img: Burgers,
			price: 99.99
		},
		{
			id: 17,
			name: 'Burgers',
			img: Sobremesas,
			price: 99.99		}
	])

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 400, itemsToShow: 2 },
		{ width: 600, itemsToShow: 3 },
		{ width: 900, itemsToShow: 4 },
		{ width: 1300, itemsToShow: 5 }
	]

	return (
		<Container>
			<img src={Offers} alt="banner" style={{ width: '20% ' }} />

			<Carousel itemsToShow={5} style={{ width: '90%' }} breakPoints={breakPoints} >
  				{ 
					offers && offers.map(offers => (
						<BoxCarouselOffers key={offers.id} >
							<Img src={offers.img} alt={offers.name} />
							<p>Nome do produto</p>
							<p>{ FormatCurrency(offers.price) }</p>
							<Button onClick={() => {
								putProducts(offers)
								navigate('/cart')
							}} >Peça agora</Button>
						</BoxCarouselOffers>
					)) 
				}
			</Carousel>

		</Container>
	)
}
