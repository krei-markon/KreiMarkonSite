import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => {
	const { className } = props

	return (
		<div className={className}>
			<Link to='/designs' className='hover:text-darkGrayishBlue'>
				Дизайны
			</Link>
			<Link to='/order' className='hover:text-darkGrayishBlue'>
				Заказать
			</Link>
			<Link to='/' className='hover:text-darkGrayishBlue'>
				О нас
			</Link>
		</div>
	)
}

export default Menu
