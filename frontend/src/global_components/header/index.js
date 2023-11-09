import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import HamburgerButton from './components/hamburger_button'
import Menu from './components/menu'

const Header = () => {
	const toggle = useSelector(state => state.menu.toggle)

	return (
		<>
			<header className='flex items-center justify-between'>
				<div className='pt-5'>
					<img src='svg/logo2_site_1000×1000.svg' className='w-16' alt='' />
				</div>

				<Menu className='hidden space-x-6 md:flex' />

				<Link
					to='/designs'
					className='hidden rounded baseline md:block p-3 px-6 pt-2 text-white bg-black hover:bg-gray-800'
				>
					Посмотреть дизайны
				</Link>

				<HamburgerButton toggle={toggle} />
			</header>

			{toggle && (
				<Menu className='absolute flex-col flex md:hidden items-center left-6 right-6 self-end py-8 mt-10 space-y-6 sm:w-auto font-bold bg-white sm:self-center drop-shadow-md' />
			)}
		</>
	)
}

export { Header }
