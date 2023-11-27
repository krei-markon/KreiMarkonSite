import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ApiService } from '../../../services/api_service'

const isAuth = Boolean(window.localStorage.getItem('access'))

const Menu = props => {
	const { className } = props
	const [user, setUser] = useState(null)

	const onLogout = () => {
		window.localStorage.removeItem('access')
		window.localStorage.removeItem('refresh')
		window.location.reload()
	}

	useEffect(() => {
		;(async () => {
			if (isAuth) {
				const user = await ApiService('user/current')
				setUser(user)
			}
		})()
	}, [])

	return (
		<div className={className}>
			{isAuth ? (
				<button onClick={onLogout}>Выйти {user ? user.username : null}</button>
			) : (
				<Link to='/login'>
					<button>Войти</button>
				</Link>
			)}
			<Link to='/designs' className='hover:text-darkGrayishBlue'>
				Дизайны
			</Link>
			{isAuth && (
				<Link to='/order' className='hover:text-darkGrayishBlue'>
					Заказать
				</Link>
			)}
			{isAuth && (
				<Link to='/my_orders' className='hover:text-darkGrayishBlue'>
					Твои заказы
				</Link>
			)}
			<Link to='/' className='hover:text-darkGrayishBlue'>
				О нас
			</Link>
		</div>
	)
}

export { Menu, isAuth }
