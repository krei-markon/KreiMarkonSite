import classNames from 'classnames'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Header, isAuth } from './global_components'
import * as layers from './layers'

const App = () => {
	const location = useLocation()

	return (
		<div>
			<div
				className={classNames(
					'relative container mx-auto p-6',
					location.pathname === '/' &&
						'bg-[url("../public/svg/site_2560×1440.svg")] bg-no-repeat pb-[50%] bg-center'
				)}
			>
				<Header />
			</div>
			<main className='main'>
				<Routes>
					<Route path='/' element={<layers.MainLayer />} />
					{!isAuth && <Route path='/login' element={<layers.LoginLayer />} />}
					<Route path='/designs' element={<layers.DesignsLayer />} />
					{isAuth && <Route path='/order' element={<layers.OrderLayer />} />}
					{isAuth && <Route path='/my_orders' element={<layers.MyOrdersLayer />} />}
				</Routes>
			</main>

			<Footer />
		</div>
	)
}

export default App
