import { useState } from 'react'

import Carousel from 'react-elastic-carousel'

import { Container, Img, BoxCarouselCategory, Button } from './styles.js'

import Category from '../../assets/CATEGORIAS.png'

import Batatas from '../../assets/batatas.png'
import Bebidas from '../../assets/bebidas.png'
import Burgers from '../../assets/burgers.png'
import Sobremesas from '../../assets/sobremesas.png'

export const CategoryCarousel = () => {
	const [ categories ] = useState([
		{
			id: 1,
			name: 'Entradas',
			image: Batatas

		},
		{
			id: 2,
			name: 'Bebidas',
			image: Bebidas
		},
		{
			id: 3,
			name: 'Sobremesas',
			image: Sobremesas
		},
		{
			id: 4,
			name: 'Lanches',
			image: Burgers
		},
		{
			id: 5,
			name: 'Outros',
			image: Sobremesas
		}
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
			<img src={Category} alt="banner" style={{ width: '30% ' }} />

			<Carousel itemsToShow={5} style={{ width: '90%' }} breakPoints={breakPoints} >
  				{ 
					categories && categories.map(category => (
						<BoxCarouselCategory key={category.id} >
							<Img src={category.image} alt={category.name} />
							<Button to={
								{ 
									pathname: '/products',
									state: { categoryID: category.id }
								}
							} >{category.name}</Button>
						</BoxCarouselCategory>
					)) 
				}
			</Carousel>

		</Container>
	)
}