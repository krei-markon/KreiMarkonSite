import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Mail from './components/mail.js'
import Media from './components/media.js'

const Footer = () => {
	const location = useLocation()
	return (
		<footer className='bg-gray-100'>
			<div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
				{/* Logo and social links container */}
				<div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
					<div className='mx-auto my-6 text-center text-black md:hidden'>
						Copyright &copy; 2022, All Rights Reserved
					</div>
					{/* Logo */}
					<div>
						<img
							src='svg/logo2_site_1000×1000.svg'
							className='center h-10'
							alt=''
						/>
					</div>
					{/* Social Links Container */}
					<Media />
				</div>
				{/* List Container */}
				<div className='flex justify-around space-x-32'>
					<div className='flex flex-col space-y-3 text-black'>
						{/* Как поднять страницу на самый вверх? */}
						<Link to={location} className='hover:underline'>
							Назад
						</Link>
					</div>
				</div>

				<Mail />
			</div>
		</footer>
	)
}

export { Footer }
