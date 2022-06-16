import { CardProducts } from '../../components/'

import { useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { Container, Img, Button, Menu, ProductsContainer } from './styles.js'

import BannerProducts from '../../assets/bannerProducts.svg'
import productOne from '../../assets/product-1.png'
import productTwo from '../../assets/product-2.png'

export const Products = () => {
	const { state } = useLocation()

	let id = 0

	if(state?.categoryID) {
		id = state.categoryID
	}

	const [ activeCategory, setActiveCategory ] = useState(id)
	const [ filteredCategory, setFilteredCategory ] = useState()
	const [ itens ] = useState([
		{
			id: 0,
			category: 'Todos'
		},
		{
			id: 1,
			category: 'Entradas'
		},
		{
			id: 2,
			category: 'Bebidas'
		},
		{
			id: 3,
			category: 'Sobremesas'
		},
		{
			id: 4,
			category: 'Lanches'
		},
		{
			id: 5,
			category: 'Outros'
		}
	])

	const [ products ] = useState([
		{	
			id: 1,
			category: 1,
			name: 'x-tudo',
			img: productOne,
			price: 29
		},
		{	
			id: 2,
			category: 1,
			name: 'x-tudo',
			img: productTwo,
			price: 29
		},
		{	
			id: 3,
			category: 1,
			name: 'x-tudo',
			img: productOne,
			price: 29
		},
		{	
			id: 4,
			category: 1,
			name: 'x-tudo',
			img: productTwo,
			price: 29
		},
		{	
			id: 5,
			category: 2,
			name: 'x-tudo',
			img: productOne,
			price: 29
		},
		{	
			id: 6,
			category: 3,
			name: 'x-tudo',
			img: productTwo,
			price: 29
		},
				{	
			id: 7,
			category: 3,
			name: 'x-tudo',
			img: productOne,
			price: 29
		},
		{	
			id: 8,
			category: 4,
			name: 'x-tudo',
			img: productTwo,
			price: 29
		},
		{	
			id: 9,
			category: 4,
			name: 'x-tudo',
			img: productOne,
			price: 29
		},
		{	
			id: 10,
			category: 4,
			name: 'x-tudo',
			img: productTwo,
			price: 29
		},
		{	
			id: 11,
			category: 5,
			name: 'x-tudo',
			img: productOne,
			price: 29
		},
		{	
			id: 12,
			category: 5,
			name: 'x-tudo',
			img: productTwo,
			price: 29
		},
	])

	useEffect(() => {
		if(activeCategory !== 0) {
			const newProducts = products.filter(itens => activeCategory === itens.category)

			return setFilteredCategory(newProducts)
		} else {
			setFilteredCategory(products) 
		}

	},[activeCategory, products])

	return (
		<Container>
			<Img src={BannerProducts} alt="banner" />

			<Menu>
				{ itens && itens.map(itens => (
					<Button key={itens.id} isActive={activeCategory === itens.id} onClick={() => { setActiveCategory(itens.id) }} >
						{itens.category}
					</Button>
				))}
			</Menu>

			<ProductsContainer>
				{
					filteredCategory && filteredCategory.map(itens => (
						<CardProducts key={itens.id} product={itens} />	
					))
				}
			</ProductsContainer>
		</Container>
	)
}