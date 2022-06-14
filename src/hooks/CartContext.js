import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
	const [ products, setProducts ] = useState([])

	const updateLocalStorage = (item) => {
		localStorage.setItem('cart', JSON.stringify(item))
	}

	const putProducts = async (product) => {
		const index = products.findIndex( prd => prd.id === product.id)

		let item = []

		if(index >= 0) {
			item = products

			item[index].quant = item[index].quant + 1 

			setProducts(item)
			
		} else {
			product.quant = 1

			item = [ product, ...products ]

			setProducts(item)
		}

		await updateLocalStorage(products)
	}

	const deleteProducts = async (id) => {
		const newCart = products.filter(item => id !== item.id)

		setProducts(newCart)

		await updateLocalStorage(newCart)
	}

	const incremented = async (id) => {
		const newCart = products.map(item => { 
			return item.id === id ? { ...item, quant: item.quant + 1 } : item 
		})

		setProducts(newCart)

		await updateLocalStorage(newCart)
	}

	const decremented = async (id) => {
		const index = products.findIndex(item => id === item.id)

		if(products[index].quant > 1) {
			const newCart = products.map(item => { 
				return item.id === id ? { ...item, quant: item.quant - 1 } : item 
		   	})

			setProducts(newCart)

			updateLocalStorage(newCart)
		} else {
			deleteProducts(id)
		}
	}

	useEffect(() => {
		const loadCart = async () => {
			const cart = await localStorage.getItem('cart')
			
			if (cart) {
				setProducts(JSON.parse(cart))
			}
		}

		loadCart()
	},[])

	return (
		<CartContext.Provider value={{ products, putProducts, incremented, decremented, deleteProducts }} >{children}</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)
	
	if (!context) {
		throw new Error('useCart must be used CartContext')
	}

	return context
}
