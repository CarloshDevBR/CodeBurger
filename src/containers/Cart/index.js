import { Container, Img, Wrapper } from './styles.js'

import Banner from '../../assets/imgCart.svg'

import { CartItens, CartResume } from '../../components'

export const Cart= () => {
	return (
		<Container>
			<Img src={Banner} alt="banner" />
			
			<Wrapper>	
				<CartItens />

				<CartResume />
			</Wrapper>
		</Container>
	)
}