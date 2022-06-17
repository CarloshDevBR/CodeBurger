import { Container, ContainerLeft, ContainerRight, PageLink, Text } from './styles.js'

import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useNavigate, useLocation } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext.js'

export const Header = () => {
	const navigate = useNavigate()
	let { pathname: locationPathname } = useLocation()

	const { logout } = useUser()

	const logoutUser = () => {
		logout()

		navigate('/login')
	}

	return (
		<Container>
			<ContainerLeft>
				<PageLink onClick={() => navigate('/')} isActive={locationPathname === '/'} >Home</PageLink>

				<PageLink onClick={() => navigate('/products')} isActive={locationPathname.includes('/products')} >Ver Produtos</PageLink>	
			</ContainerLeft>

			<ContainerRight>
				<PageLink>
					<AiOutlineShoppingCart alt="cart" style={{ color: '#975BAB' }} onClick={() => navigate('/cart')} />
				</PageLink>

				<div className="bar" ></div>

				<Text>
					<PageLink style={{ color: '#975BAB' }} onClick={() => logoutUser() } >Sair</PageLink>
				</Text>
			</ContainerRight>
		</Container>		
	)
}