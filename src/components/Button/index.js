import { Btn } from './styles.js'

import PropTypes from 'prop-types'

export const Button = ({ children, ...rest }) => {
	return <Btn { ...rest } >{children}</Btn>
}

Button.propTypes = {
	children: PropTypes.string
}