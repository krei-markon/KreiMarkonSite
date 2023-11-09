import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOrders } from '../../src/redux/orders'
import { OrderItem } from '../global_components'

const MyOrdersLayer = () => {
	const dispatch = useDispatch()
	const orders = useSelector(state => state.orders.orders_list)

	useEffect(() => {
		;(async () => {
			const data = await fetch('http://127.0.0.1:8000/api/orders')
			const orders = await data.json()
			dispatch(setOrders({ orders: orders }))
		})()
	}, [dispatch])

	console.log(orders)

	return (
		<div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
			<ul className='flex flex-col mb-32  space-y-6 md:w-1/2'>
				{orders.map(item => (
					<OrderItem key={item} id={item} />
				))}
			</ul>
		</div>
	)
}

export { MyOrdersLayer }
