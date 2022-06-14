import { useState } from 'react'

import Carousel from 'react-elastic-carousel'

import { Container, Img, BoxCarouselOffers, Button } from './styles.js'

import Offers from '../../assets/OFERTAS.png'

import FormatCurrency from '../../utils/formatCurrency.js'

import Batatas from '../../assets/batatas.png'
import Bebidas from '../../assets/bebidas.png'
import Burgers from '../../assets/burgers.png'
import Sobremesas from '../../assets/sobremesas.png'

export const OffersCarousel = () => {
	const [ offers ] = useState([
		{
			id: 1,
			name: 'Batatas',
			image: Batatas,
			price: 99.99

		},
		{
			id: 2,
			name: 'Bebidas',
			image: Bebidas,
			price: 99.99
		},
		{
			id: 3,
			name: 'Sobremesas',
			image: Sobremesas,
			price: 99.99
		},
		{
			id: 4,
			name: 'Burgers',
			image: Burgers,
			price: 99.99
		},
		{
			id: 5,
			name: 'Burgers',
			image: Sobremesas,
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
							<Img src={offers.image} alt={offers.name} />
							<p>Nome do produto</p>
							<p>{ FormatCurrency(offers.price) }</p>
							<Button>Peça agora</Button>
						</BoxCarouselOffers>
					)) 
				}
			</Carousel>

		</Container>
	)
}
