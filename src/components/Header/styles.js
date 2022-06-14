import styled from 'styled-components'

export const Container = styled.div `
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 18px;
`

export const ContainerLeft = styled.div `
	display: flex;
	gap: 25px ;
`

export const ContainerRight = styled.div `
	display: flex;
	gap: 20px ;

	.bar {
		height: 30px;
		border-right: 0.5px solid #bababa;
	}
`

export const PageLink = styled.div `
	text-decoration: none;
	cursor: pointer;
	color: ${ props => props.isActive ? '#9758A6' : '#555555' };
	font-size: 18px;
	font-weight: ${ props => props.isActive ? 'bold' : '#555555'};
`

export const Text= styled.div `
	margin-left: 10px;
	color: #555555;
`