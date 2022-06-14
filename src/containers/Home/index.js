import { CategoryCarousel, OffersCarousel } from '../../components/'
import { Container, Img } from './styles.js'

import Banner from '../../assets/burgerBanner.svg'

export const Home = () => {
	return (
		<Container>
			<Img src={Banner} alt="banner" />

			<CategoryCarousel />
			
			<OffersCarousel />
		</Container>
	)
}