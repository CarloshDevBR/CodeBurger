import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
	const [ userData, setUserData ] = useState({})

	const putUserData = async data => {
		setUserData(data)

		await localStorage.setItem('codeBurger', JSON.stringify(data))
	}

	const logout = async () => {
		await localStorage.removeItem('codeBurger')
	}

	useEffect(() => {
		const loadData = async () => {
			const data = await localStorage.getItem('codeBurger')

			if(data) {
				setUserData(JSON.parse(data))
			}
		}

		loadData()
	}, [])

	return (
		<UserContext.Provider value={{ putUserData, userData, logout }} >
			{ children }
		</UserContext.Provider>
	)
}

export const useUser = () => {
	const context = useContext(UserContext)

	if(!context){
		throw new Error("useUser must be used with UserContext")
	}

	return context
}

UserProvider.propTypes = {
	children: PropTypes.node
}