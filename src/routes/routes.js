import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login, Register, Home, Products, Cart } from '../containers'

import { Header } from '../components/'

import ProtectedRoutes from './private-routes.js'

function myRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProtectedRoutes element={<><Header /> <Home /></>} />} />
				<Route path="/products" element={<ProtectedRoutes element={<><Header /> <Products /></>} />} />
				<Route path="/cart" element={<ProtectedRoutes element={<><Header /> <Cart /></>} />} />

				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	)
}

export default myRoutes