import { UserProvider } from './UserContext.js'
import { CartProvider } from './CartContext.js'

import PropTypes from 'prop-types'

export const AppProvider = ({ children }) => (
	<CartProvider>
		<UserProvider>{children}</UserProvider>
	</CartProvider>
)


AppProvider.propTypes = {
	children: PropTypes.node
}